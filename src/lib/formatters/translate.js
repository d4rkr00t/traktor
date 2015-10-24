/**
 * Message formatter for Yandex.Translator api response data.
 *
 * @param {Object} data
 * @param {Object} opts
 * @param {Object} imports
 *
 * @returns {undefined}
 */
export default function translateFormatter(data, opts, imports) {
  const { chalk, messages } = imports;
  const { text: result, lang } = data;
  const { text: orig } = opts;

  return messages.log(chalk.grey(`[${lang}]  `) + chalk.cyan(orig) + '  →  ' + chalk.bold.green(result));
}
