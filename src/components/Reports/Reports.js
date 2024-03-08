import {Component} from 'react'
import DailyMoodsContext from '../../context/DailyMoodsContext'
import Navbar from '../Navbar/Navbar'
import './Reports.css'

class Reports extends Component {
  render() {
    return (
      <DailyMoodsContext.Consumer>
        {value => {
          const {initialMonthsList, emojisList} = value
          const allDates = []
          const overAllEmojiRecord = initialMonthsList.map(data => {
            data.dates.map(date => allDates.push(date))
          })

          console.log('classNames : ', emojisList[0].emojiName.replace(' ', ''))
          return (
            <div>
              <Navbar />
              <div className="reports">
                <h1 className="overall-heading">Overall Emoji Report</h1>
                <ul className="fullData">
                  {emojisList.map(emoji => (
                    <li key={emoji.id} className="yearlyEmojiData">
                      <h1 className="emojiName">{emoji.emojiName}</h1>
                      <img
                        className="emojiDesign"
                        src={emoji.emojiUrl}
                        alt={emoji.emojiName}
                      />
                      <p className="yearlyMood">
                        {
                          allDates.filter(
                            date => date.emojiName === emoji.emojiName,
                          ).length
                        }
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="reports">
                <div className="months">
                  <h1 className="overall-heading">Monthly Reports</h1>
                  <select>
                    {initialMonthsList.map(month => (
                      <option key={month.month}>{month.monthName}</option>
                    ))}
                  </select>
                </div>
                <div className="grid">
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  <div className="dashed-lines" />
                  {emojisList.map(emoji => (
                    <img
                      src={emoji.emojiUrl}
                      alt={emoji.emojiName}
                      className={`${emoji.emojiName.replace(' ', '')}`}
                    />
                  ))}
                  <p className="zero">0</p>
                  <p className="two">2</p>
                  <p className="four">4</p>
                  <p className="six">6</p>
                  <p className="eight">8</p>

                  <span className="bar1" />
                  <span className="bar2" />
                </div>
              </div>
            </div>
          )
        }}
      </DailyMoodsContext.Consumer>
    )
  }
}

export default Reports
