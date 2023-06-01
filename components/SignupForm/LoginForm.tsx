import MyContext from '@/context/MyContext'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { signInWithEmailPassword } from '@/firebase'

const LoginForm = () => {
  const router = useRouter()
  const { handleSignin } = useContext(MyContext)
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  })
  const onDataChange = (e: any) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <section className="text-gray-600 body-font w-[90%]">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-gray-900">
            Connect and Contribute:
          </h1>
          <p className="leading-relaxed mt-4">
            Sign in to Your Crowdfunding Journey
          </p>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Sign In
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={onDataChange}
              value={loginData.email}
              placeholder="Email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={onDataChange}
              value={loginData.password}
              placeholder="Password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            onClick={() => {
              signInWithEmailPassword(loginData)
              router.push('/dashboard')
            }}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Sign In
          </button>
        </div>
      </div>
    </section>
  )
}
export default LoginForm
