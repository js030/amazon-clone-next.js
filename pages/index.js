/** @format */
import ProductFeed from '../components/ProductFeed'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
	return (
		<div className='bg-gray-100'>
			<Head>
				<title>Create Next App</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />

			<main className='max-w-screen-2xl mx-auto'>
				<Banner />

				<ProductFeed products={products} />
			</main>
		</div>
	)
}

export async function getServerSideProps(context) {
	const products = await fetch('https://fakestoreapi.com/products').then(
		(res) => res.json()
	)

	return {
		props: {
			products,
		},
	}
}
