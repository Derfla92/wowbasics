import React from 'react'

const Walking = () => {

    const handleKey = (event : React.KeyboardEvent<HTMLDivElement>) => {
        console.log(event.key);
        if(event.key === 'Escape')
        {
            console.log("hey");
        }
    }


  return (
    <div onKeyDown={handleKey}>press W</div>
  )
}

export default Walking