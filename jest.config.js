const SECOND = 1000;
const MINUTE = 60 * SECOND;
const newTimeout = 2 * MINUTE;

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  testTimeout: newTimeout
};
