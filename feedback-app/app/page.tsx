// import Image from 'next/image'
import MainContent from './components/MainContent'
import Navigation from './components/Navigation'
import FilterState from './context/filters/FilterState'

export default function Home() {
  return (
    <div className='page-container'>
      <FilterState>
        <Navigation />
        <MainContent />
      </FilterState>
    </div>
  )
}
