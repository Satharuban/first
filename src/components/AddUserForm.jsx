import React, { useState } from 'react'

export const AddUserForm = (props) => {
    const initialFormState={id:null, name:"",value:""}
    const [user,setUser]=useState(initialFormState);

    const handleInputChange=(event)=>{
      const {name,value}=event.target
      console.log={name,value}
      setUser({...user,[name]:value})
    }


  return (
    <div>
        <h1>CRUD app with hooks</h1>
        <h2>Add User</h2>
        <form onSubmit={event=>{
          event.preventDefault();
          if(!user.name||!user.username) return;
          props.addUser(user);
          setUser(initialFormState);
        }}>
        <div>Name:</div>
            <input type="text" name='name' value={user.name} onChange={handleInputChange}/>
       
        <div>User Name:</div>
            <input type="text" name='userName' value={user.username} onChange={handleInputChange}/>
        
        <button >Add</button>
        </form>
    </div>
  )
}
