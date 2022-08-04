import { useState, useEffect, useRef } from 'react'
import { OtherModal } from './OtherModal'

export function Modal() {
  const [showModal, setShowModal] = useState(false)
  const [showModalChildren, setShowModalChildren] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function showFakeModal() {
    setShowModal(!showModal)
  }

  function showFakeModalChildren() {
    setShowModalChildren(!showModalChildren)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [showModal])

  return (
    <div>
      <h3>Utilizando useRef dentro do componente</h3>
      <button onClick={showFakeModal}>
        Clique aqui para informar seu E-mail para não perder nenhuma novidade!
      </button>
      <br />
      <br />
      {showModal && (
        <div>
          <label htmlFor="email">E-mail</label>
          <br />
          <input ref={inputRef} type="email" id="email" />
        </div>
      )}
      <br />
      <h3>Passando o useRef como parâmetro para outro componente</h3>
      <button onClick={showFakeModalChildren}>
        Clique aqui para informar seu E-mail para não perder nenhuma novidade!
      </button>
      {showModalChildren && <OtherModal forwardRef={inputRef} />}
    </div>
  )
}
