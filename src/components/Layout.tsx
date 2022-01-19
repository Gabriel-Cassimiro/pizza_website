import React, { ReactNode } from "react"
import { Footer } from "./Footer"
import { NavBar } from "./Navbar"

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	)
}
