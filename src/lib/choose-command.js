export default function chooseCommands(flags, opts, commands) {
  return commands.filter(command => command.check(flags, opts));
}
