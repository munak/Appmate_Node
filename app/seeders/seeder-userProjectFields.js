
module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('UserProjectFields', [
      { id: 1, userId: 1, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 2, userId: 1, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 3, userId: 1, projectFieldId: 20, createdAt: new Date(), updatedAt: new Date()},
      { id: 4, userId: 1, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 5, userId: 1, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 6, userId: 2, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 7, userId: 2, projectFieldId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 8, userId: 2, projectFieldId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 9, userId: 2, projectFieldId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 10, userId: 2, projectFieldId: 46, createdAt: new Date(), updatedAt: new Date()},
      { id: 11, userId: 2, projectFieldId: 47, createdAt: new Date(), updatedAt: new Date()},
      { id: 12, userId: 2, projectFieldId: 48, createdAt: new Date(), updatedAt: new Date()},
      { id: 13, userId: 3, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 14, userId: 3, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 15, userId: 3, projectFieldId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 16, userId: 3, projectFieldId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 17, userId: 3, projectFieldId: 10, createdAt: new Date(), updatedAt: new Date()},
      { id: 18, userId: 3, projectFieldId: 30, createdAt: new Date(), updatedAt: new Date()},
      { id: 19, userId: 3, projectFieldId: 60, createdAt: new Date(), updatedAt: new Date()},
      { id: 20, userId: 4, projectFieldId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 21, userId: 4, projectFieldId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 22, userId: 4, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 23, userId: 4, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 24, userId: 4, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 25, userId: 5, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 26, userId: 5, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 27, userId: 5, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 28, userId: 5, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 29, userId: 5, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 30, userId: 5, projectFieldId: 46, createdAt: new Date(), updatedAt: new Date()},
      { id: 31, userId: 5, projectFieldId: 47, createdAt: new Date(), updatedAt: new Date()},
      { id: 32, userId: 6, projectFieldId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 33, userId: 6, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 34, userId: 6, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 35, userId: 7, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 36, userId: 7, projectFieldId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 37, userId: 7, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 38, userId: 7, projectFieldId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 39, userId: 7, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 40, userId: 7, projectFieldId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 41, userId: 7, projectFieldId: 46, createdAt: new Date(), updatedAt: new Date()},
      { id: 42, userId: 8, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 43, userId: 8, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 44, userId: 8, projectFieldId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 45, userId: 8, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 46, userId: 8, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 47, userId: 9, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 48, userId: 9, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 49, userId: 9, projectFieldId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 50, userId: 10, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 51, userId: 10, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 52, userId: 10, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 53, userId: 10, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 54, userId: 10, projectFieldId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 55, userId: 10, projectFieldId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 56, userId: 10, projectFieldId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 57, userId: 10, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 58, userId: 10, projectFieldId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 59, userId: 11, projectFieldId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 60, userId: 11, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 61, userId: 11, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 62, userId: 11, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 63, userId: 11, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 64, userId: 12, projectFieldId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 65, userId: 12, projectFieldId: 35, createdAt: new Date(), updatedAt: new Date()},
      { id: 66, userId: 12, projectFieldId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 67, userId: 13, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 68, userId: 13, projectFieldId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 69, userId: 13, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 70, userId: 13, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 71, userId: 13, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 72, userId: 14, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 73, userId: 14, projectFieldId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 74, userId: 14, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 75, userId: 14, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 76, userId: 14, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 77, userId: 14, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 78, userId: 14, projectFieldId: 34, createdAt: new Date(), updatedAt: new Date()},
      { id: 79, userId: 15, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 80, userId: 15, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 81, userId: 15, projectFieldId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 82, userId: 15, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 83, userId: 16, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 84, userId: 16, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 85, userId: 16, projectFieldId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 86, userId: 16, projectFieldId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 87, userId: 16, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 88, userId: 16, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 89, userId: 16, projectFieldId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 90, userId: 16, projectFieldId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 91, userId: 17, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 92, userId: 17, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 93, userId: 17, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 94, userId: 18, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 95, userId: 18, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 96, userId: 18, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 97, userId: 18, projectFieldId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 98, userId: 18, projectFieldId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 99, userId: 18, projectFieldId: 46, createdAt: new Date(), updatedAt: new Date()},
      { id: 100, userId: 19, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 101, userId: 19, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 102, userId: 19, projectFieldId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 103, userId: 19, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 104, userId: 19, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 105, userId: 20, projectFieldId: 1, createdAt: new Date(), updatedAt: new Date()},
      { id: 106, userId: 20, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 107, userId: 20, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 108, userId: 20, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 109, userId: 20, projectFieldId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 110, userId: 20, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 111, userId: 20, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 112, userId: 20, projectFieldId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 113, userId: 21, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 114, userId: 21, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 115, userId: 21, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 116, userId: 22, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 117, userId: 22, projectFieldId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 118, userId: 22, projectFieldId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 119, userId: 22, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 120, userId: 22, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 121, userId: 22, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 122, userId: 22, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 123, userId: 22, projectFieldId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 124, userId: 23, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 125, userId: 23, projectFieldId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 126, userId: 23, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 127, userId: 23, projectFieldId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 128, userId: 23, projectFieldId: 17, createdAt: new Date(), updatedAt: new Date()},
      { id: 129, userId: 24, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 130, userId: 24, projectFieldId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 131, userId: 24, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 132, userId: 24, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 133, userId: 25, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 134, userId: 25, projectFieldId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 135, userId: 25, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 136, userId: 25, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 137, userId: 25, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 138, userId: 26, projectFieldId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 139, userId: 26, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 140, userId: 26, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 141, userId: 27, projectFieldId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 142, userId: 27, projectFieldId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 143, userId: 27, projectFieldId: 43, createdAt: new Date(), updatedAt: new Date()},
      { id: 144, userId: 27, projectFieldId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 145, userId: 27, projectFieldId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 146, userId: 27, projectFieldId: 48, createdAt: new Date(), updatedAt: new Date()},
      { id: 147, userId: 27, projectFieldId: 49, createdAt: new Date(), updatedAt: new Date()},
      { id: 148, userId: 28, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 149, userId: 28, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 150, userId: 28, projectFieldId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 151, userId: 28, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 152, userId: 29, projectFieldId: 5, createdAt: new Date(), updatedAt: new Date()},
      { id: 153, userId: 29, projectFieldId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 154, userId: 29, projectFieldId: 8, createdAt: new Date(), updatedAt: new Date()},
      { id: 155, userId: 29, projectFieldId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 156, userId: 29, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 157, userId: 29, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 158, userId: 29, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 159, userId: 30, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 160, userId: 30, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 161, userId: 30, projectFieldId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 162, userId: 30, projectFieldId: 42, createdAt: new Date(), updatedAt: new Date()},
      { id: 163, userId: 30, projectFieldId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 164, userId: 30, projectFieldId: 47, createdAt: new Date(), updatedAt: new Date()},
      { id: 165, userId: 31, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 166, userId: 31, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 167, userId: 31, projectFieldId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 168, userId: 31, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 169, userId: 32, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 170, userId: 32, projectFieldId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 171, userId: 32, projectFieldId: 32, createdAt: new Date(), updatedAt: new Date()},
      { id: 172, userId: 32, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 173, userId: 32, projectFieldId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 174, userId: 32, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 175, userId: 32, projectFieldId: 45, createdAt: new Date(), updatedAt: new Date()},
      { id: 176, userId: 32, projectFieldId: 49, createdAt: new Date(), updatedAt: new Date()},
      { id: 177, userId: 33, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 178, userId: 33, projectFieldId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 179, userId: 33, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 180, userId: 33, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 181, userId: 33, projectFieldId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 182, userId: 33, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 183, userId: 33, projectFieldId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 184, userId: 33, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 185, userId: 34, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 186, userId: 34, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 187, userId: 34, projectFieldId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 188, userId: 34, projectFieldId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 189, userId: 34, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 190, userId: 34, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 191, userId: 34, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 192, userId: 35, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 193, userId: 35, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 194, userId: 35, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 195, userId: 35, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 196, userId: 36, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 197, userId: 36, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 198, userId: 36, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 199, userId: 37, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 200, userId: 37, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 201, userId: 37, projectFieldId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 202, userId: 37, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 203, userId: 38, projectFieldId: 7, createdAt: new Date(), updatedAt: new Date()},
      { id: 204, userId: 38, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 205, userId: 38, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 206, userId: 38, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 207, userId: 38, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 208, userId: 39, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 209, userId: 39, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 210, userId: 39, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 211, userId: 39, projectFieldId: 30, createdAt: new Date(), updatedAt: new Date()},
      { id: 212, userId: 39, projectFieldId: 38, createdAt: new Date(), updatedAt: new Date()},
      { id: 213, userId: 39, projectFieldId: 44, createdAt: new Date(), updatedAt: new Date()},
      { id: 214, userId: 40, projectFieldId: 12, createdAt: new Date(), updatedAt: new Date()},
      { id: 215, userId: 40, projectFieldId: 13, createdAt: new Date(), updatedAt: new Date()},
      { id: 216, userId: 40, projectFieldId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 217, userId: 40, projectFieldId: 11, createdAt: new Date(), updatedAt: new Date()},
      { id: 218, userId: 41, projectFieldId: 16, createdAt: new Date(), updatedAt: new Date()},
      { id: 219, userId: 41, projectFieldId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 220, userId: 41, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 221, userId: 41, projectFieldId: 25, createdAt: new Date(), updatedAt: new Date()},
      { id: 222, userId: 41, projectFieldId: 29, createdAt: new Date(), updatedAt: new Date()},
      { id: 223, userId: 41, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 224, userId: 41, projectFieldId: 39, createdAt: new Date(), updatedAt: new Date()},
      { id: 225, userId: 41, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 226, userId: 42, projectFieldId: 9, createdAt: new Date(), updatedAt: new Date()},
      { id: 227, userId: 42, projectFieldId: 14, createdAt: new Date(), updatedAt: new Date()},
      { id: 228, userId: 42, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 229, userId: 43, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 230, userId: 43, projectFieldId: 15, createdAt: new Date(), updatedAt: new Date()},
      { id: 231, userId: 43, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 232, userId: 43, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 233, userId: 43, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 234, userId: 44, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 235, userId: 44, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 236, userId: 44, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 237, userId: 45, projectFieldId: 7, createdAt: new Date(), updatedAt: new Date()},
      { id: 238, userId: 45, projectFieldId: 18, createdAt: new Date(), updatedAt: new Date()},
      { id: 239, userId: 45, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 240, userId: 45, projectFieldId: 23, createdAt: new Date(), updatedAt: new Date()},
      { id: 241, userId: 45, projectFieldId: 24, createdAt: new Date(), updatedAt: new Date()},
      { id: 242, userId: 45, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 243, userId: 46, projectFieldId: 19, createdAt: new Date(), updatedAt: new Date()},
      { id: 244, userId: 46, projectFieldId: 22, createdAt: new Date(), updatedAt: new Date()},
      { id: 245, userId: 46, projectFieldId: 27, createdAt: new Date(), updatedAt: new Date()},
      { id: 246, userId: 47, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 247, userId: 47, projectFieldId: 33, createdAt: new Date(), updatedAt: new Date()},
      { id: 248, userId: 47, projectFieldId: 37, createdAt: new Date(), updatedAt: new Date()},
      { id: 249, userId: 47, projectFieldId: 41, createdAt: new Date(), updatedAt: new Date()},
      { id: 250, userId: 47, projectFieldId: 47, createdAt: new Date(), updatedAt: new Date()},
      { id: 251, userId: 47, projectFieldId: 48, createdAt: new Date(), updatedAt: new Date()},
      { id: 252, userId: 48, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()},
      { id: 253, userId: 48, projectFieldId: 26, createdAt: new Date(), updatedAt: new Date()},
      { id: 254, userId: 48, projectFieldId: 31, createdAt: new Date(), updatedAt: new Date()},
      { id: 255, userId: 48, projectFieldId: 36, createdAt: new Date(), updatedAt: new Date()},
      { id: 256, userId: 49, projectFieldId: 2, createdAt: new Date(), updatedAt: new Date()},
      { id: 257, userId: 49, projectFieldId: 3, createdAt: new Date(), updatedAt: new Date()},
      { id: 258, userId: 49, projectFieldId: 4, createdAt: new Date(), updatedAt: new Date()},
      { id: 259, userId: 49, projectFieldId: 6, createdAt: new Date(), updatedAt: new Date()},
      { id: 260, userId: 49, projectFieldId: 21, createdAt: new Date(), updatedAt: new Date()}
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
