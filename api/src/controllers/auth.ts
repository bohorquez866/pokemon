const { generateAccessToken } = require("../utils/jwt");

export const generateToken = (_, res) => {
  const token = generateAccessToken();

  res.header("authorization", token);
  res.json({ message: "token generated succesfully", token });
};
