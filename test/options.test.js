import { destLng, srcLng } from '../src/lib/options';

describe('traktor/options', () => {
  describe('#destLng', () => {
    it('should return en for flags.en', () => {
      assert.equal(destLng({ en: true }), 'en');
    });

    it('should return ru for flags.ru', () => {
      assert.equal(destLng({ ru: true }), 'ru');
    });

    it('should return flags.dest', () => {
      assert.equal(destLng({ dest: 'ru' }), 'ru');
    });

    it('should return conf.dest', () => {
      assert.equal(destLng({}, { dest: 'en' }), 'en');
    });

    it('should return ru by default', () => {
      assert.equal(destLng({}, {}), 'ru');
    });
  });

  describe('#srcLng', () => {
    it('should return flags.source', () => {
      assert.equal(srcLng({ source: 'ru' }), 'ru');
    });

    it('should return empty string without flags.source', () => {
      assert.equal(srcLng({}), '');
    });
  });
});
