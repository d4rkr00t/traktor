export default function normalizeFlags(flags) {
  flags.dest = flags.dest || flags.d;
  flags.source = flags.source || flags.s;

  return flags;
}
