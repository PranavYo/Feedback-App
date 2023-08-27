"use client"
import FilterState from '@/app/context/filters/FilterState'
import React from 'react'
import FeedbackDetails from './FeedbackDetails'

export default function page() {
  return (
    <FilterState>
      <FeedbackDetails />
    </FilterState>
  )
}
