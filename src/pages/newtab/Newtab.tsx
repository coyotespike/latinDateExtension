import logo from '@assets/img/spqr.png';
import '@pages/newtab/Newtab.css';
import '@assets/styles/tailwind.css';
import { getLatinDate } from '@utils/getLatinDate';
import { getHolidayGreeting } from '@utils/holidays';

export default function Newtab(): JSX.Element {
  const today = getLatinDate();
  const date = new Date();
  /* const date = new Date('April 19'); // or July 12, to test */

  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const holidayGreeting = getHolidayGreeting(day, month);

  return (
    <div className="App bg-olive-green flex items-center justify-center h-screen">
      <header className="App-header text-center">
        <img src={logo} className="App-logo mb-8" alt="Roman Logo" />
        <p className="text-gold font-cinzel text-4xl border-4 p-8">
          {today}
        </p>
        {holidayGreeting && (
          <p className="text-gold font-cinzel text-3xl mt-4">
            {holidayGreeting}
          </p>
        )}
      </header>
    </div>
  );
}
