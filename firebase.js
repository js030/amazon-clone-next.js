/** @format */

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAqBTj6vYD-RpSS5xThjI2dtXNkjNonnII',
	authDomain: 'nextjs-25169.firebaseapp.com',
	projectId: 'nextjs-25169',
	storageBucket: 'nextjs-25169.appspot.com',
	messagingSenderId: '919137877214',
	appId: '1:919137877214:web:68fa6db44f09d84cd0d64f',
	measurementId: 'G-83E2JP9DXP',
}

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app()

const db = app.firestore()

export default db
