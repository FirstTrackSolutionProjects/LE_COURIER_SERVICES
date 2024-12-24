import { Box, Typography, useMediaQuery } from "@mui/material"
import { headerNavItems } from "../constants"
import HeaderNavItem from "./HeaderNavItem"
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
const Header = () => {
    const isSmall = useMediaQuery('(max-width: 680px)')
    return (
        <Box className="w-full bg-gray-100 sticky top-0 z-50 h-16">
            <Box className="px-8 w-full flex h-16 relative" gap={4}>
                <Box className="h-16 w-32 flex justify-center">
                    <Box
                        component={'img'}
                        alt="Logo"
                        src="/logo.svg"
                        className="h-full"
                    />
                </Box>
                <Box className={`${isSmall?'hidden':'flex'} items-center font-semibold`} gap={4}>
                    {headerNavItems.map((item) => (
                        <HeaderNavItem key={item.label} item={item} />
                    ))}
                </Box>
                {/* <Link to={'/sign-in'}>
                    <Box className="absolute w-32 h-16 right-0 flex items-center justify-center" gap={1}>
                        <FaUser /><Typography className="hover:text-lg transition-all duration-500">Login</Typography>
                    </Box>
                </Link> */}
            </Box>
        </Box>
    )
}

export default Header
