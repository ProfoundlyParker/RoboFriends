module.exports = {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["./setupTests.js"],
    snapshotSerializers: ["enzyme-to-json/serializer"],
    transform: {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
};  