'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var API = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';

/**
 *
 * Wrapper for Yandex Dictionary Api
 *
 */

var YandexDictApi = (function () {
  function YandexDictApi(imports) {
    _classCallCheck(this, YandexDictApi);

    this.request = imports.request;
  }

  /**
   * Get text definition from Yandex Dictionary.
   *
   * @param {String} key - api key
   * @param {String} text
   * @param {String} dest
   * @param {String} src
   *
   * @returns {Promise}
   */

  YandexDictApi.prototype.lookup = function lookup(key, text, dest, src) {
    return this.request.get(API, {
      params: {
        text: text,
        key: key,
        lang: _lodash.compact([src, dest]).join('-')
      }
    }).then(function (res) {
      return res.data.def;
    });
  };

  return YandexDictApi;
})();

exports['default'] = YandexDictApi;
module.exports = exports['default'];