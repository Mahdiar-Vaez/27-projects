import React from 'react'
import UseWindowResize from '.'

export default function UseWindowResizeTest() {
    const {width,height}=UseWindowResize()
    return (
    <div>
        <h1>Use window Resize Hook</h1>
        <p>width is :{width} </p>
        <p>height is :{height} </p>
    </div>
  )
}
