import { compact } from 'lodash';

const API = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';

/**
 *
 * Wrapper for Yandex Dictionary Api
 *
 */
export default class YandexDictApi {
  constructor(imports) {
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
  lookup(key, text, dest, src) {
    return this.request.get(API, {
      params: {
        text,
        key: key,
        lang: compact([src, dest]).join('-')
      }
    }).then(res => res.data.def);
  }
}
