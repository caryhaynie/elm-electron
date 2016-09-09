const copydir = require("copy-dir");
const eol = require("os").EOL;
const exec = require("child_process").execSync;
const pkg_json = require("./package.json");

const APP_DIR = `${__dirname}/app`;
const BUILD_DIR = `${__dirname}/build`;

// copy ./app/* to ./build/*
copydir.sync(APP_DIR, BUILD_DIR);

// run the "elm:build" npm script.
try {
    exec(pkg_json.scripts["elm:build"]);
    console.log("Deploy succeeded!");
} catch (err) {
    console.error("Deploy *FAILED* during 'elm:build'!");
    console.error(eol);
    console.error("Error log from command:");
    console.error(eol);
    console.error(err);
}

