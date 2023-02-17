import React from 'react'
import {useState, useEffect, createContext } from 'react'

const Context = createContext()

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
});

useEffect(() => {
  fetch("/authorized_user").then((res) => {
    if (res.ok) {
      res.json().then((user) => {
        setUser(user);
      });
    } else {
      setUser(null)
    }
  });
}, [setUser]);

// if (!user) {
// //   return showLogin ? (
// //     <Login />
// //   ) : (
// //     <Signup />
// //   );
// // }

  const handleLogin = (e, formData) => {
    e.preventDefault()
    console.log(formData)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json().then(userObj => {
          setUser(userObj)
          alert("User successfully logged in!")
        })
      // } else {
      //   resp.json().then(messageObj => alert(messageObj.error))
      // }
      }
    })
}



  return (
   <Context.Provider value={{user, setUser, handleLogin}}>
    {children}
   </Context.Provider>
  )
}

export {Context, ContextProvider}