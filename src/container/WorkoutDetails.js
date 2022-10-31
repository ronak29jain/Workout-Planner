import React from 'react'
import { useWorkoutContext } from '../context/WorkoutContext';

// date-fns
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

function WorkoutDetails({workout}) {

  const {dispatch} = useWorkoutContext();

  const handleDelete = async() => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })

    const json = await response.json();

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <div className='workout-details' >
      <h4>{workout.title}</h4>
      <p><strong>Load (Kg):</strong> {workout.load}</p>
      <p><strong>Reps:</strong> {workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete} className='material-symbols-outlined' >Delete</span>
    </div>
  )
}

export default WorkoutDetails