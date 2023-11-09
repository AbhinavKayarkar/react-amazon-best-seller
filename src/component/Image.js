import React from 'react'

const Image = (props) => {
  return (
    <>
      <img src={props.src} alt={props.alt}></img>
    </>
  )
};

export default Image;