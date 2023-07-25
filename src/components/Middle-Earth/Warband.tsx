import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-overlays/Modal';
import{ ModalProps} from 'react-overlays/cjs/Modal';
import { SlArrowLeftCircle } from 'react-icons/sl';

import { getWarriors, updateWarrior } from '../../apis/AWS_API';
import { MiddleEarthOperativeType } from '../../utils/types';
import Header from '../Header';
import WarriorComponent from './WarriorComponent';
import WarriorCompenentForm from './WarriorComponentForm';
import WoundChart from './WoundChart';
import Spinner from '../Spinner';

interface Props {
  warband: string;
  username: string;
}

export default function Warband (props: Props) {
  /**
   * Properties and State
   */
  const { warband, } = props; // username will be used when backend|DB get fixed
  const [warriors, setWarriors] = useState<MiddleEarthOperativeType[] | null>(null);
  const [showWarriorByIndex, setShowWarriorByIndex] = useState<number>();
  const [showModal, setShowModal] = useState<number>(-1);
  // const [saveChanges, setSaveChanges] = useState(false);

  /**
   * Handlers
   */
  const setShowWarriorHandler = (newIndex: number) => {
    const index = newIndex === showWarriorByIndex ? -1 : newIndex;
    setShowWarriorByIndex(index);
  }

  const updateWarriorsHandler = (index: number, newWarrior: MiddleEarthOperativeType) => {
    if (warriors) {
      const newWarriors = warriors.map(w => w);
      newWarriors[index] = newWarrior;
      sessionStorage.setItem('warriors_' + warband, JSON.stringify(newWarriors));
      updateWarrior(newWarrior);
      setWarriors(newWarriors);
      closeModalHandler();
      // setSaveChanges(true);
    }
    else {
      console.log("Warriors list is empty");
    }
  }


  /**
   * Modal
   */
    const closeModalHandler = () => setShowModal(-1);

    const renderBackdrop = (props: ModalProps) => <div className='backdrop' {...props} />
  
  
  /**
   * Component's elements
   */
  const renderedWarband = warriors === null?
    <Spinner message='' />
  :
    warriors.map((warrior, index) => {
      return <div
        key={warrior.name}
        className='warrior-div' 
      >
        {
          index === showWarriorByIndex?
            <WarriorComponent 
              warrior={warrior} 
              setShowWarriorByIndex={setShowWarriorByIndex}
              openModalHandler={() => setShowModal(index)}
            />
          :  
            <div 
              className='closed-sheet'
              onClick={() => setShowWarriorHandler(index)}       
            >
              {warrior.name}
            </div>
        }
      </div>
    });


  /**
   * Use Effect
   */
  useEffect(() => {
    const loadData = async () => {
      const res = await getWarriors(warband);
      console.log("Got from server:\n", res);

      sessionStorage.setItem('warriors_' + warband, JSON.stringify(res));
      setWarriors(res)
    }

    const warriors = sessionStorage.getItem('warriors_' + warband);

    if (warriors) {
      console.log("Got from session storage:\n", warriors)
      setWarriors(JSON.parse(warriors));
    } else {
      loadData();
    }
  }, [warband]);




  /**
   * Function return
   */
  return <div>
    <Header title={warband} color={'rgb(106,130,168)'} />

    <div className='battlescribe'>
      <div className='list_row return'>
        <Link to='/MiddleEarth'><SlArrowLeftCircle className='react-icons' /></Link>
      </div>

      {/* {
        saveChanges?
          <div>
            Changes unsaved
          </div>
        :
          null
      } */}

      {renderedWarband}

      <WoundChart />

      <Modal
        className='modal'
        show={showModal !== -1}
        onHide={closeModalHandler}
        renderBackdrop={renderBackdrop}
      >
        {
          warriors?
            <WarriorCompenentForm
              warrior={warriors[showModal]}
              index={showModal}
              updateWarriors={updateWarriorsHandler}
            />
          :
            <div>Some problem happended</div>
        }
      </Modal>
    </div>
  </div>
}