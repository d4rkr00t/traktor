/**
 * Read configuration file from user home dir.
 *
 * @param {String} name - config file name.
 * @param {Object} imports
 *
 * @returns {Object}
 */
export default function config(name, imports) {
  const { homedir, path, fs } = imports;
  const cfgPath = path.join(homedir(), name);

  try {
    fs.accessSync(cfgPath);

    return require(cfgPath);
  } catch (e) {
    return {};
  }
}
