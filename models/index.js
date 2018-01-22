const FS = require('fs');
const Path = require('path');

const models = {};

FS.readdirSync(__dirname)
  .filter(fileName => fileName !== 'index.js')
  .forEach((fileName) => {
    const model = require(Path.join(__dirname, fileName));
    models[model.name] = model;
  });

for (const modelName in models) {
  const model = models[modelName];
  const hasAssociations = (typeof model.association === 'function');

  if (hasAssociations) {
    model.associate(models);
  }
}

module.exports = models;
