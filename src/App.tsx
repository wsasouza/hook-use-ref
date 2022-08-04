import { Counter } from './Counter'
import { CounterUseRef } from './CounterUseRef'
import { Modal } from './Modal'

import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.container}>
      <h1>Casos de utilização do hook useRef</h1>
      <hr />
      <h2>Hook useRef como uma alternativa ao useState</h2>
      <Counter />
      <br />
      <br />
      <br />
      <CounterUseRef />
      <br />
      <br />
      <hr />
      <h2>Hook useRef para interagir com elementos da DOM</h2>
      <Modal />
      <br />
      <br />
      <hr />
    </div>
  )
}
