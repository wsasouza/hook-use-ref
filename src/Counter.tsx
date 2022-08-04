import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function increaseCounter() {
    setCounter(counter + 1)
  }

  function showCounter() {
    alert(`O botão foi clicado ${counter} vezes.`)
  }

  return (
    <div>
      <p>
        Utilizando o hook <strong>useState</strong> temos várias renderizações,
        pois no caso de uso apresentado não precisamos mostrar o contador na
        tela. Isto é, a página não precisa ser atualizada visualmente quando
        incrementamos o contador.
      </p>
      <button onClick={increaseCounter}>Botão useState</button>{' '}
      <button onClick={showCounter}>
        Mostrar quantas vezes o botão 1 foi clicado
      </button>
    </div>
  )
}
