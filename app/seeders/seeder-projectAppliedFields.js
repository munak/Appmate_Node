
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('ProjectAppliedFields', [
      { id: 1, projectId: 1, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 2, projectId: 1, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 3, projectId: 1, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 4, projectId: 1, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 5, projectId: 1, projectFieldId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 6, projectId: 1, projectFieldId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 7, projectId: 2, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 8, projectId: 2, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 9, projectId: 2, projectFieldId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 10, projectId: 2, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 11, projectId: 2, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 12, projectId: 2, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 13, projectId: 2, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 14, projectId: 2, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 15, projectId: 2, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 16, projectId: 2, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 17, projectId: 2, projectFieldId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 18, projectId: 2, projectFieldId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 19, projectId: 2, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 20, projectId: 2, projectFieldId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 21, projectId: 2, projectFieldId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 22, projectId: 2, projectFieldId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 23, projectId: 2, projectFieldId: 40, createdAt: new Date(), updatedAt: new Date()},
      { id: 24, projectId: 2, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 25, projectId: 2, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 26, projectId: 2, projectFieldId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 27, projectId: 3, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 28, projectId: 3, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 29, projectId: 3, projectFieldId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 30, projectId: 3, projectFieldId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 31, projectId: 3, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 32, projectId: 4, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 33, projectId: 4, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 34, projectId: 4, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 35, projectId: 4, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 36, projectId: 4, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 37, projectId: 4, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 38, projectId: 4, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 39, projectId: 4, projectFieldId: 28, createdAt: new Date(), updatedAt: new Date()},
      { id: 40, projectId: 5, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 41, projectId: 5, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 42, projectId: 5, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 43, projectId: 5, projectFieldId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 44, projectId: 6, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 45, projectId: 6, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 46, projectId: 6, projectFieldId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 47, projectId: 7, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 48, projectId: 7, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 49, projectId: 8, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 50, projectId: 8, projectFieldId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 51, projectId: 8, projectFieldId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 52, projectId: 8, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 53, projectId: 8, projectFieldId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 54, projectId: 9, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 55, projectId: 9, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 56, projectId: 9, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 57, projectId: 9, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 58, projectId: 9, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 59, projectId: 10, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 60, projectId: 10, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 61, projectId: 10, projectFieldId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 62, projectId: 11, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 63, projectId: 11, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 64, projectId: 12, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 65, projectId: 12, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 66, projectId: 12, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 67, projectId: 12, projectFieldId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 68, projectId: 12, projectFieldId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 69, projectId: 13, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 70, projectId: 14, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 71, projectId: 14, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 72, projectId: 15, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 73, projectId: 16, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 74, projectId: 16, projectFieldId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 75, projectId: 16, projectFieldId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 76, projectId: 16, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 77, projectId: 17, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 78, projectId: 17, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 79, projectId: 17, projectFieldId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 80, projectId: 18, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 81, projectId: 19, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 82, projectId: 20, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 83, projectId: 21, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 84, projectId: 22, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 85, projectId: 22, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 86, projectId: 22, projectFieldId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 87, projectId: 23, projectFieldId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 88, projectId: 24, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 89, projectId: 24, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 90, projectId: 24, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 91, projectId: 24, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 92, projectId: 24, projectFieldId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 93, projectId: 25, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 94, projectId: 25, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 95, projectId: 25, projectFieldId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 96, projectId: 26, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 97, projectId: 26, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 98, projectId: 27, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 99, projectId: 27, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 100, projectId: 28, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 101, projectId: 28, projectFieldId: 34, createdAt: new Date(), updatedAt: new Date()}
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
