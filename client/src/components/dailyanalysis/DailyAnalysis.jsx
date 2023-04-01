import { useEffect, useState } from 'react'
import './DailyAnalysis.css'

function DailyAnalysis(props) {

  const [emojiMeaning, setEmojiMeaning] = useState("Coffee!")

  return (
    <div className="DailyAnalysis">
      <div className='left'>
          <h1> Daily Analysis </h1>
          <div className='emojiDiv'>
            <p> {props.emojiMeaning}</p>
            <p className='emoji'> {props.emoji} </p>
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