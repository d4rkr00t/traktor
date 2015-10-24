import detectLang from '../src/lib/commands/detect-lang';
import dict from '../src/lib/commands/dict';
import setup from '../src/lib/commands/setup';
import translate from '../src/lib/commands/translate';

describe('traktor/commands', () => {
  describe('detectLang#check', () => {
    it('should return false if there is no yt_key in opts', () => assert.isFalse(detectLang.check({}, {})));

    it('should return false if there is no text in opts', () => assert.isFalse(detectLang.check({}, { yt_key: 1 })));

    it('should return false if there is setup flag', () =>
      assert.isFalse(detectLang.check({ setup: true }, { yt_key: 1, text: 1 }))
    );

    it('should return true', () => assert.isTrue(detectLang.check({}, { yt_key: 1, text: 1 })));
  });

  describe('translate#check', () => {
    it('should return false if there is no yt_key in opts', () => assert.isFalse(translate.check({}, {})));

    it('should return false if there is no text in opts', () => assert.isFalse(translate.check({}, { yt_key: 1 })));

    it('should return false if there is setup flag', () =>
      assert.isFalse(translate.check({ setup: true }, { yt_key: 1, text: 1 }))
    );

    it('should return true', () => assert.isTrue(translate.check({}, { yt_key: 1, text: 1 })));
  });

  describe('dict#check', () => {
    it('should return false if there is no yd_key in opts', () => assert.isFalse(dict.check({}, {})));

    it('should return false if there is no text in opts', () => assert.isFalse(dict.check({}, { yd_key: 1 })));

    it('should return false if there is setup flag', () =>
      assert.isFalse(dict.check({ setup: true }, { yt_key: 1, text: 1 }))
    );

    it('should return true', () => assert.isTrue(dict.check({}, { yd_key: 1, text: 1 })));
  });

  describe('setup#check', () => {
    it('should return true if there is setup flag', () => assert.isTrue(setup.check({ setup: true }, {})));

    it('should return false if there is  no setup flag', () => assert.isTrue(setup.check({ setup: false }, {})));
  });
});
