import React, { useEffect, useState, useRef, useMemo } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { selectUser } from '../../actions/user/select'

import Card from '../../components/Card'
import FormControl from '../../components/FormControl'

import './style.scss'

const END_POINT = 'http://localhost:4000/personas'

const Home = () => {

  const [data, setData] = useState([])
  const [nombres, setNombre] = useState('')
  const [apellidos, setApellido] = useState('')
  const [edad, setEdad] = useState('')
  const [ciudad, setCiudad] = useState('')

  const dispatch = useDispatch()

  const refButton = useRef(null)
  console.log('ref', refButton)
  useEffect(() => {
    getPersons()
    refButton.current.style.color = 'red'
  }, [])

  const getPersons = async () => {
    try {
      const response = await axios.get(`${END_POINT}`)
      const personas = response.data.map((person) => ({
        ...person,
        edit: true
      }))
      console.log('response', personas)
      setData(personas)
    } catch (error) {
      console.log(error)
    }
  }

  const cleanForm = () => {
    setNombre('')
    setApellido('')
    setEdad('')
    setCiudad('')
  }

  const sendPerson = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${END_POINT}`, {
        nombres,
        apellidos,
        edad,
        ciudad,
      })
      cleanForm()
      getPersons()
    } catch (error) {
      console.log(error)
    }
  }

  const updatePerson = async (e, id) => {
    e.preventDefault()

    try {
      await axios.put(`${END_POINT}/${id}`, {
        ...data.find((d)=> d.id === id)
      })
      getPersons()
    } catch (error) {
      console.log(error)
    }
  }

  const deletePersona = async (e, id) => {
    e.preventDefault()

    try {
      await axios.delete(`${END_POINT}/${id}`)
      getPersons()
    } catch (error) {
      console.log(error)
    }
  }

  const onChange = (e, cb) => {
    const { target: { value } } = e
    cb(value)
  }

  const handleOnlyRead = (e, id) => {
    e.preventDefault();
    const newData = data.map((person)=> {
      if (person.id === id) {
        return {
          ...person,
          edit: !person.edit
        }
      }
      return {
        ...person,
        edit: true
      }
    })

    setData(newData)
  }

  const onChangeData = (e, id) => {
    e.preventDefault();
    const { target: { value, name } } = e

    const newData = data.map((person) => {
      if (person.id === id) {
        return {
          ...person,
          [name.toLowerCase()]: value
        }
      }
      return person
    })

    setData(newData)
  }

  const handleChoose = (e, user) => {
    e.preventDefault()
    console.log('userSelected', user)

    dispatch(selectUser(user))
  }

  console.log('AFUERA !!')
  const xData = useMemo(() => {
    console.log('Cambiando nombre')
  }, [nombres])

  return (
    <div className="p_home__wrapper">
      <h3>Formulario</h3>
      <form className="p_home_form" onSubmit={sendPerson}>
        <FormControl
          label="Nombres"
          name="nombres"
          value={nombres}
          onChange={(e) => onChange(e, setNombre)}
        />
        <FormControl
          label="Apellido"
          name="apellidos"
          value={apellidos}
          onChange={(e) => onChange(e, setApellido)}
        />
        <FormControl
          label="Edad"
          name="edad"
          value={edad}
          onChange={(e) => onChange(e, setEdad)}
        />
        <FormControl
          label="Ciudad"
          name="ciudad"
          value={ciudad}
          onChange={(e) => onChange(e, setCiudad)}
        />
        <input type="submit" id="submit" value="Guardar" ref={refButton} />
      </form>
      <div className="p_home__wrapper_card">
        {
          data.length > 0 &&
          data.map((person) => (
            <Card
              key={person.id}
              onChange={(e) => onChangeData(e, person.id)}
              handleDelete={(e) => deletePersona(e, person.id)}
              handleUpdate={(e) => updatePerson(e, person.id)}
              handleOnlyRead={(e) => handleOnlyRead(e, person.id)}
              handleChoose={(e) => handleChoose(e, person)}
              label1={{ label: "Nombres", value: person.nombres, edit: person.edit }}
              label2={{ label: "Apellidos", value: person.apellidos, edit: person.edit }}
              label3={{ label: "Edad", value: person.edad, edit: person.edit }}
              label4={{ label: "Ciudad", value: person.ciudad, edit: person.edit }}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home
