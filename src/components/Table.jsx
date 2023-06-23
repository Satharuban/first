import React from 'react'

export const Table = (props) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>User Name</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
        {props.users.length>0?(
                props.users.map((user)=>(
                    <tr key={user.id}>
                    <td>
                        {user.name}
                    </td>
                    <td>
                        {user.username}
                    </td>
                    <td>
                        <button className='button-edit'>Edit</button>
                        <button className='button-delete'>Delete</button>
                    </td>
                </tr>

                ))):
                (
                    <tr >
                        <td colSpan={3}>
                            No Users
                        </td>
                    </tr>
                )
                }
                              {/* <tr>
                    <td>
                      name
                    </td>
                    <td>
                        username
                    </td>
                    <td>
                        <button className='button-edit'>Edit</button>
                        <button className='button-delete'>Delete</button>
                    </td>
                </tr>
            */}
        </tbody>
    </table>
  )
}
