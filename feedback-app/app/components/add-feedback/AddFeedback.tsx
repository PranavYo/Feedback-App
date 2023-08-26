"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import "./page.scss"
import FilterContext from '@/app/context/filters/FilterContext'
import { useRouter } from 'next/navigation'

export default function AddFeedback() {

    const { addFeedback } = useContext(FilterContext)
    const router = useRouter()

    const filtersList = [
        {
            id: 'ui',
            name: 'UI'
        },
        {
            id: 'ux',
            name: 'UX'
        },
        {
            id: 'enhancement',
            name: 'Enhancement'
        },
        {
            id: 'bug',
            name: 'Bug'
        },
        {
            id: 'feature',
            name: 'Feature'
        },
    ]

    const [feedBackForm, setFeedBackForm] = useState({ id: 0, upvotes: 0, title: '', category: 'ui', description: '', status: 'suggestion' })

    const handleOnChange = (e: any) => {
        setFeedBackForm({ ...feedBackForm, [e.target.name]: e.target.value })
    }

    const [isTitleTouched, setTitleIsTouched] = useState(false);

    const handleTitleBlur = () => {
        setTitleIsTouched(true);
    };

    const [isDescTouched, setDescIsTouched] = useState(false);

    const handleDescBlur = () => {
        setDescIsTouched(true);
    };

    const handleOnSubmit = async (e: any) => {
        e.preventDefault();
        
        await addFeedback(feedBackForm)
        router.push('/')
    }

    return (
        <div className='outer-container'>
            <div className="inner-container">
                <Link href='/' className='btn'>
                    <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M6 9L2 5l4-4" stroke="#4661E6" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
                    <span>Go Back</span>
                </Link>
                <form className='form-container' onSubmit={handleOnSubmit}>
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient cx="103.9%" cy="-10.387%" fx="103.9%" fy="-10.387%" r="166.816%" id="a"><stop stopColor="#E84D70" offset="0%" /><stop stopColor="#A337F6" offset="53.089%" /><stop stopColor="#28A7ED" offset="100%" /></radialGradient></defs><g fill="none" fillRule="evenodd"><circle fill="url(#a)" cx="28" cy="28" r="28" /><path fill="#FFF" fillRule="nonzero" d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z" /></g></svg>
                    <span className='sp'>Create New Feedback</span>
                    <div className="input">
                        <span className='sp-1'>Feedback Title</span>
                        <span className="sp-2">Add a short, descriptive headline</span>
                        <input type="text" name='title' value={feedBackForm.title} onChange={handleOnChange} onBlur={handleTitleBlur} required />
                        {isTitleTouched && <span className="error-message">Title can't be empty</span>}
                    </div>
                    <div className="input">
                        <span className='sp-1'>Category</span>
                        <span className="sp-2">Choose a category for your feedback</span>
                        <select name="category" onChange={handleOnChange}>
                            {
                                filtersList.map((item, index) => {
                                    return (
                                        <option key={index} value={item.id}>{item.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="input">
                        <span className='sp-1'>Feedback Detail</span>
                        <span className="sp-2">Include any specific comments on what should be improved, added, etc.</span>
                        <textarea value={feedBackForm.description} name='description' onChange={handleOnChange} onBlur={handleDescBlur} required />
                        {isDescTouched && <span className="error-message">Description can't be empty</span>}
                    </div>
                    <div className="btns">
                        <button className='cancel-btn'>Cancel</button>
                        <button type='submit' className='submit-btn'>Add Feedback</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
