import { compact } from 'lodash';

const COMMON_URL = 'https://translate.yandex.net/api/v1.5/tr.json/';
const TRANSLATE_API = COMMON_URL + 'translate';
const DETECT_API = COMMON_URL + 'detect';

export default class YandexTranslateApi {
  constructor(imports) {
    this.request = imports.request;
  }

  detect(key, text) {
    return this.request.get(DETECT_API, {
      params: { text, key }
    }).then(res => res.data.lang);
  }

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
