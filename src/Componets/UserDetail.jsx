import { useParams } from 'react-router-dom'
import React from 'react'
import './styles.css'
import { useContext } from 'react'
import { themeContext } from '../ThemeProvider/ThemeProvider'

function UserDetail() {
    const { id } = useParams()
    const { users } = useContext(themeContext)

    return (
        <div>
            <div className='text-white user-details'>
                <h1 className='p-3'>User Details</h1>
                <div className="container">
                    {users.filter((user) => user.id == id).map((user) => {
                        console.log(user)
                        return (
                            <div key={user.id} className="row">
                                <div className="col-5">

                                    <img src={user.avatar} alt="" />
                                </div>
                                <div className="col-7">
                                    <h2 > {user.first_name} {user.last_name} </h2>
                                    <h5> {user.email} </h5>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default UserDetail
