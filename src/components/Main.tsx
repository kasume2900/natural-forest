'use client'

import React, { useState } from 'react'
import Rain from './Rain'

export default function Main() {

  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  const handleMove = (e : React.MouseEvent<HTMLDivElement>) => {

    setX((e.clientX - window.innerWidth / 2) * -0.004)
    setY((e.clientY - window.innerHeight / 2) * -0.004)
  }
  

  return (
    <>
      <div className="logo"></div>
      <div onMouseMove={handleMove} className="layers">
        <div style={{transform :`rotateX(${y}deg) rotateY(${x}deg)`}} className="layers__conteiner">
          <div className="layers__item layer1"></div>
          <div className="layers__item layer2"></div>
          <div className="layers__item layer3">
            <div className="hero-content">
              <h1>natural forest</h1>
              <h2>Next.js/css</h2>
              <p>Creating a beautiful 3D website with a 'lens effect'</p>
              <button>Start Learning</button>
            </div>
          </div>
          <div className="layers__item layer4">
            <Rain />
          </div>
          <div className="layers__item layer5"></div>
          <div className="layers__item layer6"></div>
        </div>
      </div>
    </>
  )
}
