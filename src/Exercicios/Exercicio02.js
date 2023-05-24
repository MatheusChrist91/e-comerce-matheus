import React from 'react'

const Exercicio02 = ({post}) => {    

  return (
    <div>
      <h1>Exercicio 02</h1>
      {post.map((item) => (
        <div key={item.id}>
            <li>{item.title}</li>
            <li>{item.content}</li>
        </div>
      ))}

    </div>
  )
}

export default Exercicio02