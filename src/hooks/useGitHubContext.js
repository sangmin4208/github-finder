import { useContext } from 'react'
import GithubContext from '../context/github/GithubContext'

const useGitHubContext = () => {
  const context = useContext(GithubContext)
  if (context === undefined) {
    throw new Error('useUserContext was used outside of its Provider')
  }
  return context
}

export default useGitHubContext
