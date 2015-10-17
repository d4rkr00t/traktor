export default class Messages {
  constructor(imports) {
    this.chalk = imports.chalk;
    this._log = imports.log;
    this._ = imports._;
  }

  log(messages) {
    this._.compact(messages).map(m => this._log(m));
  }

  setupNeeded() {
    return `Need setup!`;
  }

  setupKeyAlreadyExists() {
    return `Setup key already exists!`;
  }

  setupKeyCompleted() {
    return `Setup key completed!`;
  }

  setupHelp() {
    return 'Setup help';
  }
}
