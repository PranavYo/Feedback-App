"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import './FeedbackDetails.scss'
import FeedbackContent from '../FeedbackContent'
import FilterContext from '@/app/context/filters/FilterContext'
import { useSearchParams } from 'next/navigation'

export default function FeedbackDetails() {

  const { openedFeedback, getFeedbackById } = useContext(FilterContext)
  
  const searchParams = useSearchParams()

  useEffect(() => {
    const id = searchParams.get('id')
    getFeedbackById(id)
  }, [])
  

  return (
    <div className='outer-container'>
      <div className="inner-container">
        <div className="btns-container">
          <Link href='/' className='back-btn'>
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
            <span>Go Back</span>
          </Link>
          <button className='edit-btn'>Edit Feedback</button>
        </div>
        <div className="content-container">
          <FeedbackContent id={openedFeedback.id} title={openedFeedback.title} category={openedFeedback.category} upvotes={openedFeedback.upvotes} comments={openedFeedback.comments} description={openedFeedback.description} status={openedFeedback.status} />
        </div>
        <div className="comments-conatiner">
          <span className='no-of-comments'>{openedFeedback.comments?.length} Comments</span>
          <div className="comments-list">
            {
              openedFeedback.comments?.map((item: any, index: number) => {
                return (
                  <div className="item-container">
                    <div className='left-img-container'>
                      <div className="rounded-container">
                        <img src={item.user.image.slice(1)} alt="user-image" />
                      </div>
                    </div>
                    <div className="right-container">
                      <div className="top-container">
                        <div className="name-container">
                          <span className='sp-1'>{item.user.name}</span>
                          <span className='sp-2'>@{item.user.username}</span>
                        </div>
                        <div className="reply-container">
                          <span className='reply'>Reply</span>
                        </div>
                      </div>
                      <div className="botton-container">
                        {item.content}
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>   
    </div>
  )
}
