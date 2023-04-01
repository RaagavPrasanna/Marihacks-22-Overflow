import { useEffect, useState } from 'react'
import './DailyAnalysis.css'

function DailyAnalysis(props) {

  const [emoji, setEmoji] = useState("☕")
  const [emojiMeaning, setEmojiMeaning] = useState("Coffee!")

  useEffect(() => {
    if(localStorage.getItem("emoji") === null){
        if (props.caffeine <= 200){
          setEmojiMeaning("You need more caffeine!")
          localStorage.setItem("emojiMeaning", "You need more caffeine!")
          localStorage.setItem("emoji", "😴")
          setEmoji("😴")
        } else if (props.caffeine <= 500 && props.caffeine > 200){
          setEmojiMeaning("You are doing great!")
          localStorage.setItem("emojiMeaning", "You are doing great!")
          localStorage.setItem("emoji", "😖")
          setEmoji("😖")
        } else if (props.caffeine <= 700 && props.caffeine > 500){
          setEmojiMeaning("You are around the recommended amount!")
          localStorage.setItem("emojiMeaning", "You are around the recommended amount!")
          localStorage.setItem("emoji", "😁")
          setEmoji("😁")
        } else if (props.caffeine <= 1000 && props.caffeine > 700){
          setEmojiMeaning("You are over the recommended amount!")
          localStorage.setItem("emojiMeaning", "You are over the recommended amount!")
          localStorage.setItem("emoji", "😵")
          setEmoji("😵")
        } else if(props.caffeine > 1000){
          setEmojiMeaning("TOO MUCH CAFFEINE!")
          localStorage.setItem("emojiMeaning", "TOO MUCH CAFFEINE!")
          localStorage.setItem("emoji", "☠️")
          setEmoji("☠️")
        }
    } else {
      setEmoji(localStorage.getItem("emoji"))
      setEmojiMeaning(localStorage.getItem("emojiMeaning"))
    }
  }, [props.usersSelections])

  return (
    <div className="DailyAnalysis">
      <div className='left'>
          <h1> Daily Analysis </h1>
          <div className='emojiDiv'>
            <p> {emojiMeaning}</p>
            <p className='emoji'> {emoji} </p>
          </div>
          <p className='totalConsumption'> You have consumed: {props.caffeine} mg of Caffeine today!</p>
        </div>
        <div className='right'>
          <h2> Products Consumed </h2>
          <div className='productList'>
            {props.usersSelections.map((product) => {
              return (
                <div className="Product">
                  <h3>{product.drink}</h3>
                </div>
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default DailyAnalysis