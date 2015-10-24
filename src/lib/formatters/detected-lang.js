/**
 * Message formatter for detect lang command results.
 *
 * @param {String} lang
 * @param {Object} opts
 * @param {Object} imports
 *
 * @returns {undefined}
 */
export default function detectedLangFormatter(lang, opts, imports) {
  const { chalk, messages } = imports;

  return messages.log(chalk.grey(`source:  `) + lang);
}
