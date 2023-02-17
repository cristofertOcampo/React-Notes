import React, { useState, useRef } from 'react'
import Style from './ChangeColor.module.css'




export const ChangeColor = () => {

  // const [color, setColor] = useState('object');
  const container = useRef();

  const handleChangeColor = event => container.current.style.backgroundColor = event.target.value;

  return (
    <>
      <main className={Style.mainChangeColor}>
        <div ref={container} className={Style.containerChangeColor}>
          <p className={Style.text}>Color</p>
        </div>
        <input onChange={handleChangeColor} type="color" name="" id="input-color" />
      </main>
    </>
  )
}
