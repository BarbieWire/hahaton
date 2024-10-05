import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi';

const ArrowLink = ({link}) => {
  return (
    <a href={link} className="absolute top-3 right-3 w-7 h-7 bg-white rounded-full flex items-center justify-center">
        <FiArrowUpRight className="w-5 h-5 text-black" />
    </a>
  )
}

export default ArrowLink