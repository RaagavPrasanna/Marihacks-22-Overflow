import { useState } from 'react'
import './DailyAnalysis.css'

function DailyAnalysis(props) {

  function switchEmoji(){
    switch(props.totalCaffeineConsumed){
      case (props.totalCaffeineConsumed <= 300):
        return "😴"
      case (props.totalCaffeineConsumed <= 600 && props.totalCaffeineConsumed > 300):
        return "😖"
      case (props.totalCaffeineConsumed <= 900 && props.totalCaffeineConsumed > 600):
        return "😁"
      case (props.totalCaffeineConsumed <= 1200 && props.totalCaffeineConsumed > 900):
        return "😵"
      case (props.totalCaffeineConsumed > 1200):
        return "☠️"
      default:
        return "☕"
    }
  }

  return (
    <div className="DailyAnalysis">
        <h2> Daily Analysis </h2>
        <p> {switchEmoji()} </p>
        <p> You have consumed: </p>
        {props.usersSelections.map((product) => {
          return (
            <div className="Product">
              <h3>{product.drink}</h3>
            </div>
          )
        })}
    </div>
  )
}

export default DailyAnalysis