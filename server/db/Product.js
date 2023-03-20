const conn = require("./conn");
const { STRING, UUID, UUIDV4, TEXT, ENUM } = conn.Sequelize;

const Product = conn.define('product', {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4
  },
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  type: {
    type: ENUM('butter', 'essential oil', 'carrier oil'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: TEXT
  }
});

module.exports = Product;