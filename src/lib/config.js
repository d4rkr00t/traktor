const CFG_NAME = '.traktor.json';
const CONFIG_BOOTSTRAP = {
  yt_key: '',
  yd_key: ''
};

/**
 * Returns path to tarktor config.
 *
 * @param {Object} imports
 *
 * @returns {String}
 */
export function getCfgPath(imports) {
  const { homedir, path } = imports;

  return path.join(homedir(), CFG_NAME);
}

/**
 * Read configuration file from user home dir.
 *
 * @param {Object} imports
 *
 * @returns {Promise}
 */
export function read(imports) {
  const { fs, require } = imports;
  const cfgPath = getCfgPath(imports);

  return new Promise(resolve => {
    fs.access(cfgPath, err => {
      if (err) {
        resolve({});
        return;
      }

      resolve(require(cfgPath));
    });
  });
}

export function write(opts, imports) {
  const { fs } = imports;

  return read(imports)
    .then(config => {
      const updatedConfig = Object.assign(config, opts);
      const cfgPath = getCfgPath(imports);

      return fs.writeFileSync(cfgPath, JSON.stringify(updatedConfig, ' ', 2));
    });
}

export function bootstrap(imports) {
  const { fs } = imports;
  const cfgPath = getCfgPath(imports);

  return fs.writeFileSync(cfgPath, JSON.stringify(CONFIG_BOOTSTRAP, ' ', 2));
}
