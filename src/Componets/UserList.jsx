
import './styles.css'
import React from 'react'
import { themeContext } from '../ThemeProvider/ThemeProvider'
import { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from 'react-router-dom'

function UserList() {
    const { users } = useContext(themeContext)
    console.log(users)

    return (
        <div>
            <h1 className='text-center head text-white p-3'>Users</h1>
            <div className="card-section">
                {users.map((user) => {
                    return (
                        <Link className='dec' to={`/details/${user.id}`}>
                            <div key={user.id} className="user-card">
                                <img className='mt-4' src={user.avatar} alt="" />
                                <h4 className='mt-4'>{user.first_name} {user.last_name}</h4>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <Outlet />
        </div>
    )
}

export default UserList
