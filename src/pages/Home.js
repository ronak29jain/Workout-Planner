import React, { useEffect } from 'react'
import { useWorkoutContext } from '../context/WorkoutContext'

//components
import WorkoutDetails from '../container/WorkoutDetails'
import WorkoutForm from '../container/WorkoutForm'

function Home() {

  // const [workouts, setWorkouts] = useState(null)
  const {workouts, dispatch} = useWorkoutContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
    //   await fetch('/api/workouts/')
    //     .then(response => response.json())
    //     // .then(data => setWorkouts(data))
    //     .then(data => dispatch({type: 'SET_WORKOUTS', payload: data}))
    //     .catch(error => console.log(error))
      
      const response = await fetch('/api/workouts/')
      const json = await response.json()
      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts();
  }, [])

  return (
    <div className='home'>
      {/* <h1>Home</h1> */}
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          // <h2 key={workout._id}>{workout.title}</h2>
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home