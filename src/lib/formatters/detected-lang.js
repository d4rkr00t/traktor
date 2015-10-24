export default function detectedLangFormatter(lang, opts, imports) {
  const { chalk, messages } = imports;

  return messages.log(chalk.grey(`source:  `) + lang);
}
