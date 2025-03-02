const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

import axios from 'axios'

const getQuestions = async (idProducto) => {
  try {
    const response = await axios.get(API_URL + '/questions/' + idProducto)
    return response.data.results
  } catch (error) {
    console.error('Error obteniendo preguntas:', error)
  }
}

const addQuestions = async (idUsuario, idProducto, pregunta) => {
  try {
    const response = await axios.post(API_URL + '/addQuestion', {
      idUsuario,
      idProducto,
      pregunta,
    })
    return response.data
  } catch (error) {
    console.error('Error agregando pregunta:', error)
  }
}

const answerQuestion = async (idPregunta, idProducto, respuesta) => {
  try {
    const response = await axios.post(API_URL + '/answerQuestion', {
      idPregunta,
      idProducto,
      respuesta,
    })
    return response.data
  } catch (error) {
    console.error('Error respondiendo pregunta:', error)
  }
}

export default {
  getQuestions,
  addQuestions,
  answerQuestion,
}
