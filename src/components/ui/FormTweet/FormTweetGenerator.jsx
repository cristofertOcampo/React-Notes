import React, { useState, useEffect } from 'react'
import Alert from 'react-bootstrap/Alert';
import Style from './formTweet.module.css';

export const FormTweetGenerator = () => {
  const [values, setValues] = useState({
    name: '',
    textArea: ''
  })

  const handleInput = (e) => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const [error, setError] = useState(false);

  // lo que se guarda es un arreglo
  const [register, setRegister] = useState([])
  const [text, setText] = useState('')
  const [showText, setShowText] = useState([])


  const handlePost = () => {
    console.log(values.textArea.length);
    if (values.name === '' && values.textArea === '') {
      setError(true)
    } else if (values.textArea.length > 255) {
      setError(true)
    } else {
      setText(values)
      // ... register para hacer una copia del estado(todo su contenido) mas los nuevos elementos a agregar al estado
      setRegister([...register, values])
      setError(false)
    }
  }

  // solo funcionara cuando halla un cambio en el estado register
  useEffect(() => {
    localStorage.setItem('register', JSON.stringify(register))
  }, [register])

  const handleMostrar = () => {
    let storedData = localStorage.getItem('register')
    setShowText(JSON.parse(storedData))
  }
  return (
    <div className={Style.container}>
      <div className={Style.containerFormTweetPost}>
        <div className={Style.FormTweet}>
          <h2>Publica tu tweet</h2>
          <input type="text" className={Style.input} name="name" placeholder="Name..." onChange={handleInput} value={values.name} />
          <textarea name='textArea' onChange={handleInput} value={values.textArea}></textarea>
          <p>{255 - values.textArea.length}</p>
          {error &&
            <Alert variant="danger">No puede tener mas de 255 caracteres</Alert>
          }
          <button onClick={handlePost}>Publicar</button>
          <button onClick={handleMostrar}>Mostrar</button>
        </div>

        <div className={Style.containerPost}>
          <div className={Style.conte}>
            <h2>{text.name}</h2>
            <p>{text.textArea}</p>
          </div>
        </div>
      </div>

      <div className={Style.comments}>
        <h2 className={Style.title}>Comentarios tweet</h2>
        {showText.map((mostrar) => (
          <div className={Style.comments_Content}>
            <h2>{mostrar.name}</h2>
            <p>{mostrar.textArea}</p>
          </div>
        ))}
      </div>
    </div>
  )
}