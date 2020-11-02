import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function App() {

const consumers = ['Череповец', 'Санкт-Петербург', 'Новгород' ]

const monthsArr = [
    'Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

const monthsArrEnd = [
  'Января', 'Февраля', 'Марта', 'Апреля',
  'Мая', 'Июня', 'Июля', 'Августа',
  'Сентября', 'Октября', 'Ноября', 'Декабря'
];

const now = new Date();
const currentMonth = 10;

const whoPay = currentMonth % consumers.length  

let prevMonth;

if(currentMonth === 0) {
  prevMonth = 11
} else {
  prevMonth = currentMonth - 1
}

  return (
    <div className="App">
      <p>Период: 14 {monthsArrEnd[prevMonth]} - 14 {monthsArrEnd[currentMonth]} {now.getFullYear()}</p>
      <p>Оплачивает: {consumers[whoPay]}</p>
     
      <table>
        {monthsArr.map((m, index) => <tr key={index} className={`${index === currentMonth && 'active'}`}>
          <td>{m}</td><td>{consumers[index % consumers.length]}</td>
          
          </tr>)}
      </table>

      <p>Стоимость подписки: 299р</p>
      <p>+79992349352</p>

      <CopyToClipboard text={'+79992349352'}>
          <button>Скопировать телефон</button>
      </CopyToClipboard>

    </div>
  );
}

export default App;
