'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
      },
      home_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
      //   references: { // FK refecencia 
      //     model: 'team', // a model teams
      //     key: 'id' // na sua PK
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE'
      },
      home_team_goals: {
        type: Sequelize.INTEGER,
        defaultValue: true,
        allowNull: false,
      },
      away_team: {
        type: Sequelize.INTEGER,
        allowNull: false,
      //   references: { // FK refecencia 
      //     model: 'team', // a model teams
      //     key: 'id' // na sua PK
      //   },
      //   onUpdate: 'CASCADE',
      //   onDelete: 'CASCADE'
      },
      away_team_goals: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: true,
      },
      in_progress: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    });  
  },



  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('matches');
  }
};
