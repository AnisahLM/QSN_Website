const conn = require("./conn");
const User = require("./User");
const Product = require("./Product");

const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [moe, lucy, larry, ethyl] = await Promise.all([
    User.create({ username: "moe", password: "123" }),
    User.create({ username: "lucy", password: "123" }),
    User.create({ username: "larry", password: "123" }),
    User.create({ username: "ethyl", password: "123" }),
  ]);
  const [shea, mango, coconut, jojoba, lavender, eucalyptus] =
    await Promise.all([
      Product.create({ name: "shea", type: "butter" }),
      Product.create({ name: "mango", type: "butter" }),
      Product.create({ name: "coconut", type: "carrier oil" }),
      Product.create({ name: "jojoba", type: "carrier oil" }),
      Product.create({ name: "lavender", type: "essential oil" }),
      Product.create({ name: "eucalyptus", type: "essential oil" }),
    ]);

  return {
    users: {
      moe,
      lucy,
      larry,
      ethyl,
    },
    products: {
      shea,
      mango,
      coconut,
      jojoba,
      lavender,
      eucalyptus,
    },
  };
};

module.exports = {
  syncAndSeed,
  User,
  Product,
};
