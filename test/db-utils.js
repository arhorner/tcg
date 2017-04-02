const { execSync } = require('child_process');
const db = require('../app/models');

const tables = Object.values(db.sequelize.models).map(model => {
  return model.tableName;
});

const clean = async () => {
  await db.sequelize.query(`TRUNCATE TABLE ${tables.join(',')}`);
};

const seed = () => {
  execSync('npm-run sequelize db:seed:all');
};

const resetData = async () => {
  await clean();
  seed();
};

module.exports = {
  clean,
  seed,
  resetData
};
