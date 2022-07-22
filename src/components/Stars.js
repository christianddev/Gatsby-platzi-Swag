import React, { useState } from 'react'

import {
  SelectStars,
} from "../styles/components"

const Stars = () => {
  const [select, setSelect] = useState(5)
  return (
    <SelectStars selected={select}>
      <span onClick={() => setSelect((s) => s = 1)}>☆</span>
      <span onClick={() => setSelect((s) => s = 2)}>☆</span>
      <span onClick={() => setSelect((s) => s = 3)}>☆</span>
      <span onClick={() => setSelect((s) => s = 4)}>☆</span>
      <span onClick={() => setSelect((s) => s = 5)}>☆</span>
    </SelectStars>
  )
}

export default Stars