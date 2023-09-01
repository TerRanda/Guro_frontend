import React from 'react'

function ColorButton(props) {
  console.log(props.bgColor);

  return (
    <>
      <button style={{
        backgroundColor: props.bgColor,
        padding: "5px",
        margin: "10px",
        border: "none",
        color: props.color,
        boxShadow: "0px 1px 1px gray"
      }}>
        {props.text}
        {props.children}
      </button>
    </>
  )
}

export default ColorButton