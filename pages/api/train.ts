import { getDonarData, getModelFromDb, saveModelToDb } from '@/firebase/firebase'
import type { NextApiRequest, NextApiResponse } from 'next'
import { useContext } from 'react'
import MyContext from '@/context/MyContext'
type Data = {}

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // console.log({ req: req.query })
  // const users = []
  // const interactions = []
  // const fundraisers = []

  // Object.keys(req.query).forEach((key) => {
  //   if (key.startsWith('users')) {
  //     const userKey = key.split('[')[1].split(']')[0]
  //     const userProperty = key.split('[')[2].split(']')[0]
  //     const userValue = req.query[key]

  //     if (!users[userKey]) {
  //       users[userKey] = { id: userValue }
  //     } else {
  //       users[userKey][userProperty] = userValue
  //     }
  //   } else if (key.startsWith('interactions')) {
  //     const interactionKey = key.split('[')[1].split(']')[0]
  //     const interactionProperty = key.split('[')[2].split(']')[0]
  //     const interactionValue = req.query[key]

  //     if (!interactions[interactionKey]) {
  //       interactions[interactionKey] = { id: interactionValue }
  //     } else {
  //       interactions[interactionKey][interactionProperty] = interactionValue
  //     }
  //   } else if (key.startsWith('fundraisers')) {
  //     const fundraiserKey = key.split('[')[1].split(']')[0]
  //     const fundraiserProperty = key.split('[')[2].split(']')[0]
  //     const fundraiserValue = req.query[key]

  //     if (!fundraisers[fundraiserKey]) {
  //       fundraisers[fundraiserKey] = { id: fundraiserValue }
  //     } else {
  //       fundraisers[fundraiserKey][fundraiserProperty] = fundraiserValue
  //     }
  //   }
  // })
  // console.log({ users, fundraisers, interactions })

  const {users,fundraisers,interactions} = await getDonarData();



  const recommendationFunction = async (
    userId: any,
    noOfRecommendations: any,
    users: any,
    fundraisers: any,
    interactions: any
  ) => {
    const data = [
      {
        users,
        fundraisers,
        interactions,
      },
    ]


    // console.log({ users, fundraisers, interactions })


    //Step 2: User profiling
    const userProfiles = {}
    data[0].users.forEach((user) => {
      userProfiles[user.id] = user
    })

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

      // console.log(similarities);

      return similarities
    }

    // Step 4: Model saving and loading
    function saveModel(model) {
      // const serializedModel = JSON.stringify(model)
      // fs.writeFileSync(filename, serializedModel)
      // console.log("This is model",model)
      saveModelToDb(model)
      // return model
      console.log('saving model')
    }

  async function loadModel() {
      // const serializedModel = fs.readFileSync(filename, 'utf8')
      // return JSON.parse(serializedModel)
      // console.log(getModelFromDb())
      const data = await getModelFromDb();
      // console.log(data);
      // console.log("Hello loaddb")

      if (data === null) {
        throw new Error("Model is null. Please initialize the model before using it.");
      }
    


      return data;
    }

    // Step 5: Train and save the model
    let model = null
    // Model filename where train model is saved and loaded.
    // const modelFilename = 'recommendation_model.json';

    try {
      // Attempt to load the trained model
      
      model = await loadModel()
      // console.log(model);
      if (model === null) {
        throw new Error("Model is null. Please initialize the model before using it.");
      }
      console.log('Model loaded successfully!')
    } catch (error) {
      // If the model doesn't exist, train a new model
      // console.log(error);
      console.log('Model not found. Training a new model...')
      model = trainCollaborativeFiltering()

      // Save the trained model
      saveModel(model)
      console.log('Model saved successfully!')
    }

    // Step 6: Generate recommendations using the saved model
    function recommendFundraisers(userId, numRecommendations = 5) {
      const userSimilarities = model[0][userId] || {}
      
      // console.log(userId)
      // console.log(userSimilarities);
      const userInterests = userProfiles[userId].interests // fetching through api from database
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
      const recommendations = recommendedFundraisers.slice(
        0,
        numRecommendations
      )

      // console.log(recommendations)

      return recommendations
    }
    return recommendFundraisers(userId,noOfRecommendations)
  }
  let recommendedData = []
  if ((users, fundraisers, interactions)) {
    recommendedData = await recommendationFunction(
      // 'bhattaashish303@gmail.com',
      'mkchauhan647@gmail.com',
      6,
      users,
      fundraisers,
      interactions
    )
  }

  console.log(recommendedData.length);

  res.status(200).json({ recommendedData })
}
