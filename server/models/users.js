export default (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.TEXT
  }, {
    classMethods: {
      associate(models) {

      }
    }
  });

  return Users;
};
