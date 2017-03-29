module.exports = (Sequelize, Types) => {
  return Sequelize.define('card', {
    card_id: {
      type: Types.INTEGER
    },
    name: {
      type: Types.STRING
    }
  }, {
    timestamps: false
  });
};
