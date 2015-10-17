export default function destLng(flags) {
  const { en, ru, dest } = flags;

  if (en) return 'en';
  if (ru) return 'ru';
  if (dest) return dest;

  return 'ru';
}

export default function srcLng(flags) {
  return flags.source || '';
}

export default function options(input, flags) {
  return {
    text: input.join(' '),
    dest: destLng(flags),
    source: srcLng(flags)
  };
}
