import React from 'react'

const DailyMoodsContext = React.createContext({
  daysList: [],
  initialMonthsList: [],
  emojisList: [],
  activeMonth: {},
  selectedEmoji: {},
  selectedEmojiName: '',
  selectedDay: '',
  setselectedDay: () => {},
  setSelectedEmojiName: () => {},
  setActivePrevMonth: () => {},
  setActiveNextMonth: () => {},
  setMood: () => {},
  setSelectEmoji: () => {},
})

export default DailyMoodsContext
