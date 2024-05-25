import React from 'react'
import Logo from './Logo'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4 flex flex-col items-center'>
      <Link to={"/"}>
                <Logo w={110} h={100} style={{ borderRadius: '50%', overflow: 'hidden' }} />
            </Link>
        <p className='text-center font-bold'>Iconic store</p>
      </div>
    </footer>
  )
}

export default Footer
