import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext } from './AuthContext/AuthcontextProvider'

const PrivateRoute = ({children}) => {
    const { state } = useContext(AppContext)

if(!state.adminAuth){
    return <Navigate to="/"/>
}
if(!state.isAuth){
    return <Navigate to="/"/>
}

  return (
   children
  )
}

export default PrivateRoute