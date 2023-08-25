"use client"
import React, { useState } from 'react'
import FilterContext from './FilterContext'

export default function FilterState(props: any) {
    const [filterId, setFilterId] = useState<string>('all')

  return (
    <FilterContext.Provider value={{ filterId, setFilterId }}>
        {props.children}
    </FilterContext.Provider>
  )
}
