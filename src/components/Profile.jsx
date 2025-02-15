import React, { useContext } from "react"
import UserContext from "../context/UserContext"


const Profile = () => {
    
   //We get user from the UserContextProvider. We use it show data of user..
   const {user} = useContext(UserContext)

   if(!user) return <div>Please Login</div>
   
   return (
    <div>
        <h2>Profile</h2>
        <p>Username: {user.username}</p>
    </div>
   )

}

export default Profile