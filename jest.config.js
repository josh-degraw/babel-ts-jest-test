module.exports = {
  testEnvironment: "node",
  transformIgnorePatterns: ["\\.pnp\\.[^\\/]+$"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};
