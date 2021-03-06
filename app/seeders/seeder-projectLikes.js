
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ProjectLikes', [
      { id: 1, projectId: 1, likeUserId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 2, projectId: 2, likeUserId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 3, projectId: 3, likeUserId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 4, projectId: 4, likeUserId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 5, projectId: 5, likeUserId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 6, projectId: 6, likeUserId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 7, projectId: 7, likeUserId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 8, projectId: 8, likeUserId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 9, projectId: 9, likeUserId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 10, projectId: 10, likeUserId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 11, projectId: 11, likeUserId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 12, projectId: 12, likeUserId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 13, projectId: 13, likeUserId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 14, projectId: 14, likeUserId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 15, projectId: 15, likeUserId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 16, projectId: 16, likeUserId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 17, projectId: 17, likeUserId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 18, projectId: 18, likeUserId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 19, projectId: 19, likeUserId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 20, projectId: 20, likeUserId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 21, projectId: 21, likeUserId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 22, projectId: 22, likeUserId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 23, projectId: 23, likeUserId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 24, projectId: 24, likeUserId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 25, projectId: 25, likeUserId: 7, createdAt: new Date(), updatedAt: new Date()},
      { id: 26, projectId: 26, likeUserId: 7, createdAt: new Date(), updatedAt: new Date()},
      { id: 27, projectId: 27, likeUserId: 7, createdAt: new Date(), updatedAt: new Date()},
      { id: 28, projectId: 28, likeUserId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 29, projectId: 29, likeUserId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 30, projectId: 30, likeUserId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 31, projectId: 31, likeUserId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 32, projectId: 32, likeUserId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 33, projectId: 33, likeUserId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 34, projectId: 34, likeUserId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 35, projectId: 35, likeUserId: 10, createdAt: new Date(), updatedAt: new Date()},
      { id: 36, projectId: 36, likeUserId: 10, createdAt: new Date(), updatedAt: new Date()},
      { id: 37, projectId: 37, likeUserId: 10, createdAt: new Date(), updatedAt: new Date()},
      { id: 38, projectId: 38, likeUserId: 10, createdAt: new Date(), updatedAt: new Date()},
      { id: 39, projectId: 39, likeUserId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 40, projectId: 40, likeUserId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 41, projectId: 41, likeUserId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 42, projectId: 42, likeUserId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 43, projectId: 1, likeUserId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 44, projectId: 3, likeUserId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 45, projectId: 5, likeUserId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 46, projectId: 7, likeUserId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 47, projectId: 9, likeUserId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 48, projectId: 2, likeUserId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 49, projectId: 4, likeUserId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 50, projectId: 6, likeUserId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 51, projectId: 8, likeUserId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 52, projectId: 10, likeUserId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 53, projectId: 11, likeUserId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 54, projectId: 12, likeUserId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 55, projectId: 13, likeUserId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 56, projectId: 14, likeUserId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 57, projectId: 15, likeUserId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 58, projectId: 16, likeUserId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 59, projectId: 17, likeUserId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 60, projectId: 18, likeUserId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 61, projectId: 19, likeUserId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 62, projectId: 20, likeUserId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 63, projectId: 21, likeUserId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 64, projectId: 22, likeUserId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 65, projectId: 23, likeUserId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 66, projectId: 24, likeUserId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 67, projectId: 25, likeUserId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 68, projectId: 26, likeUserId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 69, projectId: 27, likeUserId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 70, projectId: 28, likeUserId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 71, projectId: 29, likeUserId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 72, projectId: 30, likeUserId: 20, createdAt: new Date(), updatedAt: new Date()},
      { id: 73, projectId: 31, likeUserId: 20, createdAt: new Date(), updatedAt: new Date()},
      { id: 74, projectId: 32, likeUserId: 20, createdAt: new Date(), updatedAt: new Date()},
      { id: 75, projectId: 33, likeUserId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 76, projectId: 34, likeUserId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 77, projectId: 35, likeUserId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 78, projectId: 36, likeUserId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 79, projectId: 37, likeUserId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 80, projectId: 38, likeUserId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 81, projectId: 39, likeUserId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 82, projectId: 40, likeUserId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 83, projectId: 41, likeUserId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 84, projectId: 42, likeUserId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 85, projectId: 1, likeUserId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 86, projectId: 2, likeUserId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 87, projectId: 3, likeUserId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 88, projectId: 4, likeUserId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 89, projectId: 5, likeUserId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 90, projectId: 6, likeUserId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 91, projectId: 7, likeUserId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 92, projectId: 8, likeUserId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 93, projectId: 9, likeUserId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 94, projectId: 10, likeUserId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 95, projectId: 1, likeUserId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 96, projectId: 2, likeUserId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 97, projectId: 3, likeUserId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 98, projectId: 4, likeUserId: 28, createdAt: new Date(), updatedAt: new Date()},
      { id: 99, projectId: 5, likeUserId: 28, createdAt: new Date(), updatedAt: new Date()},
      { id: 100, projectId: 6, likeUserId: 28, createdAt: new Date(), updatedAt: new Date()},
      { id: 101, projectId: 7, likeUserId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 102, projectId: 8, likeUserId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 103, projectId: 9, likeUserId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 104, projectId: 10, likeUserId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 105, projectId: 11, likeUserId: 30, createdAt: new Date(), updatedAt: new Date()},
      { id: 106, projectId: 12, likeUserId: 30, createdAt: new Date(), updatedAt: new Date()},
      { id: 107, projectId: 13, likeUserId: 30, createdAt: new Date(), updatedAt: new Date()},
      { id: 108, projectId: 14, likeUserId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 109, projectId: 15, likeUserId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 110, projectId: 16, likeUserId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 111, projectId: 17, likeUserId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 112, projectId: 18, likeUserId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 113, projectId: 19, likeUserId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 114, projectId: 1, likeUserId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 115, projectId: 2, likeUserId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 116, projectId: 3, likeUserId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 117, projectId: 4, likeUserId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 118, projectId: 5, likeUserId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 119, projectId: 6, likeUserId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 120, projectId: 7, likeUserId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 121, projectId: 8, likeUserId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 122, projectId: 9, likeUserId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 123, projectId: 10, likeUserId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 124, projectId: 1, likeUserId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 125, projectId: 2, likeUserId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 126, projectId: 3, likeUserId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 127, projectId: 4, likeUserId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 128, projectId: 5, likeUserId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 129, projectId: 6, likeUserId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 130, projectId: 7, likeUserId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 131, projectId: 8, likeUserId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 132, projectId: 9, likeUserId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 133, projectId: 10, likeUserId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 134, projectId: 11, likeUserId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 135, projectId: 12, likeUserId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 136, projectId: 13, likeUserId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 137, projectId: 14, likeUserId: 40, createdAt: new Date(), updatedAt: new Date()},
      { id: 138, projectId: 15, likeUserId: 40, createdAt: new Date(), updatedAt: new Date()},
      { id: 139, projectId: 16, likeUserId: 40, createdAt: new Date(), updatedAt: new Date()},
      { id: 140, projectId: 17, likeUserId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 141, projectId: 18, likeUserId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 142, projectId: 19, likeUserId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 143, projectId: 20, likeUserId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 144, projectId: 1, likeUserId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 145, projectId: 2, likeUserId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 146, projectId: 3, likeUserId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 147, projectId: 4, likeUserId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 148, projectId: 5, likeUserId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 149, projectId: 6, likeUserId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 150, projectId: 7, likeUserId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 151, projectId: 8, likeUserId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 152, projectId: 9, likeUserId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 153, projectId: 10, likeUserId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 154, projectId: 11, likeUserId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 155, projectId: 12, likeUserId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 156, projectId: 13, likeUserId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 157, projectId: 14, likeUserId: 46, createdAt: new Date(), updatedAt: new Date()},
      { id: 158, projectId: 15, likeUserId: 46, createdAt: new Date(), updatedAt: new Date()},
      { id: 159, projectId: 16, likeUserId: 46, createdAt: new Date(), updatedAt: new Date()},
      { id: 160, projectId: 17, likeUserId: 47, createdAt: new Date(), updatedAt: new Date()},
      { id: 161, projectId: 18, likeUserId: 47, createdAt: new Date(), updatedAt: new Date()},
      { id: 162, projectId: 19, likeUserId: 47, createdAt: new Date(), updatedAt: new Date()},
      { id: 163, projectId: 20, likeUserId: 48, createdAt: new Date(), updatedAt: new Date()},
      { id: 164, projectId: 1, likeUserId: 48, createdAt: new Date(), updatedAt: new Date()},
      { id: 165, projectId: 2, likeUserId: 48, createdAt: new Date(), updatedAt: new Date()},
      { id: 166, projectId: 3, likeUserId: 49, createdAt: new Date(), updatedAt: new Date()},
      { id: 167, projectId: 4, likeUserId: 49, createdAt: new Date(), updatedAt: new Date()},
      { id: 168, projectId: 5, likeUserId: 49, createdAt: new Date(), updatedAt: new Date()}      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
