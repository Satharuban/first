import React, { useState } from 'react'
import { Table } from './Table';
import { AddUserForm } from './AddUserForm';

export const User3 = () => {

   const usersData=[
    {id:1,name:"Rajee",username:"ksrajee"},
    {id:2,name:"Ravi",username:"jjkravi"},
    {id:3,name:"Rajah",username:"smrajah"},
   ];

   const addUser =(user)=>{
    user.id= users.length + 1;
    setUsers([...users,user])

   }

   const [users,setUsers]=useState(usersData);
  return (
    <div>
         <AddUserForm addUser={addUser}/>
        <Table users={users}/>
    
    </div>
  )
}
