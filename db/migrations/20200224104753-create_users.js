module.exports = {
  up: (queryInterface, Sequelize) => queryInterface
    .createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      name: {
        type: Sequelize.STRING(100),
        defaultValue: ''
      },
      mobile_no: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING(255),
        defaultValue: ''
      },
      otp: {
        type: Sequelize.INTEGER
      },
      otp_counter: {
        type: Sequelize.INTEGER
      },
      is_otp_verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      last_otp_verified_at: {
        type: Sequelize.DATETIME
      },
      otp_secret_key: {
        type: Sequelize.STRING(100)
      },
      resent_otp_counter: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      can_reset_resent_otp_counter: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      last_otp_sent_at: {
        type: Sequelize.DATETIME
      },
      sign_in_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      current_sign_in_at: {
        type: Sequelize.DATETIME
      },
      last_sign_in_at: {
        type: Sequelize.DATETIME
      },
      current_sign_in_ip: {
        type: Sequelize.STRING(30)
      },
      last_sign_in_ip: {
        type: Sequelize.STRING(30)
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => queryInterface.addIndex('users', ['mobile_no'])),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('users')
};
