const { ModuleFederationPlugin } = require("webpack").container;
const appPackageJson = require('./package.json');
let mono = require('./mono.json');

mono = mono['mfe'];
const deps = appPackageJson.dependencies;

module.exports = {
  output: {
    uniqueName: mono.name,
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: mono.name,
      filename: "remoteEntry.js",
      exposes: mono.widgets,

      shared: {
        ...deps,
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
        "@mono/api": { singleton: true, strictVersion: false },
      },
    }),
  ],
};
