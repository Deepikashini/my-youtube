import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const listOfButton = ["All", "Mixes", "Live", "Music", "JavaScript", "Thoughts", "Blessings","Indian cuisine", "Street food", "Dogs", "Desserts"];
  return (
    <div className="flex">
      {listOfButton.map((item, index) => (
        <Button key={index} name={item}/>
      ))}  
    </div>
  )
}

export default ButtonList
