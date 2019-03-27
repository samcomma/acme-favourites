import React from 'react'
import { Link } from 'react-router-dom'


const Nav = ({location: { pathname }, history, counts})=> {

  const links = [
    {
      title: 'Users',
      path: '/users'
    },
    {
      title: 'Things',
      path: '/things'
    },
    {
      title: 'Create User',
      path: '/users/create'
    }
  ]
  return (
    <ul>
      {
        links.map(link => (
          <li key={ link.path }>
            <Link to={ link.path }>
              { link.title } ({ counts[link.path] })
            </Link>
          </li>
        ))
      }
    </ul>
  )
}



export default Nav