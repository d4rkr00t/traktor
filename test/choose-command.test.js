import chooseCommands from '../src/lib/choose-command';
import { constant, pluck } from 'lodash';

describe('traktor/choose-command', () => {
  const commands = [
    { check: constant(true), pos: 30 },
    { check: constant(true), pos: 10 },
    { check: constant(false), pos: 20 },
    { check: constant(true), pos: 40 },
    { check: constant(true), pos: 40 },
    { check: constant(false), pos: 100 },
    { check: constant(true), pos: 0 }
  ];
  const expect = [0, 10, 30, 40, 40];

  it('should return suitable commands in correct order', () => {
    assert.deepEqual(pluck(chooseCommands({}, {}, commands), 'pos'), expect);
  });
});
