import { get, compact, pluck, isEmpty } from 'lodash';

export default function dictFormatter(data, opts, imports) {
  const { chalk, messages, indentString } = imports;
  const indent = (str, count) => indentString(str, ' ', count ? count + 9 : 9);
  const rows = [
    transcription(chalk, indent, data),
    partsOfSpeach(chalk, indent, data)
  ];

  return messages.log(compact(rows).join('\n'));
}

/**
 *
 * Sections
 *
 */

export function transcription(chalk, indent, data) {
  const ts = get(data, '0.ts');

  if (!ts) return;

  return indent(chalk.grey(`[${ts}]`));
}

export function partsOfSpeach(chalk, indent, data) {
  return compact(data.map(part => {
    const title = indent(chalk.green(part.pos));
    const trs = part.tr.map(formatTrs.bind(null, chalk, indent)).join('\n');

    return [title, trs].join('\n');
  })).join('\n');
}

/**
 *
 * Sections helpers
 *
 */

export function formatTextAndGender(chalk, text, gen) {
  return text + chalk.grey(gen ? ` ${gen}` : '');
}

export function formatTrsTitles(chalk, indent, tr, index) {
  const title = [];

  index = (index + 1) + '. ';

  title.push(formatTextAndGender(chalk, tr.text, tr.gen));

  if (tr.syn) {
    tr.syn.forEach(syn => title.push(formatTextAndGender(chalk, syn.text, syn.gen)));
  }

  return indent(index + title.join(', '), 3);
}

export function formatTrsMean(chalk, indent, tr) {
  const mean = pluck(tr.mean, 'text');

  if (isEmpty(mean)) return;

  return indent(chalk.dim.yellow('(' + mean.join(', ') + ')'), 6);
}

export function formatTrs(chalk, indent, tr, index) {
  const title = formatTrsTitles(chalk, indent, tr, index);
  const mean = formatTrsMean(chalk, indent, tr);

  return compact([title, mean]).join('\n');
}
