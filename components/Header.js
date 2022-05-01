/** @format */

import Image from 'next/image'
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline'
import { signIn, useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'

function Header() {
	const { data: session } = useSession()
	const router = useRouter()

	const items = useSelector(selectItems)

	return (
		<header>
			<div className='flex items-center flex-grow p-1 bg-amazon_blue py-2'>
				<div
					onClick={() => router.push('/')}
					className='mt-2 flex items-center flex-grow
                sm:flex-grow-0'>
					<Image
						src='https://links.papareact.com/f90'
						width={150}
						height={40}
						objectFit='contain'
						className='cursor-pointer'
					/>
				</div>

				<div
					className='h-10 bg-yellow-500 hover:cursor-pointer 
                hover:bg-yello-500 hidden md:inline-flex rounded-md flex-grow flex-shrink sm:flex items-center
                  '>
					<input
						type='text'
						className='flex-grow flex-shrink h-full focus:outline-none p-2 w-6 rounded-l-md'
					/>
					<SearchIcon className='h-12 p-4 text-white' />
				</div>

				<div className='text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap'>
					<div onClick={!session ? signIn : signOut} className='link'>
						<p className='link'>
							{session ? `Hello, ${session.user.name}` : 'Sign In '}
						</p>
						<p className='font-extrabold  md:text-sm'>Account & List</p>
					</div>
					<div className='link'>
						<p>Returns</p>
						<p className='font-extrabold  md:text-sm'>& Orders</p>
					</div>
					<div
						onClick={() => router.push('/checkout')}
						className='relative link flex items-center'>
						<span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center font-bold text-black rounded-full  '>
							{items.length}
						</span>
						<ShoppingCartIcon className='h-10 ' />
						<p className='font-extrabold  md:text-sm hidden md:inline-flex mt-2'>
							Basket
						</p>
					</div>
				</div>
			</div>

			<div className='flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm'>
				<p className='link flex items-center'>
					<MenuIcon className='h-6 mr-1' />
					All
				</p>
				<p className='link hidden lg:inline-flex'>Prime Video</p>
				<p className='link hidden lg:inline-flex'>Amazon Business</p>
				<p className='link hidden lg:inline-flex'>Today's Deals</p>
				<p className='link hidden lg:inline-flex'>Electronics</p>
			</div>
		</header>
	)
}
export default Header
