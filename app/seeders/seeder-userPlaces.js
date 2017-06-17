const Models = require('../models');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('UserPlaces', [
      { id: 1, userId: 1, address: '서울특별시 관악구 행운동 1686-14', coordinate:  Models.sequelize.literal(`POINT(126.9630874, 37.4775103)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 2, userId: 2, address: '서울특별시 동작구 상도1동 356-1', coordinate:  Models.sequelize.literal(`POINT(126.9515313, 37.4999336)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 3, userId: 3, address: '서울특별시 동작구 등용로8길 3', coordinate:  Models.sequelize.literal(`POINT(126.9337092, 37.5083322)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 4, userId: 4, address: '서울특별시 관악구 봉천동 729-22', coordinate:  Models.sequelize.literal(`POINT(126.9249911, 37.4905756)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 5, userId: 5, address: '서울특별시 관악구 청룡동 883-11', coordinate:  Models.sequelize.literal(`POINT(126.9477273, 37.481195)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 6, userId: 6, address: '서울특별시 관악구 서원동 94-153', coordinate:  Models.sequelize.literal(`POINT(126.9382142, 37.4783797)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 7, userId: 7, address: '서울특별시 관악구 대학동 관악로 1', coordinate:  Models.sequelize.literal(`POINT(126.9519053, 37.459882)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 8, userId: 8, address: '서울특별시 영등포구 양평동5가 41-1', coordinate:  Models.sequelize.literal(`POINT(126.8904229, 37.5391435)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 9, userId: 9, address: '서울특별시 영등포구 당산2동 98-4', coordinate:  Models.sequelize.literal(`POINT(126.9021986, 37.537994)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 10, userId: 10, address: '서울특별시 영등포구 양평동3가 65', coordinate:  Models.sequelize.literal(`POINT(126.8921603, 37.5276365)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 11, userId: 11, address: '서울특별시 영등포구 당산동4가 1-2', coordinate:  Models.sequelize.literal(`POINT(126.9028463, 37.5273038)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 12, userId: 12, address: '서울특별시 영등포구 여의동 27-3', coordinate:  Models.sequelize.literal(`POINT(126.9218375, 37.5226428)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 13, userId: 13, address: '서울특별시 영등포구 신길동 76', coordinate:  Models.sequelize.literal(`POINT(126.9109697, 37.5061136)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 14, userId: 14, address: '서울특별시 구로구 고척1동 63-12', coordinate:  Models.sequelize.literal(`POINT(126.8654138, 37.4978394)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 15, userId: 15, address: '인천광역시 남동구 구월남로289번길 4', coordinate:  Models.sequelize.literal(`POINT(126.7219914, 37.4522325)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 16, userId: 16, address: '인천광역시 남동구 논현고잔동 137-1', coordinate:  Models.sequelize.literal(`POINT(126.7158361, 37.3981379)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 17, userId: 17, address: '인천광역시 남구 문학동 394-6', coordinate:  Models.sequelize.literal(`POINT(126.6860316, 37.4351259)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 18, userId: 18, address: '인천광역시 서구 석남2동 570-15', coordinate:  Models.sequelize.literal(`POINT(126.6753024, 37.501062)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 19, userId: 19, address: '인천광역시 계양구 계양1동 194', coordinate:  Models.sequelize.literal(`POINT(126.6924284, 37.5802152)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 20, userId: 20, address: '인천광역시 서구 검단1동 119', coordinate:  Models.sequelize.literal(`POINT(126.6516277, 37.6098948)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 21, userId: 21, address: '경기도 김포시 월곶면 갈산리 466-28', coordinate:  Models.sequelize.literal(`POINT(126.5678357, 37.7020426)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 22, userId: 22, address: '경기도 김포시 하성면 석탄리 224-5', coordinate:  Models.sequelize.literal(`POINT(126.6507223, 37.7251098)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 23, userId: 23, address: '인천광역시 강화군 강화읍 관청리 938', coordinate:  Models.sequelize.literal(`POINT(126.4779392, 37.7545022)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 24, userId: 24, address: '인천광역시 강화군 내가면 고천리 산202', coordinate:  Models.sequelize.literal(`POINT(126.4138261, 37.7200896)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 25, userId: 25, address: '인천광역시 강화군 선원면 연리 1037', coordinate:  Models.sequelize.literal(`POINT(126.5121511, 37.7042703)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 26, userId: 26, address: '인천광역시 강화군 삼산면 매음리 439-4', coordinate:  Models.sequelize.literal(`POINT(126.3416629, 37.67020960000001)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 27, userId: 27, address: '인천광역시 강화군 내가면 외포리 547-78', coordinate:  Models.sequelize.literal(`POINT(126.3792291, 37.7009331)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 28, userId: 28, address: '인천광역시 강화군 양도면 인산리 747-2', coordinate:  Models.sequelize.literal(`POINT(126.4128477, 37.6992309)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 29, userId: 29, address: '인천광역시 강화군 양도면 조산리 233', coordinate:  Models.sequelize.literal(`POINT(126.4349418, 37.6517485)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 30, userId: 30, address: '서울특별시 용산구 후암동 30-134', coordinate:  Models.sequelize.literal(`POINT(126.9775731, 37.5511086)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 31, userId: 31, address: '서울특별시 중구 회현동2가 42-10', coordinate:  Models.sequelize.literal(`POINT(126.9836156, 37.5580068)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 32, userId: 32, address: '서울특별시 중구 필동2가 84-124', coordinate:  Models.sequelize.literal(`POINT(126.9946269, 37.5571857)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 33, userId: 33, address: '서울특별시 중구 신당동 432-2252', coordinate:  Models.sequelize.literal(`POINT(127.0074684, 37.54924889999999)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 34, userId: 34, address: '서울특별시 성동구 금호동4가 1472-1', coordinate:  Models.sequelize.literal(`POINT(127.0161232, 37.5480716)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 35, userId: 35, address: '서울특별시 성동구 옥수동 한림말길 50', coordinate:  Models.sequelize.literal(`POINT(127.0162708, 37.5399394)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 36, userId: 36, address: '서울특별시 강남구 압구정동 461', coordinate:  Models.sequelize.literal(`POINT(127.031165, 37.5316708)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 37, userId: 37, address: '서울특별시 강남구 청담동 23-4', coordinate:  Models.sequelize.literal(`POINT(127.0426288, 37.5205869)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 38, userId: 38, address: '서울특별시 강남구 개포로118길 60', coordinate:  Models.sequelize.literal(`POINT(127.0844, 37.4947218)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 39, userId: 39, address: '서울시 노원구 상계동 86', coordinate:  Models.sequelize.literal(`POINT(127.0757904, 37.66747429999999)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 40, userId: 40, address: '서울시 노원구 상계동 326-8', coordinate:  Models.sequelize.literal(`POINT(127.0647357, 37.6559856)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 41, userId: 41, address: '서울특별시 노원구 하계1동 공릉로 58길 24', coordinate:  Models.sequelize.literal(`POINT(127.0745531, 37.6364845)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 42, userId: 42, address: '서울특별시 노원구 중계동 360-20', coordinate:  Models.sequelize.literal(`POINT(127.072117, 37.6506098)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 43, userId: 43, address: '서울특별시 도봉구 창동 370', coordinate:  Models.sequelize.literal(`POINT(127.0477944, 37.648303)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 44, userId: 44, address: '서울특별시 도봉구 도봉로 585', coordinate:  Models.sequelize.literal(`POINT(127.0393509, 37.6571908)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 45, userId: 45, address: '경기도 용인시 수지구 성복동 355', coordinate:  Models.sequelize.literal(`POINT(127.0608515, 37.3243626)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 46, userId: 46, address: '경기도 수원시 권선구 서둔동 79-20', coordinate:  Models.sequelize.literal(`POINT(126.9886302, 37.2594223)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 47, userId: 47, address: '경기도 수원시 권선구 오목천동 399-6', coordinate:  Models.sequelize.literal(`POINT(126.9592847, 37.2401489)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 48, userId: 48, address: '경기도 화성시 봉담읍 주석로 1098', coordinate:  Models.sequelize.literal(`POINT(126.9322209, 37.2018624)`),
        createdAt: new Date(),
        updatedAt: new Date()},
      { id: 49, userId: 49, address: '경기도 화성시 정남면 신리 260-8', coordinate:  Models.sequelize.literal(`POINT(126.9717664, 37.160789)`),
        createdAt: new Date(),
        updatedAt: new Date()},
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
