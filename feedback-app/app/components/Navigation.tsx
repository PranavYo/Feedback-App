"use client"
import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import styles from './Navigation.module.scss';
import FilterContext from '../context/filters/FilterContext';
import { FilterContextType } from '../types/FilterContextType';

const Navigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const {filterId, setFilterId} = useContext(FilterContext)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  

  const filtersList = [
    {
      id: 'all',
      name: 'All'
    },
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

  const roadMapList = [
    {
      name: 'Planned',
      length: 0,
      color: '#F49F85'
    },
    {
      name: 'In-Progress',
      length: 0,
      color: '#AD1FEA'
    },
    {
      name: 'Live',
      length: 0,
      color: '#62BCFA'
    },
  ]

  return (
    <nav className={classNames(styles.nav, {[styles.z_index]: isNavOpen})}>
      <div className={classNames(styles.mobile_header)}>
          <div className={styles.inner}>
              <span className='font-bold text-[1.2rem]'>Pranav</span>
              <span style={{opacity: '0.8'}}>Feedback Board</span>
          </div>
      </div>
      <button className={styles.toggleButton} onClick={toggleNav}>
        {!isNavOpen && <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z"/></g></svg>}
        {isNavOpen && <svg width="18" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z" fill="#FFF" fillRule="evenodd"/></svg>}
      </button>
      <div
        className={classNames(styles.navContent, {
          [styles.mobileOpen]: isNavOpen,
        })}
      >
        <div className={classNames(styles.block, styles.block_1)}>
            <div className={styles.inner}>
                <span className='font-bold text-[1.2rem]'>Pranav</span>
                <span style={{opacity: '0.8'}}>Feedback Board</span>
            </div>
        </div>
        <div className={classNames(styles.block, styles.block_2)}>
          {
            filtersList.map((btn) => {
              return (
                <button 
                  key={btn.id}
                  className={styles.filter_buttons}
                  onClick={() => setFilterId(btn.id)}
                  style={{
                    color: (filterId === btn.id) ? '#F2F4FF' : '#4661E6',
                    backgroundColor: (filterId === btn.id) ? '#4661E6' : '#F2F4FF',
                    transition: 'all 0.3s ease-in-out',
                  }}
                >
                  {btn.name}
                </button>
              )
            })
          }
        </div>
        <div className={classNames(styles.block, styles.block_3)}>
          <div className={styles.label_div}>
            <span className="label">Roadmap</span>
            <button style={{textDecoration: 'underline'}}>View</button>
          </div>
          <div className={styles.list_container}>
            {
              roadMapList.map((item, index) => {
                return (
                  <div key={index} className={styles.item_container}>
                    <div className={styles.first_half}>
                      <div style={{borderRadius: '50%', background: item.color, width: '0.5rem', height: '0.5rem', marginRight: '1vw'}}></div>
                      <span>{item.name}</span>
                    </div>
                    <div className={styles.second_half}>
                      <span className=''>{item.length}</span>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
