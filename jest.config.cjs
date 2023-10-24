module.exports = {
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["./src/tests/setup.js"],
  moduleNameMapper: {
     "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  }
};
