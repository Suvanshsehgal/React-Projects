import React from 'react'
import UserContext from '../context/UserContext'
import { useState, useContext } from 'react'
function Profile() {
    const {user} = useContext(UserContext);

    if(!user) return <div>please login</div>
  return (
    <>
    <h1>Welcome{user.username}</h1>
    </>
  )
}

export default Profile