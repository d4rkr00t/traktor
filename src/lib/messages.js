export default class Messages {
  constructor(imports) {
    this._chalk = imports.chalk;
    this._log = imports.log;
  }

  log(message) {
    return this._log(message);
  }

  setupRequired() {
    const message = this._chalk.red(`Hi! It seems like you don't have any api keys in your '~/.traktor.json'!\n`)
    + `Don't worry you just have to do a little configuration work in the beginning.\n`;

    this._log(message);
  }

  setupOptional() {
    const message = `Hi! You've already had required setup, but you don't have Dictionary API — if you do you will get more verbose translation output.\n`;

    this._log(message);
  }

  setupCompleted() {
    this._log(this._chalk.bold.green(`Setup completed!`));
  }

  setupHelp() {
    const message = `To get api keys go to ` + this._chalk.green('https://tech.yandex.com/')
    + ` and make your own free api keys:
  - ${this._chalk.cyan('[yt_key]')} Translator API Key — `
    + this._chalk.green('https://tech.yandex.com/translate/') + this._chalk.red(` (required)`) + `
  - ${this._chalk.cyan('[yd_key]')} Dictionary API Key — `
    + this._chalk.green('https://tech.yandex.com/dictionary/')
    + this._chalk.grey(` — if you want to get not just translations but more information about word like synonims, more than one translation etc.`) + `

To finish setup just add keys into corresponding fields in ${this._chalk.yellow('~/.traktor.json')} which was already bootstrapped.`;

    this._log(message);
  }
}
