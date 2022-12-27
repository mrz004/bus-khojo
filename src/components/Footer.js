import React from 'react'

const Footer = ({style}) => {
  return (
    <footer style={{...style, display: "grid", placeItems: "center", minHeight: "5vh", fontSize: "1.2em"}}>
      Copyright &copy; {new Date().getFullYear()}
    </footer>
  )
}

export default Footer
