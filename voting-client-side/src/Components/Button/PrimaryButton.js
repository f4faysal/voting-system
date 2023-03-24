import React from 'react'

const PrimaryButton = ({ children, classes, handler }) => {
  return (
    <button
      onClick={handler}
      className={`hover:text-gray-100 bg-gradient-to-r from-black to-red-500 text-white ${classes}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
