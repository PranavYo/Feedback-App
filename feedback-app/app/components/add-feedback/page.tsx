"use client"
import React, { FormEventHandler, useContext, useState } from 'react'
import "./page.scss"
import FilterState from '@/app/context/filters/FilterState'
import AddFeedback from './AddFeedback'

export default function page() {
  return (
    <FilterState>
      <AddFeedback />
    </FilterState>
  )
}
