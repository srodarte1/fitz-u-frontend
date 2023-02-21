import React from 'react'
import {useState, useEffect, createContext } from 'react'
import {useNavigate} from 'react-router-dom'

const Context = createContext()

const ContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
// });

useEffect(() => {
  fetch("/authorized_user").then((res) => {
    if (res.status === 200) {
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
      if (resp.status === 200) {
        resp.json().then(userObj => {
          setUser(userObj)
          
          alert("User successfully logged in!")
        })
        .then(() => navigate("/account"))
      } else {
        resp.json().then(messageObj => alert(messageObj.error))
      }
      })
    }
    const handleDelete = (e) => {
      e.preventDefault()
     fetch(`/users/${user.id}`, {method: "DELETE"})
      .then(() => setUser(null))
      .then(() => navigate('/login'))
      
    }
    const handleLogout = (e) => {
     fetch('/logout', {method: "DELETE"})
      .then(() => setUser(null))
      .then(() => navigate('/login'))
      
    }
    const handleSignup = (event, newUser) => {
      event.preventDefault()
      fetch("/signup",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
        .then(resp => {
            if (resp.status === 201) {
                resp.json().then(userObj => {
                  setUser(userObj)
                  // setMessage("User successfully logged in!")
                  
                }) 
                .then(() => navigate("/account"))
            } else {
                resp.json().then(messageObj => alert(messageObj.message))
            }})
          }




  return (
   <Context.Provider value={{user, setUser, handleLogin, handleDelete, handleSignup, handleLogout}}>
    {children}
   </Context.Provider>
  )
}

export {Context, ContextProvider}