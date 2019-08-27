import React, { useState } from 'react'

const NewColorPicker = () => {
  const [hue, setHue] = useState(Math.ceil(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.ceil(Math.random() * 100))
  const [lightness, setLightness] = useState(Math.ceil(Math.random() * 100))
  const [alpha, setAlpha] = useState(Math.random().toFixed(1))

  const RandomizeColor = () => {
    setHue(Math.ceil(Math.random() * 360))
    setSaturation(Math.ceil(Math.random() * 100))
    setLightness(Math.ceil(Math.random() * 100))
    setAlpha(Math.random().toFixed(1))
  }

  return (
    <main
      className="whole-screen"
      style={{
        backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`
      }}
    >
      {' '}
      <h1>ARE YOU READY FOR SOME COLOR! ITS A SUNDAY NIGHT PARTY!</h1>
      <div>
        <section>
          <p>HUE</p>
          <input
            type="range"
            min="0"
            max="360"
            value={hue}
            onChange={e => {
              setHue(e.target.value)
            }}
          />
          <p>{hue}</p>
        </section>
        <section>
          <p>SATURATION</p>
          <input
            type="range"
            min="0"
            max="100"
            value={saturation}
            onChange={e => {
              setSaturation(e.target.value)
            }}
          />
          <p>{saturation}</p>
        </section>
        <section>
          <p>LIGHTNESS</p>
          <input
            type="range"
            min="0"
            max="100"
            value={lightness}
            onChange={e => {
              setLightness(e.target.value)
            }}
          />
          <p>{lightness}</p>
        </section>
        <section>
          <p>ALPHA</p>
          <input
            type="range"
            min="0"
            max="1"
            value={alpha}
            step={0.1}
            onChange={e => {
              setAlpha(e.target.value)
            }}
          />
          <p>{alpha}</p>
        </section>
        <button
          onClick={() => {
            RandomizeColor()
          }}
        >
          Randomize the Color
        </button>
      </div>
    </main>
  )
}

export default NewColorPicker
