const collection = require('./collection');
const clone = require('./clone');
const pull = require('./pull');
const build = require('./build');
const run = require('./run');
const stop = require('./stop');
const cd = require('./cd');
const createNetwork = require('./createNetwork');
const startExternal = require('./startExternal');
const kns = require('./kns');
const klogs = require('./klogs');
const help = require('./help');
const installDependencies = require('./installDependencies');
const runDatabaseMigration = require('./runDatabaseMigration');

const operations = {
  clone,
  pull,
  build,
  run,
  stop,
  cd,
  createNetwork,
  startExternal,
  kns,
  klogs,
  c: collection,
  collection,
  install: installDependencies,
  i: installDependencies,
  runDatabaseMigration,
  '-h': help,
  help,
  init: (context) => {
    clone(context);
    createNetwork(context);
    installDependencies(context),
    runDatabaseMigration(context),
    build(context, 'all');
  },
};

module.exports = operations;
