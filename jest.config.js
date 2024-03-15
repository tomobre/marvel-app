const nextJest = require('next/jest');

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'jest-environment-jsdom',
};

const createJestConfig = nextJest({
  dir: './',
})(customJestConfig);

module.exports = async () => {
  // Create Next.js jest configuration presets
  const jestConfig = await createJestConfig();

  // Custom `moduleNameMapper` configuration
  const moduleNameMapper = {
    ...jestConfig.moduleNameMapper,
    '^@/(.*)$': '<rootDir>/$1',
  };

  const setupFilesAfterEnv = ['<rootDir>/jest.setup.js'];

  return { ...jestConfig, moduleNameMapper, setupFilesAfterEnv };
};
