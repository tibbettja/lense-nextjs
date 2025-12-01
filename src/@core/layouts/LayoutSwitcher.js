'use client'

import { usePathname } from "next/navigation"
import BaseLayout from "./BaseLayout"
import WikiLayout from "./WikiLayout"

const wikiPages = ['/about','/contact-us','/portfolio','/pricing','/schedule']

const LayoutSwitcher = ({ children }) => {
    const pathName = usePathname()
    if (wikiPages.includes(pathName)) {
        return <WikiLayout>{children}</WikiLayout>
    } else {
        return <BaseLayout>{children}</BaseLayout>
    }
}

export default LayoutSwitcher