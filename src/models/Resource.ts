import { Model, DataTypes } from 'sequelize';
import sequelize from './db';

class Resource extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
}

Resource.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Resource',
  }
);

export default Resource;
