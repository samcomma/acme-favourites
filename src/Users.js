import React from 'react'

const Users = ({ users, things, favourites })=> {
  const thingsMap = things.reduce((acc, thing)=> {
    acc[thing.id] =thing
    return acc
  }, {})
  console.log(thingsMap)
  return (
    <ul>
      {
        users.map(user => (
          <li key={ user.id }>
            { user.name }
            <ul>
              {
                favourites.filter(favourite => favourite.userId === user.id)
                  .map( favourite => (
                    <li key={ favourite.id }>{ thingsMap[favourite.thingId].name } ({ favourite.rank })</li>
                  ))
              }
            </ul>
          </li>
        ))
      }
    </ul>  
  )
}

export default Users