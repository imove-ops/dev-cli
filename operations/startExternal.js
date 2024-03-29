const shell = require('shelljs');

module.exports = (context, container) => {
  const run = [];
  if (container) {
    if (context.external[container]) {
      run.push(Object.assign({}, context.external[container], { name: container }));
    } else {
      console.error(`Could not find container matching ${container}`);
      return;
    }
  } else {
    Object.keys(context.external).forEach((c) => run.push(Object.assign({}, context.external[c], { name: c })));
  }

  run.forEach((config) => {
    const cmd = `docker run -d ${config.port ? '-p ' + config.port : ''} ${config.volume ? '-v ' + context.root + '/' + config.volume : ''} --network ${context.name} --name ${config.name} ${config.image}`;
    shell.echo(cmd)
    shell.exec(cmd);
  });
};