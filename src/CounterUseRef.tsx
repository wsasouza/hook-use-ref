import { useRef } from 'react'

export function CounterUseRef() {
  const counterRef = useRef(0)

  function increaseCounter() {
    counterRef.current += 1
  }

  function showCounter() {
    alert(`O botão 2 foi clicado ${counterRef.current} vezes.`)
  }
  return (
    <div>
      <p>
        Utilizando o hook <strong>useRef</strong> evitamos várias renderizações
        desnecessárias, aumentando assim a performance da aplicação.
      </p>
      <button onClick={increaseCounter}>Botão useRef</button>{' '}
      <button onClick={showCounter}>
        Mostrar quantas vezes o botão 2 foi clicado
      </button>
    </div>
  )
}
