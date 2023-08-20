import logo from '@assets/img/logo.svg';
import '@pages/newtab/Newtab.css';
import {getLatinDate} from '@utils/getLatinDate';

export default function Newtab(): JSX.Element {
  const today = getLatinDate();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            {today}
        </p>
      </header>
    </div>
  );
}
