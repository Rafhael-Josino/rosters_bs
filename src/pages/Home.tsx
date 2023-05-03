import { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiRadioactive } from 'react-icons/gi';
import Header from '../components/Header';

function Home() {
  const [file, setFile] = useState<File>();
  const [operativesString, setOperativesString] = useState<string>('');

  /**
   * Handlers
   */
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(event.target.files[0]);
}

  // See if touchscreen triggers the same event
  const onSubmitHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (event) => {
        // console.log(event.target?.result)

        setOperativesString(event.target?.result as string)

        // const array = (event.target?.result as string).match(/<li class="rootselection">(.+|\n)+<\/li>/);
        // console.log(array)
      };

      fileReader.readAsText(file);
    } else {
      console.log("Failed to load file");
    }
  }


  return <div>
    <Header />

    <div className='rosters_list' style={{'backgroundColor': 'yellowgreen'}}>
      <Link
        state={{ 'align-itens': 'center' }} 
        to="DeathGuard">Death Guard <GiRadioactive /></Link>
    </div>

    <div className='rosters_list'>
      <div>New Roster</div>
      <form>
        <input type='file' accept='html' onChange={event => onChangeHandler(event)}/>

        <button onClick={event => onSubmitHandler(event)}>
          Upload team list
        </button>
      </form>
    </div>

    <div dangerouslySetInnerHTML={{
      __html: operativesString,
    }}>

    </div>
    
    <div className='footnote'>
        Uses lists created with: <a href="https://www.battlescribe.net">BattleScribe</a>
    </div>
  </div>
}

export default Home;