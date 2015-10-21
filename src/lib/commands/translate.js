import { compact } from 'lodash';

const API = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

export default {
  name: 'translate',
  pos: 10,

  run(opts, imports) {
    const { text, dest, src, apiKey: key } = opts;
    const {
      request,
      formatters: { translate }
    } = imports;

    return request.get(API, {
      params: {
        key,
        text,
        lang: compact([src, dest]).join('-')
      }
    })
    .then(res => res.data)
    .then(data => translate(data, opts, imports));
  },

  check(flags, opts) {
    if (!opts.apiKey) return false;
    if (!opts.text) return false;
    if (flags.setup) return false;

    return true;
  }
};
