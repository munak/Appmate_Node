const Models = require('../../models');

exports.showProjectList = async (req, res, next) => {
  try {
    // User Authorization
    const myUserId = parseInt(req.headers.userid, 10);
    if (!myUserId) {
      return next(new Error('No myUserId'));
    }

    const projects = await Models.Project.findAll({
      // where: {
      //   ownerId: {
      //     $not: userId
      //   }
      // },
      attributes: [
        'id', 'projectName', 'projectImage',
        [
          Models.sequelize.fn('DATEDIFF',
            Models.sequelize.col('projectClosingDate'),
            Models.sequelize.col('projectOpeningDate')
          ), 'dDay'
        ]
      ],
      include: [
        {
          model: Models.User,
          as: 'Owner',
          attributes: [ 'id', 'userNickname', 'userImage' ]
        }
      ]
    });

    if (!projects) {
      return next(new Error('Error to create tuple'));
    }

    return res.status(201).json({
      'msg': 'success',
      'data': {
        'projects': projects
      }
    });
  }
  catch (error) {
    return next(error);
  }
};

exports.showProject = async (req, res, next) => {
  try {
    // User Authorization
    const myUserId = parseInt(req.headers.userid, 10);
    if (!myUserId) {
      return next(new Error('No myUserId'));
    }

    const projectId = parseInt(req.params.projectId, 10);
    if (!projectId) {
      return next(new Error('No ProjectId'));
    }

    const project = await Models.Project.findOne({
      where: {
        id: projectId
      },
      attributes: [
        'id', 'projectName', 'projectImage',
        'projectDescription', 'isPass',
        [
          Models.sequelize.fn('DATEDIFF',
            Models.sequelize.col('projectClosingDate'),
            Models.sequelize.col('projectOpeningDate')
          ), 'dDay'
        ]
      ],
      include: [
        {
          model: Models.User,
          as: 'Owner',
          attributes: [ 'id', 'userNickname', 'userImage' ]
        }
      ]
    });

    if (!project) {
      return next(new Error('Error to create tuple'));
    }

    return res.status(201).json({
      'msg': 'success',
      'data': {
        'project': project
      }
    });
  }
  catch (error) {
    return next(error);
  }
};

exports.showCommentList = async (req, res, next) => {
  try {
    // User Authorization
    const myUserId = parseInt(req.headers.userid, 10);
    if (!myUserId) {
      return next(new Error('No myUserId'));
    }

    const projectId = parseInt(req.params.projectId, 10);
    if (!projectId) {
      return next(new Error('No projectId'));
    }

    const comments = await Models.ProjectComment.findAll({
      where: {
        projectId: projectId
      },
      attributes: [
        'commentContents'
      ],
      include: [
        {
          model: Models.User,
          as: 'User',
          attributes: [ 'id', 'userNickname', 'userImage' ]
        }
      ]
    });

    if (!comments) {
      return next(new Error('Error to create tuple'));
    }

    return res.status(201).json({
      'msg': 'success',
      'data': {
        'comments': comments
      }
    });
  }
  catch (error) {
    return next(error);
  }
};

exports.setProjectComment = async (req, res, next) => {
  try {
    // User Authorization
    const myUserId = parseInt(req.headers.userid, 10);
    if (!myUserId) {
      return next(new Error('No myUserId'));
    }

    const projectId = parseInt(req.params.projectId, 10);
    if (!projectId) {
      return next(new Error('No projectId'));
    }

    const userId = req.headers.userid;
    if (!userId) {
      return next(new Error('No userId'));
    }

    const commentContents = req.body.commentContents;

    const comment = await Models.ProjectComment.create({
      projectId: projectId,
      userId: userId,
      commentContents: commentContents
    });

    const comments = await Models.ProjectComment.findAll({
      where: {
        projectId: projectId
      },
      attributes: [
        'commentContents'
      ],
      include: [
        {
          model: Models.User,
          as: 'User',
          attributes: [ 'id', 'userNickname', 'userImage' ]
        }
      ]
    });

    if (!comments) {
      return next(new Error("Error to create tuple"));
    }

    return res.status(201).json({
      'msg': 'success',
      'data': {
        'comments': comments
      }
    });
  }
  catch (error) {
    console.log('Error: ' + error.message);
    next(error);
  }
};

exports.showProjectLikes = async (req, res, next) => {
  try {
    // User Authorization
    const myUserId = parseInt(req.headers.userid, 10);
    if (!myUserId) {
      return next(new Error('No myUserId'));
    }

    const projectId = parseInt(req.params.projectId, 10);
    if (!projectId) {
      return next(new Error('No id'));
    }

    const users = await Models.Project.findAll({
      where: {
        id: projectId
      },
      attributes: [],
      include: [
        {
          model: Models.User,
          as: 'Likes',
          attributes: [ 'id', 'userNickname', 'userImage' ],
          through: { attributes: [] }
        }
      ]
    });

    if (!users) {
      return next(new Error("Error to create tuple"));
    }

    return res.status(201).json({
      'msg': 'success',
      'data': {
        users: users
      }
    });
  }
  catch (error) {
    return next(error);
  }
};

exports.showProjectFields = async (req, res, next) => {
  try {
    // User Authorization
    const myUserId = parseInt(req.headers.userid, 10);
    if (!myUserId) {
      return next(new Error('No myUserId'));
    }

    const projectId = parseInt(req.params.projectId, 10);
    if (!projectId) {
      return next(new Error('No projectId'));
    }

    const fields = await Models.Project.findAll({
      where: {
        id: projectId
      },
      attributes: [],
      include: [
        {
          model: Models.Skill,
          attributes: [ 'skillName' ],
          through: { attributes: [] }
        },
        {
          model: Models.ProjectField,
          attributes: [ 'projectFieldName' ],
          through: { attributes: [] }
        }
      ]
    });

    if (!fields) {
      return next(new Error("Error to create tuple"));
    }

    return res.status(201).json({
      'msg': 'success',
      'data': {
        'fields': fields
      }
    });
  }
  catch (error) {
    return next(error);
  }
};