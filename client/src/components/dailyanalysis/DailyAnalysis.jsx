import { useEffect, useState } from 'react'
import './DailyAnalysis.css'

function DailyAnalysis(props) {

  const [emojiMeaning, setEmojiMeaning] = useState("Coffee!")

  return (
    <div className="DailyAnalysis">
      <div className='leftSide'>
          <h2> Daily Analysis </h2>
          <div className='emojiDiv'>
            <p> {props.emojiMeaning}</p>
            <p className='emoji'> {props.emoji} </p>
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