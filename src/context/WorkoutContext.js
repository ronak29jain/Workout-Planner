import { createContext, useContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutReducer = (state, action) => {
  switch(action.type) {
    case 'SET_WORKOUTS':
      return {
        ...state,
        workouts: action.payload
      }
    case 'CREATE_WORKOUT':
      return {
        ...state,
        workouts: [action.payload, ...state.workouts]
      }
    case 'DELETE_WORKOUT':
      return {
        ...state,
        workouts: state.workouts.filter((workout) => workout._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({children}) => {
  
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  })

  return(
    <WorkoutContext.Provider value={{...state, dispatch}}>
      {children}
    </WorkoutContext.Provider>
  )
}

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext)

  if(!context) {
    throw Error('useWorkoutContext must be used inside the WorkoutContextProvider')
  }

  return context;
}