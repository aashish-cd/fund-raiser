// defining types in ts

export type User = {
  id?: string
  demographics: {
    age: number
    gender: string
    location: string
  }
  interests: string[]
  isAdmin?: boolean
}

export type Campaign = {
  id?: string
  title: string
  description: string
  category: string
  goalAmount: number
  currentAmount: number
  endDate: string
  isVerified: boolean
  image: string
  userEmail: string
  createdAt?: string
}

export type Interaction = {
  userId: string
  fundraiserId: string
  donationAmount: number
  donationDate: string
}
