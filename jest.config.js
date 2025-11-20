module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    // Эта секция говорит ts-jest использовать специальный конфиг
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json'
      }
    ]
  }
};