import React from 'react'
import ExemploMap from './ExemploMap'
import ExemploFilter from './ExemploFilter'
import Exercicio01 from '../Exercicios/Exercicio01'
import Exercicio02 from '../Exercicios/Exercicio02'
import Exercicio03 from '../Exercicios/Exercicio03'
import Exercicio04 from '../Exercicios/Exercicio04'
import Exercicio05 from '../Exercicios/Exercicio05'
import Exercicio06 from '../Exercicios/Exercicio06'
import ExercicioUseState1 from '../Exercicios02/ExercicioUseState1'
import ExercicioUseState2 from '../Exercicios02/ExercicioUseState2'
import ExercicioUseState3 from '../Exercicios02/ExercicioUseState3'
import ExercicioUseState4 from '../Exercicios02/ExercicioUseState4'
import ExercicioUseState8 from '../Exercicios02/ExercicioUseState8'
import ExercicioUseState5 from '../Exercicios02/ExercicioUseState5'
import ExercicioUseState6 from '../Exercicios02/ExercicioUseState6'
import ExercicioUseState7 from '../Exercicios02/ExercicioUseState7'

const HomeExercicios = () => {

    const posts = [
        { id: 1, title: 'Post 1', content: 'Conteúdo do post 1' },
        { id: 2, title: 'Post 2', content: 'Conteúdo do post 2' },
        { id: 3, title: 'Post 3', content: 'Conteúdo do post 3' }
        ];

    
  return (
    <div>
      <ExemploMap/>
      <ExemploFilter />
      <hr />
      <Exercicio01 />
      <hr />
      <Exercicio02 post={posts} />
      <hr />
      <Exercicio03 />
      <hr />
      <Exercicio04 />
      <hr />
      <Exercicio05 />
      <hr />
      <Exercicio06 />
      <hr />
      <ExercicioUseState1 />
      <hr />
      <ExercicioUseState2 />
      <hr />
      <ExercicioUseState3 />
      <hr />
      <ExercicioUseState4 />
      <hr />
      <ExercicioUseState5 />
      <hr />
      <ExercicioUseState6 />
      <hr />
      <ExercicioUseState7 />
      <hr />
      <ExercicioUseState8 />
    </div>
  )
}

export default HomeExercicios