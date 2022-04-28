import { createContext, useCallback, useMemo, useReducer } from 'react'
import githubReducer from './GithubReducer'
const GithubContext = createContext()
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)
  const setLoading = useCallback(() => {
    dispatch({ type: 'SET_LOADING' })
  }, [])

  const searchUsers = useCallback(
    async (text) => {
      setLoading()
      const params = new URLSearchParams({
        q: text,
      })
      console.log(`${GITHUB_URL}/search/users/?${params.toString()}`)

      const response = await fetch(
        `${GITHUB_URL}/search/users?${params.toString()}`,
        {
          headers: {
            Authorization: `token ${GITHUB_TOKEN}`,
          },
        }
      )
      const data = await response.json()
      dispatch({ type: 'GET_USERS', payload: data.items })
    },
    [setLoading]
  )
  const clearUsers = useCallback(() => {
    dispatch({ type: 'CLEAR_USERS' })
  }, [])

  const contextValue = useMemo(
    () => ({
      ...state,
      searchUsers,
      clearUsers,
    }),
    [state, searchUsers, clearUsers]
  )
  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubContext
