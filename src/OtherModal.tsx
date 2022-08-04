import React, { useEffect } from 'react'

interface OtherModalProps {
  forwardRef: React.RefObject<HTMLInputElement>
}

export function OtherModal({ forwardRef }: OtherModalProps) {
  useEffect(() => {
    forwardRef.current?.focus()
  }, [forwardRef])

  return (
    <div>
      <div>
        <label htmlFor="email">E-mail</label>
        <br />
        <input ref={forwardRef} type="email" id="email" />
      </div>
    </div>
  )
}
