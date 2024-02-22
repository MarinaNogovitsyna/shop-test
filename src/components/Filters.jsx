import React from 'react'
import FilterAll from './FilterAll'
import FilterPrice from './FilterPrice'
import FilterBrand from './FilterBrand'
import FilterName from './FilterName'

export default function Filters({addFilter}) {
  return (
    <aside className='filters'>
        <FilterAll addFilter={addFilter}/>
        <FilterPrice addFilter={addFilter}/>
        <FilterBrand addFilter={addFilter}/>
        <FilterName addFilter={addFilter}/>
    </aside>
  )
}
