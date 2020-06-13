import React from "react"

const Paragraph = ({ className, children }) => {
  return (
    <p className={`text-lg text-gray-700 leading-relaxed mb-5 ${className}`}>
      {children}
    </p>
  )
}

export default Paragraph
