// import { set } from 'mongoose'
import React, { useReducer, useState } from 'react'
import { useWorkoutContext } from '../context/WorkoutContext'
// import { post } from '../../../../../../Small Project/MERN Stack Example/Workout_List/backend/routes/workouts'

function WorkoutForm() {
  
  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyField, setEmptyField] = useState([])

  const {dispatch} = useWorkoutContext()

  const handleSubmit = async (e) => {
    e.preventDefault()

    // setError('')
    const workout = { title, load, reps}

    const response = await fetch('/api/workouts',{
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyField(json.emptyFields)
    }
    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyField([])
      dispatch({type:'CREATE_WORKOUT', payload: json})
      // dispatch({type: 'SET_WORKOUTS', payload: json})
      console.log('new workout added: ', json)
    }

  }

  return (
    <form className='create' onSubmit={handleSubmit}>
      <h3>Create New Workout</h3>

      <label>Workout:</label>
      <input 
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={ emptyField.includes('title') ? 'error' : ''}
      />

      <label>Load (in Kg):</label>
      <input 
        type="number"
        value={load}
        onChange={(e) => setLoad(e.target.value)}
        className={ emptyField.includes('load') ? 'error' : ''}
      />
      
      <label>Reps:</label>
      <input 
        type="number"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        className={ emptyField.includes('reps') ? 'error' : ''}
      />

      <button>Add Workout</button>

      {
        error 
        ? <div className="error">
            {error}
          </div>
        : null
      }
      
    </form>
  )
}

export default WorkoutForm