import React from 'react'

const Total = ({parts}) =>{

  const count = parts.reduce( (sum, part) => sum + part.exercises, 0)

    return (
      <div>
        <p>
         Number of exercises {count}
        </p>
      </div>
    )
  }

export default Total