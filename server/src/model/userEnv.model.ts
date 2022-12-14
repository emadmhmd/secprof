import { DataTypes, Sequelize } from 'sequelize';

const userEnv = (db: Sequelize) => db.define('UserEnv', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  ip: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  user_agent: {
    type: DataTypes.STRING,
  },
  os: {
    type: DataTypes.STRING,
  },
  platform: {
    type: DataTypes.STRING,
  },
  continent_name: {
    type: DataTypes.STRING,
  },
  continent_code: {
    type: DataTypes.STRING,
  },
  country_name: {
    type: DataTypes.STRING,
  },
  country_code: {
    type: DataTypes.STRING,
  },
  region_name: {
    type: DataTypes.STRING,
  },
  region_code: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  zip: {
    type: DataTypes.STRING,
  },
}, {
  freezeTableName: true,
  timestamps: false,
  createdAt: false,
  updatedAt: false,
});

export default userEnv;
