'use strict';

module.exports = {
  displayName: 'test',
  modulePaths: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src'],
  coverageDirectory: '<rootDir>/test-coverage',
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  testMatch: ['**/?(*.)+(spec|test).[jt]s?(x)'],
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  testPathIgnorePatterns: ['/node_modules/'],
};
