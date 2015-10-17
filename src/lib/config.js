const CFG_NAME = '.traktor.json';

export function getCfgPath(imports) {
  const { homedir, path } = imports;

  return path.join(homedir(), CFG_NAME);
}

/**
 * Read configuration file from user home dir.
 *
 * @param {Object} imports
 *
 * @returns {Object}
 */
export function read(imports) {
  const { fs } = imports;
  const cfgPath = getCfgPath(imports);

  try {
    fs.accessSync(cfgPath);

    return require(cfgPath);
  } catch (e) {
    return {};
  }
}

export function write(opts, imports) {
  const { fs } = imports;
  const config = read(imports);
  const updatedConfig = Object.assign(config, opts);
  const cfgPath = getCfgPath(imports);

  fs.writeFileSync(cfgPath, JSON.stringify(updatedConfig, ' ', 2));
}
