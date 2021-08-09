Package.describe({
  name: 'vuejs:vue3',
  version: '0.0.1',
  summary: 'Vue 3 components',
  git: 'https://github.com/meteor-vue/meteor-vue3',
  documentation: 'README.md',
})

Package.registerBuildPlugin({
  name: 'vue3',
  use: [
    'ecmascript@0.15.2',
    'caching-compiler@1.2.2',
    'babel-compiler@7.6.2',
    'tmeasday:check-npm-versions@1.0.2',
  ],
  sources: [
    'src/index.js',
  ],
  npmDependencies: {
    'hash-sum': '2.0.0',
    'source-map': '0.7.3',
  },
})

Npm.depends({
  'launch-editor-middleware': '2.2.1',
})

Package.onUse(function (api) {
  api.versionsFrom('2.3.4')
  api.use('isobuild:compiler-plugin@1.0.0')
  api.use('ecmascript')
  if (process.env.NODE_ENV !== 'production') {
    api.addFiles([
      'src/runtime/server.js',
    ], 'server')
  }
})

Package.onTest(function (api) {
  api.use('ecmascript')
  api.use('tinytest')
  api.use('vuejs:vue3')
  api.mainModule('vue3-tests.js')
})
