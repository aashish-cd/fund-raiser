const fs = require('fs')
const path = require('path')
// Step 1
// Load the data from an external file
// const dataFilename = './donor_data.json';
const dataFilePath = path.resolve(__dirname, 'donor_data.json')
const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf8'))

// console.log(data) // Checking data is loaded or not.

//Step 2: User profiling
const userProfiles = {}
data[0].users.forEach((user) => {
  userProfiles[user.id] = user
})

// Step 3: Collaborative filtering - Training Steps
function findSimilarUsers(userId) {
  // ... (similarities calculation)
}

function trainCollaborativeFiltering() {
  const users = data[0].users
  const interactions = data[0].interactions

  const userInteractions = {}
  interactions.forEach((interaction) => {
    const { userId, fundraiserId } = interaction
    if (!userInteractions[userId]) {
      userInteractions[userId] = []
    }
    userInteractions[userId].push(fundraiserId)
  })

  const similarities = {}
  users.forEach((user1) => {
    const user1Id = user1.id
    const user1Interactions = new Set(userInteractions[user1Id] || [])
    users.forEach((user2) => {
      const user2Id = user2.id
      if (user2Id !== user1Id) {
        const user2Interactions = new Set(userInteractions[user2Id] || [])
        const commonInteractions = new Set(
          [...user1Interactions].filter((fundraiserId) =>
            user2Interactions.has(fundraiserId)
          )
        )
        const similarity =
          commonInteractions.size /
          (user1Interactions.size + user2Interactions.size)
        if (!similarities[user1Id]) {
          similarities[user1Id] = {}
        }
        similarities[user1Id][user2Id] = similarity
      }
    })
  })

  return similarities
}

// Step 4: Model saving and loading
function saveModel(model, filename) {
  const serializedModel = JSON.stringify(model)
  fs.writeFileSync(filename, serializedModel)
}

function loadModel(filename) {
  const serializedModel = fs.readFileSync(filename, 'utf8')
  return JSON.parse(serializedModel)
}

// Step 5: Train and save the model
let model = null
// Model filename where train model is saved and loaded.
// const modelFilename = 'recommendation_model.json';
const modelFilename = path.resolve(__dirname, 'recommendation_model.json')

try {
  // Attempt to load the trained model
  model = loadModel(modelFilename)
  console.log('Model loaded successfully!')
} catch (error) {
  // If the model doesn't exist, train a new model
  console.log('Model not found. Training a new model...')
  model = trainCollaborativeFiltering()

  // Save the trained model
  saveModel(model, modelFilename)
  console.log('Model saved successfully!')
}

// Step 6: Generate recommendations using the saved model
function recommendFundraisers(userId, numRecommendations = 5) {
  const userSimilarities = model[userId] || {}
  const userInterests = userProfiles[userId].interests // fetching through api from database
  // console.log(user1Id)
  const fundraisers = data[0].fundraisers
  // console.log(fundraisers)
  const recommendedFundraisers = []

  for (const similarUserId in userSimilarities) {
    const similarity = userSimilarities[similarUserId]
    const similarUserInterests = userProfiles[similarUserId].interests
    const commonInterests = userInterests.filter((interest) =>
      similarUserInterests.includes(interest)
    )

    fundraisers.forEach((fundraiser) => {
      if (
        commonInterests.includes(fundraiser.category) &&
        !recommendedFundraisers.includes(fundraiser)
      ) {
        recommendedFundraisers.push(fundraiser)
      }
    })
  }

  recommendedFundraisers.sort(() => Math.random() - 0.5)
  const recommendations = recommendedFundraisers.slice(0, numRecommendations)

  return recommendations
}

// Sample of userId who is currently logged in.
const sampleUserId = 'bhattaashish303@gmail.com'

// Getting recommendations number of recommendations is 5 by default . You can modify it.
const recommendedFundraisers = recommendFundraisers(sampleUserId)
console.log(recommendedFundraisers)
console.log('Recommended Fundraisers:')
recommendedFundraisers.forEach((fundraiser) => {
  console.log(`- ${fundraiser.title} - ${fundraiser.category}`)
})
