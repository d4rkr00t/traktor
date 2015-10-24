import { compact } from 'lodash';

const COMMON_URL = 'https://translate.yandex.net/api/v1.5/tr.json/';
const TRANSLATE_API = COMMON_URL + 'translate';
const DETECT_API = COMMON_URL + 'detect';

/**
 *
 * Wrapper for Yandex Translate Api
 *
 */
export default class YandexTranslateApi {
  constructor(imports) {
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
  detect(key, text) {
    return this.request.get(DETECT_API, {
      params: { text, key }
    }).then(res => res.data.lang);
  }

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
  translate(key, text, dest, src) {
    return this.request.get(TRANSLATE_API, {
      params: {
        text,
        key: key,
        lang: compact([src, dest]).join('-')
      }
    }).then(res => res.data);
  }
}
