import React from 'react'

const Things = ({ users, things, favourites })=> {
  const userMap = users.reduce((acc, user)=> {
    acc[user.id] = user
    return acc
  }, {})
  
  return (
    <ul>
      {
        things.map(thing => (
          <li key={ thing.id }>
            { thing.name }
            <ul>
              {
                favourites.filter(favourite => favourite.thingId === thing.id)
                  .map(favourite => (
                    <li key={ favourite.id }>favourited by: { userMap[favourite.userId].name }</li>
                  ))
              }
            </ul>
          </li>
        ))   
      }
    </ul>
  )
}


export default Things