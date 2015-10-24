'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _lodash = require('lodash');

var COMMON_URL = 'https://translate.yandex.net/api/v1.5/tr.json/';
var TRANSLATE_API = COMMON_URL + 'translate';
var DETECT_API = COMMON_URL + 'detect';

/**
 *
 * Wrapper for Yandex Translate Api
 *
 */

var YandexTranslateApi = (function () {
  function YandexTranslateApi(imports) {
    _classCallCheck(this, YandexTranslateApi);

    this.request = imports.request;
  }

  /**
   * Detect source language of passed text.
   *
   * @param {String} key - api key
   * @param {String} text
   *
   * @returns {Promise}
   */

  YandexTranslateApi.prototype.detect = function detect(key, text) {
    return this.request.get(DETECT_API, {
      params: { text: text, key: key }
    }).then(function (res) {
      return res.data.lang;
    });
  };

  /**
   * Translate given text.
   *
   * @param {String} key - api key
   * @param {String} text
   * @param {String} dest
   * @param {String} src
   *
   * @returns {Promise}
   */

  YandexTranslateApi.prototype.translate = function translate(key, text, dest, src) {
    return this.request.get(TRANSLATE_API, {
      params: {
        text: text,
        key: key,
        lang: _lodash.compact([src, dest]).join('-')
      }
    }).then(function (res) {
      return res.data;
    });
  };

  return YandexTranslateApi;
})();

exports['default'] = YandexTranslateApi;
module.exports = exports['default'];