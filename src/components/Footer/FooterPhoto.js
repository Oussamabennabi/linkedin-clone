import React from 'react'
const FooterPhoto = ({ url }) => {
  return (
    <>
      <a href='#'>
        <img src={`/images/${url}`} style={{ width: "300px", height: "250px",borderRadius:"1rem" }} alt="footer" />
      </a>
    </>
  )
}

export default FooterPhoto