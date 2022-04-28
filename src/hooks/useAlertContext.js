import { useContext } from 'react'
import AlertContext from '../context/alert/AlertContext'

const useAlertContext = () => {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error('useAlertContext was used outside of its Provider')
  }
  return context
}

export default useAlertContext
