import React from 'react'

export default function Overlay({ isOpen }) {
  return (
    <div className={ isOpen ? "overlayClosed" : "overlay overlayOpen" }>
    </div>
  )
}
