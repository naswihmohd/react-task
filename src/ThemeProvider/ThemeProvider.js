import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'


export const themeContext= createContext()

function ThemeProvider({children}) {
    const [users,setUsers]= useState([])

    useEffect(()=>{
        axios.get('https://reqres.in/api/users').then((response)=>{
            setUsers(response.data.data)
        })
    },[])

  return (
    <themeContext.Provider value={{users,setUsers}}>
        {children}
    </themeContext.Provider>
  )
}

export default ThemeProvider
