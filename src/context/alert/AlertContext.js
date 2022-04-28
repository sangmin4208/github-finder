import alertReducer from './AlertReducer'
import { createContext, useCallback, useMemo, useReducer } from 'react'

const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const intialState = null
  const [state, dispatch] = useReducer(alertReducer, intialState)

  // Set an alert
  const setAlert = useCallback((msg, type, duration = 3000) => {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type },
    })
    setTimeout(() => dispatch({ type: 'REMOVE_ALERT' }, duration), 3000)
  }, [])
  const contextValue = useMemo(
    () => ({
      alert: state,
      setAlert,
    }),
    [state, setAlert]
  )
  return (
    <AlertContext.Provider value={contextValue}>
      {children}
    </AlertContext.Provider>
  )
}

export default AlertContext
