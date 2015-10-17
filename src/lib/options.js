/**
 * Choose destination language.
 *
 * @param {Object} flags
 * @param {Object} conf
 *
 * @returns {String}
 */
export default function destLng(flags, conf) {
  const { en, ru, dest } = flags;

  if (en) return 'en';
  if (ru) return 'ru';
  if (dest) return dest;

  return conf.dest || 'ru';
}

/**
 * Choose source language.
 *
 * @param {Object} flags
 *
 * @returns {String}
 */
export default function srcLng(flags) {
  return flags.source || '';
}

/**
 * Make options for translation.
 *
 * @param {Array} input
 * @param {Object} flags
 * @param {Object} conf
 *
 * @returns {Object}
 */
export default function options(input, flags, conf) {
  return {
    text: input.join(' '),
    dest: destLng(flags, conf),
    source: srcLng(flags),
    apiKey: conf.apiKey
  };
}
