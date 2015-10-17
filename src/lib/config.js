export default function config(name, imports) {
  const { homedir, path, fs } = imports;
  const cfgPath = path.join(homedir(), name);

  console.log(cfgPath);
}
