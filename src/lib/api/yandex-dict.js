import { compact } from 'lodash';

const API = 'https://dictionary.yandex.net/api/v1/dicservice.json/lookup';

export default class YandexDictApi {
  constructor(imports) {
    this.request = imports.request;
  }

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
