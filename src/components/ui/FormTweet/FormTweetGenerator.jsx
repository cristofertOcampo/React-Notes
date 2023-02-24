import React from 'react'
import Style from './formTweet.module.css'

export const FormTweetGenerator = () => {
  return (
    <div className={Style.container}>
      <h2 className={Style.title}>Generador de tweets</h2>
      <div className={Style.formResult}>
        <div className={Style.form}>

          <h2>Escribe tu Tweet</h2>
          <textarea className="textarea inputs" cols="15" rows="10" maxlength="255"  />

          <p className={Style.counter}>Counter ➡ <span id="span-counter">255</span></p>

          <div className="buttons">
            <button className="btn-send button" id="btn-send">Send</button>
            <button className="converter button" id="btn-convert" value="true">Upper case</button>
          </div>
        </div>

        <div className={Style.containerResult}>
          <p className="result-comment" id="result-comment">lohddjdjdnjkdnjvkncdnjjdkncdkjncjnckjcncdjknckjncnjk</p>
        </div>
      </div>
    </div>
  )
}