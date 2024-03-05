'use client'

import { DesktopNavigation, MobileNavigation } from "./Navigation"

export default function Header() {

    return (
        <div className="w-full flex flex-1 justify-end md:justify-center mt-9">
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <DesktopNavigation className="pointer-events-auto hidden md:block" />
        </div>
    )
}