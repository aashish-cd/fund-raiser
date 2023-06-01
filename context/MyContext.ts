import { createContext } from 'react'

interface AppContextInterface {
  data: any
  setData: any
  isLoggedin: boolean
  setIsLoggedin: any
  handleSignin: any
  user: any
}
const MyContext = createContext<AppContextInterface>({
  data: null,
  setData: null,
  isLoggedin: false,
  setIsLoggedin: null,
  handleSignin: null,
  user: null,
})

export default MyContext
