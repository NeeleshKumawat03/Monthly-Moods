import './EmojiContainer.css'

const EmojiContainer = props => {
  const {emojisList, selectedEmoji, setSelectEmoji} = props
  return (
    <ul className="emojis">
      {emojisList.map((emoji, index) => (
        <li
          key={emoji.id}
          className="emojiItem"
          onClick={() => setSelectEmoji(index)}
        >
          <p className="emojiName">{emoji.emojiName}</p>
          <img
            src={emoji.emojiUrl}
            alt={emoji.emojiName}
            className={
              emojisList.indexOf(selectedEmoji) === index
                ? 'selectedEmojidesign'
                : 'emoji'
            }
          />
        </li>
      ))}
    </ul>
  )
}

export default EmojiContainer
