import logo from '@assets/img/spqr.png';
import '@pages/newtab/Newtab.css';
import '@assets/styles/tailwind.css';
import { getLatinDate } from '@utils/getLatinDate';


export default function Newtab(): JSX.Element {
  const today = getLatinDate();
  return (
    <div className="App bg-olive-green flex items-center justify-center h-screen">
      <header className="App-header text-center">
        <img src={logo} className="App-logo mb-8" alt="Roman Logo" />
        <p className="text-gold font-cinzel text-4xl border-4 p-8">
          {today}
        </p>
      </header>
    </div>
  );
}
