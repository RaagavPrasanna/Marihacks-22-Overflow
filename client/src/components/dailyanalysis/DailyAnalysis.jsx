import { useEffect, useState } from 'react'
import './DailyAnalysis.css'

function DailyAnalysis(props) {

  const [emoji, setEmoji] = useState("☕")
  const [emojiMeaning, setEmojiMeaning] = useState("Coffee!")

  useEffect(() => {
      if (props.caffeine <= 200){
        setEmojiMeaning("You need more caffeine!")
        setEmoji("😴")
      } else if (props.caffeine <= 500 && props.caffeine > 200){
        setEmojiMeaning("You are doing great!")
        setEmoji("😖")
      } else if (props.caffeine <= 700 && props.caffeine > 500){
        setEmojiMeaning("You are around the recommended amount!")
        setEmoji("😁")
      } else if (props.caffeine <= 1000 && props.caffeine > 700){
        setEmojiMeaning("You are over the recommended amount!")
        setEmoji("😵")
      } else if(props.caffeine > 1000){
        setEmojiMeaning("TOO MUCH CAFFEINE!")
        setEmoji("☠️")
      }
  }, [props.usersSelections])


  return (
    <div className="DailyAnalysis">
      <div className='left'>
          <h2> Daily Analysis </h2>
          <div className='emojiDiv'>
            <p> {emojiMeaning}</p>
            <p className='emoji'> {emoji} </p>
          </div>
          <p className='totalConsumption'> You have consumed: <b>{props.caffeine} </b>mg of Caffeine today!</p>
        </div>
        <div className='right'>
          <h2> Products Consumed </h2>
          <div className='productList'>
            {props.usersSelections.map((product) => {
              return (
                <div className="Product">
                  <p>{product.drink}</p>
                </div>
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default DailyAnalysis