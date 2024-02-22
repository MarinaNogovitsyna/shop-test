import React from 'react'

export default function FilterAll({addFilter}) {
  return (
    <div className='filter__all' onClick={() => addFilter('', '')}>
        <span>Все товары</span>
    </div>
  )
}
