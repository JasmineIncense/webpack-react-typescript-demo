import React from 'react'

const Button = () => {
  const printMe = () => {
    alert('按钮事件调用!');
  }

  return (
    <button onClick={printMe}>点击事件</button>
  )
}

export default Button