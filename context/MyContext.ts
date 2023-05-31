import { createContext } from 'react'

interface AppContextInterface {
  data: any
  setData: any
  isLoggedin: boolean
  setIsLoggedin: any
  handleSignin: any
}
const MyContext = createContext<AppContextInterface>({
  data: null,
  setData: null,
  isLoggedin: false,
  setIsLoggedin: null,
  handleSignin: null,
})

export default MyContext
