"use client"
import React, { useContext, useEffect, useState } from 'react'
import './MainContent.scss'
import FilterContext from '../context/filters/FilterContext'
import ProductRequest from '../types/Feedback.interface'
import Link from 'next/link'

export default function MainContent() {

  const {filterId, feedbackList, getAllFeedbacks} = useContext(FilterContext)

  const [sortById, setSortById] = useState('most_votes')
  const [modifiesList, setModifiesList] = useState(feedbackList)

  useEffect(() => {
    getAllFeedbacks()
  }, [])

  useEffect(() => {
    let list = feedbackList as ProductRequest[]
    list = list.slice().sort((a, b) => b.upvotes - a.upvotes)
    setModifiesList(list)
  }, [feedbackList])
  
  
  // Filtering and sorting
  useEffect(() => {
    let list = feedbackList as ProductRequest[]
    if(sortById === 'most_upvotes') list = list.slice().sort((a, b) => b.upvotes - a.upvotes)
    else if(sortById === 'least_upvotes') list = list.slice().sort((a, b) => a.upvotes - b.upvotes)
    else if(sortById === 'most_comments') {
      list = list.slice().sort((b, a) => {
        if(a.comments && b.comments) return a.comments.length - b.comments.length
        if(a.comments) return 1
        if(b.comments) return -1
        return 0
      })
    }
    else if(sortById === 'least_comments') {
      list = list.slice().sort((b, a) => {
        if(a.comments && b.comments) return b.comments.length - a.comments.length
        if(b.comments) return 1
        if(a.comments) return -1
        return 0
      })
    }
    
    if(filterId !== 'all') list = list.filter(item => item.category === filterId)

    setModifiesList(list)
  }, [filterId, sortById])
  

  const sortByOptions = [
    {
      id: 'most_upvotes',
      name: 'Most Upvotes'
    },
    {
      id: 'least_upvotes',
      name: 'Least Upvotes'
    },
    {
      id: 'most_comments',
      name: 'Most Comments'
    },
    {
      id: 'least_comments',
      name: 'Least Comments'
    },
  ]

  return (
    <div className='content-container'>

      <div className="header-container">
        <div className="left-container">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
            <g clipPath="url(#clip0_12_7)">
              <path d="M11.5006 2.27418C13.7374 2.27418 15.8386 3.12773 17.4235 4.68168C19.013 6.24013 19.8884 8.31387 19.8884 10.5209C19.8884 12.3358 19.3002 14.0575 18.1875 15.4998C17.251 16.7138 15.9721 17.6593 14.5363 18.21L14.2263 18.3219L14.2295 19.1478H14.5978C14.8599 19.1478 15.0725 19.3577 15.0725 19.6165C15.0725 19.8466 14.9045 20.038 14.6831 20.0777L14.5978 20.0853H14.233L14.2369 21.1051H14.5978C14.8599 21.1051 15.0725 21.3151 15.0725 21.5739C15.0725 21.804 14.9045 21.9954 14.6831 22.0351L14.5978 22.0426H14.2405L14.2461 23.5295C14.2466 23.6542 14.1968 23.7738 14.1077 23.8621C14.0409 23.9283 13.9561 23.9728 13.8646 23.9909L13.7714 24H9.22857C9.10238 24 8.98132 23.9504 8.89226 23.8621C8.82543 23.7959 8.78071 23.712 8.76272 23.6216L8.75382 23.5295L8.75947 22.0426H8.40218C8.14002 22.0426 7.92743 21.8327 7.92743 21.5739C7.92743 21.3438 8.0954 21.1524 8.31685 21.1127L8.40218 21.1051H8.76303L8.76693 20.0853H8.40218C8.14002 20.0853 7.92743 19.8754 7.92743 19.6165C7.92743 19.3865 8.0954 19.195 8.31685 19.1553L8.40218 19.1478H8.77049L8.77362 18.3219C7.19333 17.7867 5.78461 16.7783 4.77795 15.4548C3.66144 13.9868 3.08553 12.2387 3.11249 10.3994C3.14368 8.27169 4.03535 6.24702 5.62315 4.69827C7.13092 3.22763 9.07058 2.37717 11.1159 2.28278L11.4397 2.27418H11.5006ZM13.291 22.0426H9.70901L9.70517 23.0625H13.2949L13.291 22.0426ZM13.2835 20.0852H9.71642L9.71258 21.1051H13.2874L13.2835 20.0852ZM11.5004 3.21163L11.4463 3.21182C7.50035 3.23915 4.11867 6.53685 4.06189 10.4129C4.01404 13.6777 6.20248 16.6044 9.38391 17.5302C9.55754 17.5807 9.6843 17.7231 9.71646 17.894L9.72444 17.9815L9.71998 19.1477H13.28L13.2756 17.9815C13.2748 17.7731 13.4135 17.5891 13.6161 17.5302C16.7501 16.6182 18.9389 13.7359 18.9389 10.5208C18.9389 8.5655 18.1631 6.72805 16.7544 5.34688C15.3488 3.96871 13.4847 3.21163 11.5004 3.21163ZM12.3288 4.99443C12.5506 4.99443 12.7305 5.17199 12.7305 5.39104V5.7126C13.2099 5.83218 13.662 6.02005 14.0756 6.26511L14.3039 6.03889C14.4609 5.88336 14.716 5.88336 14.873 6.03889L16.0461 7.2012C16.2023 7.35599 16.2023 7.60634 16.0461 7.76113L15.8158 7.98931C16.0631 8.39909 16.2527 8.84703 16.3734 9.32211H16.6965C16.9183 9.32211 17.0982 9.49967 17.0982 9.71872V11.3639C17.0982 11.5829 16.9183 11.7605 16.6965 11.7605H16.3734C16.2527 12.2356 16.0631 12.6835 15.8157 13.0933L16.046 13.3214C16.2022 13.4762 16.2022 13.7266 16.046 13.8813L14.8729 15.0437C14.716 15.1992 14.4609 15.1992 14.3039 15.0437L14.0756 14.8174C13.662 15.0625 13.2099 15.2504 12.7305 15.37V15.6915C12.7305 15.9106 12.5506 16.0881 12.3288 16.0881H10.6711C10.4493 16.0881 10.2695 15.9106 10.2695 15.6915V15.37C9.79001 15.2504 9.3379 15.0625 8.9243 14.8174L8.696 15.0437C8.53905 15.1992 8.28397 15.1992 8.12697 15.0437L6.95387 13.8813C6.79767 13.7266 6.79767 13.4762 6.95387 13.3214L7.18417 13.0933C6.93682 12.6835 6.74721 12.2356 6.62653 11.7605H6.30341C6.08156 11.7605 5.90173 11.5829 5.90173 11.3639V9.71872C5.90173 9.49967 6.08156 9.32211 6.30341 9.32211H6.62653C6.74721 8.84703 6.93682 8.39909 7.18417 7.98931L6.95387 7.76113C6.79767 7.60634 6.79767 7.35599 6.95387 7.2012L8.12697 6.03889C8.28392 5.88336 8.539 5.88336 8.696 6.03889L8.9243 6.26511C9.33786 6.02005 9.78996 5.83218 10.2695 5.7126V5.39104C10.2695 5.17199 10.4493 4.99443 10.6711 4.99443H12.3288ZM11.5 7.72128C9.92811 7.72128 8.65384 8.98386 8.65384 10.5413C8.65384 12.0988 9.92811 13.3614 11.5 13.3614C13.0719 13.3614 14.3462 12.0988 14.3462 10.5413C14.3462 8.98386 13.0719 7.72128 11.5 7.72128ZM22.5253 11.8732C22.7875 11.8732 23 12.0831 23 12.342C23 12.5721 22.832 12.7635 22.6106 12.8032L22.5253 12.8107H22.0269C21.7648 12.8107 21.5522 12.6008 21.5522 12.342C21.5522 12.1119 21.7201 11.9205 21.9416 11.8808L22.0269 11.8732H22.5253ZM0.97309 11.8732C1.23525 11.8732 1.44784 12.0831 1.44784 12.342C1.44784 12.5721 1.27986 12.7635 1.05842 12.8032L0.97309 12.8107H0.474748C0.212592 12.8107 0 12.6008 0 12.342C0 12.1119 0.167974 11.9205 0.389422 11.8808L0.474748 11.8732H0.97309ZM3.11161 3.44944L3.18622 3.50934L3.64521 3.96046C3.83102 4.14313 3.83169 4.4399 3.64673 4.62337C3.55396 4.71538 3.43214 4.76141 3.31027 4.76141C3.21941 4.76141 3.12854 4.73581 3.04971 4.68461L2.97534 4.62487L2.51635 4.17374C2.33054 3.99107 2.32987 3.69431 2.51483 3.51084C2.67672 3.35026 2.92707 3.32972 3.11161 3.44944ZM20.4852 3.51084C20.647 3.67137 20.6667 3.91869 20.5447 4.10035L20.4836 4.17374L20.0247 4.62487C19.932 4.7159 19.8109 4.76141 19.6897 4.76141C19.5679 4.76141 19.446 4.71538 19.3533 4.62337C19.1914 4.46283 19.1717 4.21555 19.2938 4.03387L19.3548 3.96046L19.8138 3.50934C19.9996 3.32671 20.3002 3.32742 20.4852 3.51084ZM11.5 0C11.733 0 11.9269 0.165814 11.9671 0.384489L11.9747 0.468749V0.958545C11.9747 1.21744 11.7622 1.42729 11.5 1.42729C11.2669 1.42729 11.0731 1.26148 11.0329 1.04281L11.0253 0.958545V0.468749C11.0253 0.209859 11.2378 0 11.5 0Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_12_7">
                <rect width="23" height="24" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <div className="suggestions-label">
            <span className='sp-1'>{modifiesList.length}</span>
            <span className='sp-2'>Suggestions</span>
          </div>
          <div className="select-container">
            <label className=' mr-[0.5vw]' htmlFor="sort">Sort by :</label>

            <select name="sort" id="sort" onChange={(e) => setSortById(e.target.value)}>
              {
                sortByOptions.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>{item.name}</option>
                  )
                })
              }
            </select>
          </div>
        </div>
        <div className="right-container">
          <Link href='/components/add-feedback' className='add-feedback-btn'>+ Add Feedback</Link>
        </div>
      </div>
      
      {
        modifiesList.length === 0 &&
        <div className='empty-container'>
          <svg width="102" height="108" xmlns="http://www.w3.org/2000/svg"><g fillRule="nonzero" fill="none" opacity=".5"><path d="M48.73 15.593C25.822 15.59 7.246 34.224 7.235 57.22c-.01 22.997 18.55 41.649 41.458 41.665 22.909.016 41.494-18.61 41.516-41.606a41.72 41.72 0 00-12.132-29.473A41.4 41.4 0 0048.73 15.593z" stroke="#3A4374" strokeWidth="1.045" strokeLinecap="round" strokeLinejoin="round"/><ellipse fill="#231F20" cx="70.476" cy="43.691" rx="1.917" ry="2.862"/><path d="M0 44.902l97.429-21.645-19.167-5.612S67.881.37 65.11.01C62.338-.351 11.979 10.43 11.979 10.43L8.785 34.77 0 44.902zM20.284 103.503L9.272 86.027l48.14-8.265 3.305 16.746 4.888-15.424 24.628 4.882-5.007 19.537z" fill="#3A4374"/><path d="M81.97 65.607l4.438-.617L88.7 81.618a2.115 2.115 0 01-1.799 2.387l-.261.036a2.11 2.11 0 01-2.377-1.806L81.97 65.607z" fill="#FFF"/><path d="M86.352 84.471A2.519 2.519 0 0183.87 82.3l-2.292-16.634a.4.4 0 01.343-.45l4.432-.617a.398.398 0 01.296.08c.085.063.14.16.151.265l2.276 16.626a2.508 2.508 0 01-.479 1.868 2.49 2.49 0 01-1.66.97l-.256.04a2.474 2.474 0 01-.328.024zm-3.929-18.518l2.236 16.234c.132.936.991 1.59 1.925 1.467h.263a1.714 1.714 0 001.454-1.932l-2.236-16.234-3.642.465z" fill="#3A4374"/><path fill="#FFF" d="M78.562 50.93l7.159-.995 2.242 16.263-7.16.995z"/><path d="M80.802 67.605a.43.43 0 01-.24-.08.361.361 0 01-.151-.265l-2.244-16.274a.394.394 0 01.072-.296.423.423 0 01.263-.153l7.187-.994a.39.39 0 01.448.345l2.244 16.266a.4.4 0 01-.344.448l-7.187.995-.048.008zm-1.789-16.33l2.132 15.472 6.39-.882-2.133-15.472-6.389.882z" fill="#3A4374"/><path d="M85.573 78.014l.725-.1a3.248 3.248 0 013.664 2.773l3.013 21.85a3.248 3.248 0 01-2.77 3.661l-.726.1a3.248 3.248 0 01-3.664-2.773l-3.013-21.85a3.248 3.248 0 012.77-3.66z" fill="#FFF"/><path d="M88.429 106.83a2.959 2.959 0 01-2.923-2.558L82.31 81.064a2.959 2.959 0 012.516-3.343l2.108-.288a2.949 2.949 0 013.322 2.525l3.195 23.248a2.964 2.964 0 01-2.516 3.335l-2.108.297-.4-.008zm-1.086-28.628a1.838 1.838 0 00-.296 0l-2.108.289a2.13 2.13 0 00-1.422.842c-.35.455-.5 1.034-.415 1.603l3.194 23.248a2.166 2.166 0 002.396 1.844l2.108-.297a2.163 2.163 0 001.837-2.405l-3.194-23.248a2.159 2.159 0 00-2.124-1.868l.024-.008z" fill="#3A4374"/><ellipse fill="#FFF" cx="81.569" cy="46.288" rx="19.19" ry="19.264"/><path d="M81.553 65.953c-10.474-.005-19.093-8.275-19.569-18.778-.476-10.503 7.359-19.525 17.789-20.485 10.43-.96 19.768 6.482 21.202 16.897 1.47 10.746-5.992 20.662-16.691 22.182-.905.122-1.818.184-2.731.184zm0-38.536c-.868 0-1.736.059-2.596.177-7.532 1.045-13.696 6.542-15.616 13.927-1.92 7.386.78 15.206 6.844 19.812a18.74 18.74 0 0020.853 1.234c6.56-3.86 10.157-11.307 9.114-18.868-1.298-9.305-9.207-16.24-18.567-16.282h-.032z" fill="#3A4374"/><ellipse fill="#FFF" cx="81.569" cy="46.288" rx="15.589" ry="15.648"/><path d="M81.56 62.338c-8.606 0-15.665-6.846-15.962-15.48-.297-8.635 6.275-15.953 14.862-16.548 8.586-.596 16.098 5.745 16.987 14.339.889 8.593-5.165 16.348-13.69 17.536-.728.103-1.462.154-2.196.153zm0-31.265c-.707 0-1.414.049-2.116.144-8.096 1.127-13.848 8.489-13.009 16.65.839 8.162 7.967 14.19 16.122 13.634 8.154-.556 14.405-7.496 14.136-15.697-.268-8.2-6.959-14.713-15.132-14.731z" fill="#3A4374"/><path d="M99.896 89.714a11.645 11.645 0 00-3.913-3.206c-4.576-2.405-9.822-2.325-14.638-.802-1.709.545-5.023 1.323-5.199 3.6a2.115 2.115 0 001.526 2.004 6.254 6.254 0 002.675.104 6.887 6.887 0 00-3.618.914c-1.03.73-1.597 2.324-.75 3.294.374.404.861.683 1.397.802a6.365 6.365 0 003.554-.048c-1.251.24-2.47.625-3.634 1.146-.703.313-1.485.866-1.405 1.604.08.737.798 1.074 1.453 1.298 1.378.475 2.817.745 4.273.802a8.4 8.4 0 00-3.474 1.5c-1.598 1.346-1.598 3.903.567 4.633a6.366 6.366 0 002.14.248c6.389 0 14.04-.801 18.368-6.14a9.993 9.993 0 002.044-9.067 8.702 8.702 0 00-1.366-2.686z" fill="#FFF"/><path d="M80.802 107.984c-.75.037-1.5-.053-2.22-.265a2.762 2.762 0 01-1.9-2.108 3.502 3.502 0 011.197-3.207 5.952 5.952 0 011.725-1.002 14.816 14.816 0 01-2.396-.617c-1.062-.369-1.597-.914-1.717-1.603-.12-.69.495-1.523 1.598-2.044l.567-.24a4.211 4.211 0 01-.432-.105 3.008 3.008 0 01-1.597-.914 2.219 2.219 0 01-.471-1.732 3.209 3.209 0 011.294-2.14c.248-.175.516-.32.798-.433a2.461 2.461 0 01-1.525-2.3c.184-2.342 3.067-3.207 4.967-3.793l.511-.152c5.335-1.691 10.646-1.395 14.942.802a11.99 11.99 0 014.049 3.35 9.207 9.207 0 011.445 2.79 10.363 10.363 0 01-2.116 9.444c-4.528 5.555-12.37 6.277-18.695 6.285l-.024-.016zm-.759-11.055c-.887.226-1.752.53-2.587.906-.375.168-1.23.625-1.166 1.219.064.593.67.801 1.182.97 1.34.47 2.742.74 4.16.801a.392.392 0 01.384.353.4.4 0 01-.296.433 8.289 8.289 0 00-3.322 1.419 2.659 2.659 0 00-.934 2.453 1.953 1.953 0 001.373 1.499 5.73 5.73 0 002.005.224c6.157 0 13.768-.69 18.08-5.988a9.567 9.567 0 001.98-8.698 8.413 8.413 0 00-1.325-2.541 11.094 11.094 0 00-3.777-3.127c-4.113-2.124-9.2-2.405-14.335-.801l-.52.16c-1.692.513-4.264 1.29-4.408 3.086.031.753.54 1.4 1.262 1.604a3.86 3.86 0 001.43.176c.375-.04.742-.064 1.094-.088a.416.416 0 01.423.369.408.408 0 01-.36.433c-.359 0-.734.08-1.117.088a4.898 4.898 0 00-2.308.753c-.525.382-.874.96-.967 1.604-.063.395.041.799.288 1.114.325.334.742.563 1.198.657a6.11 6.11 0 002.396.16c.32-.08.646-.152.966-.216a.4.4 0 01.463.297.41.41 0 01-.271.48 6.097 6.097 0 01-.99.201z" fill="#3A4374"/><path d="M55.367 46.593s9.727 14.67 3.84 14.879c-5.885.208-6.388-1.339-6.388-1.339" fill="#FFF"/><path d="M58.154 61.937c-4.936 0-5.646-1.355-5.742-1.603a.425.425 0 01.263-.53.415.415 0 01.52.265s.718 1.243 5.997 1.05a1.348 1.348 0 001.294-.673c1.261-2.461-3.514-10.622-5.463-13.556a.418.418 0 01.128-.553.414.414 0 01.56.088c.742 1.122 7.186 11.063 5.51 14.43a2.139 2.139 0 01-1.997 1.13l-1.07-.048z" fill="#3A4374"/><ellipse fill="#C0C5DC" cx="82.455" cy="45.799" rx="3.53" ry="6.036"/><ellipse fill="#3A4374" cx="39.259" cy="45.799" rx="2.691" ry="4.882"/></g></svg>
          <span className='sp-1'>There is no feedback yet.</span>
          <span className='sp-2'>Got a suggestion? Found a bug that needs to be squashed?</span>
          <span className='sp-3'>We love hearing about new ideas to improve our app.</span>
          <Link href='/components/add-feedback' className='add-feedback-btn'>+ Add Feedback</Link>
        </div>
      }
      {
        modifiesList.length > 0 &&
        <div className="list-container">
          {
            modifiesList.map((feedback: ProductRequest, index: number) => {
              return (
                <div key={index} className='item'>
                  <div className="container-1">
                    <button className="upvote-container">
                      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 6l4-4 4 4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
                      <span>{feedback.upvotes}</span>
                    </button>
                    <div className="info-container">
                      <span className='sp-1'>{feedback.title}</span>
                      <span className='sp-2'>{feedback.description}</span>
                      <div className='category-container'>
                        <span>{feedback.category}</span>
                      </div>
                    </div>
                  </div>
                  <div className="container-2">
                    <svg width="18" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z" fill="#CDD2EE" fillRule="nonzero"/></svg>
                    <span>{feedback.comments?.length}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}
