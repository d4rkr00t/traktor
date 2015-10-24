export default function chooseCommands(flags, opts, commands) {
  return commands
    .filter(command => command.check(flags, opts))
    .sort((ca, cb) => ca.pos > cb.pos ? 1 : ca.pos < cb.pos ? -1 : 0); // eslint-disable-line
}
