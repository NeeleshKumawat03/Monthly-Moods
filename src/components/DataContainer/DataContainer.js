import './DataContainer.css'

const DataContainer = props => {
  console.log(props)
  const {
    emojisList,
    daysList,
    selectedEmojiName,
    setSelectedEmojiName,
    selectedDay,
    setSelectedDay,
    activeMonth,
  } = props

  const filteredData = activeMonth.dates.filter(
    date => date.day === selectedDay && date.emojiName === selectedEmojiName,
  )

  const setEmojiName = event => {
    console.log(event.target.value)
    setSelectedEmojiName(event.target.value)
  }

  const setDay = event => {
    console.log(event.target.value)
    setSelectedDay(event.target.value)
  }

  return (
    <div className="data-container">
      <div className="select-tab-container">
        <select className="select-tab" onChange={setEmojiName}>
          {emojisList.map((emoji, index) => (
            <option
              key={emoji.id}
              value={emoji.emojiName}
              className={
                emoji.emojiName === selectedEmojiName
                  ? 'selected-option'
                  : 'option'
              }
            >
              {emoji.emojiName}
            </option>
          ))}
        </select>

        <select className="select-tab" onChange={setDay}>
          {daysList.map((day, index) => (
            <option
              key={day.id}
              value={day.day}
              className={day.day === selectedDay ? 'selected-option' : 'option'}
            >
              {day.day}
            </option>
          ))}
        </select>
      </div>
      <p className="data">{filteredData.length}</p>
    </div>
  )
}

export default DataContainer
