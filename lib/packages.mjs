"use strict";

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { dependencies } = require("../package.json");

const packages = {
  "0http": { hasRouter: true, package: "0http", version: "4.2.0" },
  uWebSockets: { version: "20.52.0" },
  "pure-http": { version: "4.0.2" },
  express: { hasRouter: true, version: "5.1.0" },
  fastify: { checked: true, hasRouter: true, version: "5.3.2" },
  polka: { hasRouter: true, version: "0.5.2" },
  polkadot: { hasRouter: false, version: "1.0.0" },
  rayo: { hasRouter: true, version: "1.4.6" },
  vanilla: { hasRouter: false, version: "1.0.1" },
  bun: { hasRouter: false, version: "1.2.12" },
  hono: { hasRouter: false, version: "4.7.9" }
};

const choicesX = [];
Object.keys(packages).forEach((pkg) => {
  if (!packages[pkg].version) {
    const module = dependencies[pkg] ? pkg : packages[pkg].package;
    const version = require(require.resolve(module + "/package.json")).version;
    packages[pkg].version = version;
  }
  choicesX.push(pkg);
});

const choices = choicesX.sort();
const list = (extra = false) => {
  return choices
    .map((c) => {
      return extra === !!packages[c].extra
        ? Object.assign({}, packages[c], { name: c })
        : null;
    })
    .filter((c) => c);
};
const info = (module) => {
  return packages[module];
};

export { choices, list, info };
