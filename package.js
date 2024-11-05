Package.describe({
  name: 'mrspark:data-lookup',
  summary: "Reactively lookup a field in the object",
  version: '1.0.0',
  git: 'https://github.com/peerlibrary/meteor-data-lookup.git'
});

Package.onUse(function (api) {
  api.versionsFrom('3.0.4');

  // Core dependencies.
  api.use([
    'coffeescript@2.7.0',
    'ecmascript',
    'underscore',
    'tracker'
  ]);

  // 3rd party dependencies.
  api.use([
    'mrspark:computed-field@1.0.0'
  ]);

  api.export('DataLookup');

  api.mainModule('lib.coffee');
});

Package.onTest(function (api) {
  api.versionsFrom('3.0.4');

  // Core dependencies.
  api.use([
    'coffeescript@2.7.0',
    'ecmascript',
    'random',
    'underscore',
    'reactive-var'
  ]);

  // Internal dependencies.
  api.use([
    'mrspark:data-lookup'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:classy-test@0.4.0',
    'peerlibrary:server-autorun@0.8.0'
  ]);

  api.addFiles([
    'tests.coffee'
  ]);
});
