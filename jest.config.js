module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "!src/**/stories.tsx",
    "!src/**/*.stories.tsx",
    "!src/**/index.ts",
    "!src/styles/**",
    "!src/models/**",
    "!src/types/**",
    "!src/pages/**",
    "!**/node_modules/**",
  ],
  moduleDirectories: ["node_modules", "src"],
  moduleNameMapper: {
    "^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$":
      "<rootDir>/mocks/jest/fileMock.js",
    "\\.(css|less|sass|scss)$": "<rootDir>/mocks/jest/styleMock.js",
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@services(.*)$": "<rootDir>/src/services$1",
    "^@models(.*)$": "<rootDir>/src/models$1",
    "^@styles(.*)$": "<rootDir>/src/styles$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
};
