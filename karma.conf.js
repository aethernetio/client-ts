module.exports = function(config) {
  config.set({
    frameworks: ['mocha'],
    files: [
      'build/test-bundles/test-bundle.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    customLaunchers: {
      // Можно переименовать для ясности, например, в 'YandexVisible'
      YandexVisible: {
        // --- ВОТ ИЗМЕНЕНИЕ ---
        base: 'Chrome', // БЫЛО: 'ChromeHeadless'
        // --- КОНЕЦ ИЗМЕНЕНИЯ ---

        binary: '/usr/bin/yandex-browser',
        flags: ['--no-sandbox']
      }
    },

    // Убедитесь, что здесь используется новое имя
    browsers: ['YandexVisible'],

    autoWatch: false,
    singleRun: true,
    browserNoActivityTimeout: 100000
  });
};