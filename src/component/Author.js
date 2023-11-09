import React from 'react'

const Author = (props) => {

  // Inline css -- alternate way
  const inLineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem'
  }
  return (
    <h4 style={inLineHeadingStyles}>{props.author}</h4>
  )
};

export default Author;