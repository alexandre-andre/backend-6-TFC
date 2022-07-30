module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      home_team: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        // field: 'home_team',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      home_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // field: 'home_team_goals'
      },
      away_team: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        // field: 'away_team',
        references: {
          model: 'teams',
          key: 'id',
        }
      },
      away_team_goals: {
        allowNull: false,
        type: Sequelize.INTEGER,
        // field: 'away_team_goals'
      },
      in_progress: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        // field: 'in_progress'
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('matches');
  }, 
}