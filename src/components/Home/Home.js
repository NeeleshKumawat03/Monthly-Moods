import {Component} from 'react'
import Navbar from '../Navbar/Navbar'
import CalenderContainer from '../CalenderContainer/CalenderContainer'
import './Home.css'
import EmojiContainer from '../EmojiContainer/EmojiContainer'
import DataContainer from '../DataContainer/DataContainer'
import DailyMoodsContext from '../../context/DailyMoodsContext'

const Home = () => (
  <DailyMoodsContext.Consumer>
    {value => {
      const {
        activeMonth,
        setMood,
        daysList,
        setActiveNextMonth,
        setActivePrevMonth,
        emojisList,
        selectedEmoji,
        setSelectEmoji,
        selectedEmojiName,
        setSelectedEmojiName,
        selectedDay,
        setSelectedDay,
      } = value

      console.log('Printing Selectedd Day : ', selectedDay, setSelectedDay)
      return (
        <div className="">
          <Navbar />
          <h1 className="heading">Moods in a Month</h1>
          <div className="home-container">
            <CalenderContainer
              activeMonth={activeMonth}
              daysList={daysList}
              setMood={setMood}
              setActiveNextMonth={setActiveNextMonth}
              setActivePrevMonth={setActivePrevMonth}
            />
            <div className="emoji-data-container">
              <EmojiContainer
                emojisList={emojisList}
                selectedEmoji={selectedEmoji}
                setSelectEmoji={setSelectEmoji}
              />
              <DataContainer
                daysList={daysList}
                emojisList={emojisList}
                selectedEmojiName={selectedEmojiName}
                setSelectedEmojiName={setSelectedEmojiName}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                activeMonth={activeMonth}
              />
            </div>
          </div>

          <div className="home-container-mobile">
            <div className="calender">
              <CalenderContainer
                activeMonth={activeMonth}
                daysList={daysList}
                setMood={setMood}
                setActiveNextMonth={setActiveNextMonth}
                setActivePrevMonth={setActivePrevMonth}
              />
            </div>

            <div className="emoji-container">
              <EmojiContainer
                emojisList={emojisList}
                selectedEmoji={selectedEmoji}
                setSelectEmoji={setSelectEmoji}
              />
            </div>
            <div className="data">
              <DataContainer
                daysList={daysList}
                emojisList={emojisList}
                selectedEmojiName={selectedEmojiName}
                setSelectedEmojiName={setSelectedEmojiName}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}
                activeMonth={activeMonth}
              />
            </div>
          </div>
        </div>
      )
    }}
  </DailyMoodsContext.Consumer>
)

export default Home
