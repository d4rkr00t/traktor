export default function translateFormatter(data, opts, imports) {
  const { chalk } = imports;
  const { text: result, lang } = data;
  const { text: orig } = opts;

  return chalk.grey(`[${lang}]  `) + chalk.cyan(orig) + '  →  ' + chalk.bold.green(result);
}
