"use client"
import React, { useState } from 'react'
import FilterContext from './FilterContext'
import ProductRequest from '@/app/types/Feedback.interface'

export default function FilterState(props: any) {
  const host = "http://localhost:5000/"

  const [filterId, setFilterId] = useState<string>('all')
  const [feedbackList, setFeedbackList] = useState<any>([])

  const getAllFeedbacks = async () => {
    const url = `${host}api/product-requests`
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const json = await response.json()
    setFeedbackList(json)
  }

  // add feedback
  const addFeedback = async (body: ProductRequest) => {
    const url = `${host}api/add-feedback`
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    });

    const json = await response.json()
    setFeedbackList(json)
  }

  return (
    <FilterContext.Provider value={{ filterId, setFilterId, feedbackList, getAllFeedbacks, addFeedback }}>
        {props.children}
    </FilterContext.Provider>
  )
}
