import { Box, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { FaCross } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { SlMenu } from "react-icons/sl";
import { headerNavItems } from '../constants';
import HeaderNavItem from './HeaderNavItem';

const MobileNav = () => {
    const isSmall = useMediaQuery('(max-width: 680px)')
    const [isNavOpen, setIsNavOpen] = useState(false)
    return (
        <>
            {
                isSmall ? <Box className="fixed top-5 right-4 z-50 text-xl">
                    {isNavOpen ? <FaX onClick={()=>setIsNavOpen(prev => !prev)} /> : <SlMenu onClick={()=>setIsNavOpen(prev => !prev)} />}
                </Box> : null
            }
            <Box className={`${isNavOpen?'w-40': 'w-0'} z-50 bg-gray-200 fixed top-16 right-0 overflow-hidden transition-all duration-500 `}>
                <Box className='w-40 p-4 space-y-2 flex flex-col text-xl'>
                    {headerNavItems.map((item)=>(
                        <HeaderNavItem item={item} onClick={()=>setIsNavOpen(false)} />
                    ))}
                </Box>
            </Box>
        </>
    )
}

export default MobileNav
