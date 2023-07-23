import { useState } from 'react';
import { Form } from "react-router-dom";
import { MiddleEarthOperativeType } from "../../utils/types";

interface Props {
  warrior: MiddleEarthOperativeType
}

export default function WarriorComponent (props: Props) {
  const {
    name,
    hero, 
    points,
    chosenPath,
    status,
    powers,
    wargear,
    specialRules,
    injuries,
    xp,
  } = props.warrior;

  const [inputName, setInputName] = useState(name);
  const [inputHero, setInputHero] = useState(hero);
  const [inputPoints, setInputPoints] = useState(points);

  return <Form className='warrior-form'>
    <div className='submit-warrior-form line name'>Confirm</div>
    <div className="sheet">
      {/* <div className="line name">Name: {name}</div> */}
      <div className="line name">
        Name: 
        <input 
          value={inputName}
          onChange={event => setInputName(event.target.value)}
        />
      </div>

      <div className="divisor horizontal" style={{marginTop:'0'}}/>

      <div className="line">
        <div className="type-line left-block">
          <input 
            type='radio' 
            name='type-warrior' 
            value='warrior' 
            checked={!inputHero} 
            onChange={() => setInputHero(false)}
            />Warrior
          <br/>
          <input 
            type='radio' 
            name='type-warrior' 
            value='hero' 
            checked={inputHero}
            onChange={() => setInputHero(true)}
           />Hero<br/>
        </div>

        <div className="type-line right-block">
          <span>Points:</span>
          <input 
            type='number'
            value={inputPoints}
            min={0}
            onChange={event => setInputPoints(Number(event.target.value))}
            style={{'width': '50px'}}
          />
        </div>
      </div>

      <div className="divisor horizontal" />

      <div className="line">Chosen Path: {chosenPath}</div>
      
      <div className="divisor horizontal" />

      <div className="line attributes-line">
        <div className="attributes left-block">
          <div className="status-line">
            <span className="status-value">M</span>
            <span className="status-value">F</span>
            <span className="status-value">S</span>
            <span className="status-value">D</span>
            <span className="status-value">A</span>
            <span className="status-value">W</span>
            <span className="status-value-borderless">C</span>
          </div>

          <div className="divisor vertical" />

          <div className="status-line">
            <span className="status-value">{status.move}</span>
            <span className="status-value">{status.fight}</span>
            <span className="status-value">{status.strength}</span>
            <span className="status-value">{status.defense}</span>
            <span className="status-value">{status.attack}</span>
            <span className="status-value">{status.wounds}</span>
            <span className="status-value-borderless">{status.courage}</span>
          </div>
        </div>

        <div className="attributes right-block">
          <div className="powers-line">
            <span className="status-value">M</span>
            <span className="status-value">W</span>
            <span className="status-value-borderless">F</span>
          </div>

          <div className="divisor vertical" />

          <div className="powers-line">
            <span className="status-value">{powers.might}</span>
            <span className="status-value">{powers.will}</span>
            <span className="status-value-borderless">{powers.fate}</span>
          </div>
        </div>
      </div>

      <div className="divisor horizontal" />

      <div className="line descriptions-line">
        <div className="wargear">
          <div className="title-description">WARGEAR</div>
          <div className="divisor vertical" />
          <div className="description">{wargear}</div>
        </div>
        
        <div className="special-rules">
          <div className="title-description">SPECIAL RULES</div>
          <div className="divisor vertical" />
          <div className="description">{specialRules}</div>
        </div>

        <div className="injuries">
          <div className="title-description">INJURIES</div>
          <div className="divisor vertical" />
          <div className="description">{injuries}</div>
        </div>
      </div>

      <div className="divisor horizontal" />

      <div className="line">XP: {xp}</div>
    </div>
  </Form>
}