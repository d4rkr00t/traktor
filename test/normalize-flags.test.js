import normalizeFlags from '../src/lib/normalize-flags';

describe('traktor/normalize-flags', () => {
  it('should return dest and source', () => {
    const flags = { dest: 'ru', source: 'en' };

    assert.equal(normalizeFlags(flags), flags);
  });

  it('should update dest and source from their short versions d and s if there aren`t long versions', () => {
    const flags = { dest: null, source: '', d: 'en', s: 'ru' };

    assert.deepEqual(normalizeFlags(flags), { dest: 'en', d: 'en', source: 'ru', s: 'ru' });
  });
});
