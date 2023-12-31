"use client"
import React from 'react'
import ProductRequest from '../types/Feedback.interface'
import './FeedbackContent.scss'

export default function FeedbackContent(props: ProductRequest) {
    const { id, title, description, upvotes, category, comments } = props
    return (
        <div key={id} className='item'>
            <div className="container-1">
                <button className="upvote-container">
                    <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                    <span>{upvotes}</span>
                </button>
                <div className="info-container">
                    <span className='sp-1'>{title}</span>
                    <span className='sp-2'>{description}</span>
                    <div className='category-container'>
                        <span>{category}</span>
                    </div>
                </div>
            </div>
            <div className="container-2">
                <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero" /></svg>
                <span>{comments?.length}</span>
            </div>
        </div>
    )
}
