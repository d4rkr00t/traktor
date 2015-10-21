'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Messages = (function () {
  function Messages(imports) {
    _classCallCheck(this, Messages);

    this.chalk = imports.chalk;
    this._log = imports.log;
    this._ = imports._;
  }

  Messages.prototype.log = function log(messages) {
    var _this = this;

    this._.compact(messages).map(function (m) {
      _this._log(m);
    });
  };

  Messages.prototype.setupNeeded = function setupNeeded() {
    return 'Need setup!';
  };

  Messages.prototype.setupKeyAlreadyExists = function setupKeyAlreadyExists() {
    return 'Setup key already exists!';
  };

  Messages.prototype.setupKeyCompleted = function setupKeyCompleted() {
    return 'Setup key completed!';
  };

  Messages.prototype.setupHelp = function setupHelp() {
    return 'Setup help';
  };

  return Messages;
})();

exports['default'] = Messages;
module.exports = exports['default'];
