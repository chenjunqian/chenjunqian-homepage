import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'CHEN Junqian',
	description: 'CHEN Junqian home page',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className='w-full min-h-screen'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
