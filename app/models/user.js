module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 100],
            msg: 'Name length should be less than or equal to 100'
          }
        }
      },
      mobile_no: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [0, 15],
            msg: 'Mobile number length should be less than or equal to 15'
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 255],
            msg: 'Email length should be less than or equal to 255'
          }
        }
      },
      otp: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { args: [true], msg: 'OTP should be an Integer' }
        }
      },
      otp_counter: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { args: [true], msg: 'OTP counter should be an Integer' }
        }
      },
      is_otp_verified: {
        type: DataTypes.BOOLEAN
      },
      last_otp_verified_at: {
        type: DataTypes.DATETIME
      },
      otp_secret_key: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 100],
            msg: 'OTP Secret key length should be less than or equal to 100'
          }
        }
      },
      resent_otp_counter: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { args: [true], msg: 'Resent OTP counter should be an Integer' }
        }
      },
      can_reset_resent_otp_counter: {
        type: DataTypes.BOOLEAN
      },
      last_otp_sent_at: {
        type: DataTypes.DATETIME
      },
      sign_in_count: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: { args: [true], msg: 'Sign in count should be an Integer' }
        }
      },
      current_sign_in_at: {
        type: DataTypes.DATETIME
      },
      last_sign_in_at: {
        type: DataTypes.DATETIME
      },
      current_sign_in_ip: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 30],
            msg: 'Current sign in IP length should be less than or equal to 30'
          }
        }
      },
      last_sign_in_ip: {
        type: DataTypes.STRING,
        validate: {
          len: {
            args: [0, 30],
            msg: 'Last sign in IP length should be less than or equal to 30'
          }
        }
      }
    },
    {
      underscored: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  );
  return User;
};
