import { createContext } from 'react'

interface AppContextInterface {
  data: any
  setData: any
  isLoggedin: boolean
  setIsLoggedin: any
  handleSignin: any
  user: any
  allCampaigns: any
  setAllCampaigns: any
  unApprovedCampaigns: any
  setUnApprovedCampaigns: any
  isAdmin: boolean
  showEditModal: boolean
  setShowEditModal: any
  allInteractions: any
  setAllInteractions: any
}
const MyContext = createContext<AppContextInterface>({
  data: null,
  setData: null,
  isLoggedin: false,
  setIsLoggedin: null,
  handleSignin: null,
  user: null,
  allCampaigns: null,
  setAllCampaigns: null,
  unApprovedCampaigns: null,
  setUnApprovedCampaigns: null,
  isAdmin: false,
  showEditModal: false,
  setShowEditModal: null,
  allInteractions: null,
  setAllInteractions: null,
})

export default MyContext
