const fs = require('fs');
const path = require('path')
// Step 1
// Load the data from an external file
const dataFilename = 'donor_data.json';

const dataFilepath = path.join(__dirname,dataFilename)
const dataset = JSON.parse(fs.readFileSync(dataFilepath, 'utf8'));

// Function to calculate Jaccard similarity coefficient
// function calculateJaccardSimilarity(set1, set2) {
//   const intersection = new Set([...set1].filter(item => set2.has(item)));
//   const union = new Set([...set1, ...set2]);
//   return intersection.size / union.size;
// }

// Function to calculate Cosine Similarity coefficient
function calculateCosineSimilarity(set1, set2) {
    const intersection = new Set([...set1].filter(item => set2.has(item)));
    const numerator = intersection.size;
    const denominator = Math.sqrt(set1.size) * Math.sqrt(set2.size);
    return numerator / denominator;
  }
  




// Function to generate fundraiser recommendations for a user
function generateRecommendations(userId, data) {
  // Find the target user
  const targetUser = data[0].users.find(user => user.id === userId);

  if (!targetUser) {
    console.log("User not found");
    return [];
  }

  // Extract interests and interactions of the target user
  const targetInterests = new Set(targetUser.interests);
  const targetInteractions = new Set(targetUser.interactions.map(interaction => interaction.fundraiserId));

  const userSimilarities = [];
  // Calculate similarities between the target user and other users
  data.forEach(item => {
    item.users.forEach(user => {
      if (user.id !== userId) {
        // const interestsSimilarity = calculateJaccardSimilarity(targetInterests, new Set(user.interests));
        // const interactionsSimilarity = calculateJaccardSimilarity(targetInteractions, new Set(user.interactions.map(interaction => interaction.fundraiserId)));
        const interestsSimilarity = calculateCosineSimilarity(targetInterests, new Set(user.interests));
        const interactionsSimilarity = calculateCosineSimilarity(targetInteractions, new Set(user.interactions.map(interaction => interaction.fundraiserId)));
        const totalSimilarity = (interestsSimilarity + interactionsSimilarity) / 2; // Average similarity
        userSimilarities.push({ userId: user.id, similarity: totalSimilarity });
      }
    });
  });

  // Sort users based on similarity in descending order
  userSimilarities.sort((a, b) => b.similarity - a.similarity);
  const topSimilarUser = userSimilarities.slice(0, 20); // Select top 20 similar neighbors

  const similarUserFundraisers = [];
  // Get fundraisers interacted by similar users
  topSimilarUser.forEach(similarUser => {
    const similarUsers = data[0].users.find(user => user.id === similarUser.userId);
    similarUsers.interactions.forEach(interaction => {
      similarUserFundraisers.push(interaction.fundraiserId);
    });
  });

  // Filter and combine recommendations based on interactions and interests
  const recommendationsByInteractions = data[0].fundraisers.filter(fundraiser => {
    return !targetInteractions.has(fundraiser.id) && similarUserFundraisers.includes(fundraiser.id);
  });

  const recommendationsByInterests = data[0].fundraisers.filter(fundraiser => {
    return !targetInteractions.has(fundraiser.id) && targetInterests.has(fundraiser.category);
  });

  const recommendations = [...recommendationsByInteractions, ...recommendationsByInterests].slice(0,10);

  console.log("Number of Recommendations:", recommendations.length);

  return recommendations;
}

// Example usage
const userId = "4a1ad5e1-263d-4e09-93a1-6171f93d185e";
const recommendations = generateRecommendations(userId, dataset);
console.log("Fundraiser Recommendations for User", userId);

// Function to get unique categories from the recommendations
function getUniqueCategories(recommendations) {
  const categories = new Set();
  
  recommendations.forEach(fundraiser => {
    categories.add(fundraiser.category);
  });
  
  return Array.from(categories);
}

const uniqueCategories = getUniqueCategories(recommendations);
console.log(uniqueCategories);
