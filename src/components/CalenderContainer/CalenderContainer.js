import './CalenderContainer.css'
import {IoIosArrowDown} from 'react-icons/io'

const CalenderContainer = props => {
  const {
    activeMonth,
    daysList,
    setMood,
    setActiveNextMonth,
    setActivePrevMonth,
  } = props
  const {month, monthName, dates} = activeMonth
  return (
    <div className="container">
      <div className="calender">
        <div className="months">
          <IoIosArrowDown
            className="navigateMonthLeft"
            data-testid="previous-button"
            onClick={() => setActivePrevMonth(month)}
          />
          <h1 className="monthName">{monthName}</h1>
          <IoIosArrowDown
            className="navigateMonthRight"
            data-testid="next-button"
            onClick={() => setActiveNextMonth(month)}
          />
        </div>

        <ul className="daysList">
          {daysList.map(day => (
            <li key={day.id} className="day">
              <p>{day.day}</p>
            </li>
          ))}
        </ul>

        <ul className="dateList">
          {dates.map((date, index) => (
            <li key={date.id} onClick={() => setMood(index)}>
              <button className="date">
                <p>{date.date}</p>
                {date.emojiName !== '' && (
                  <img src={date.emojiUrl} alt={date.date} className="emoji" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CalenderContainer
