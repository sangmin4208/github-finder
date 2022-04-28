import { createContext, useMemo, useReducer } from 'react'
import githubReducer from './GithubReducer'
const GithubContext = createContext()

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)

  const contextValue = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  )
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
