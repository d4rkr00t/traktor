import { constant, identity } from 'lodash';
import path from 'path';

import { read, bootstrap, write } from '../src/lib/config';

describe('traktor/config', () => {
  const accessNoError = (p, cb) => cb();
  const accessError = (p, cb) => cb(new Error());

  let imports;

  beforeEach(() => {
    imports = {
      homedir: constant('/user/sysoev'),
      fs: {
        access: accessNoError,
        writeFileSync(...args) {
          return args;
        }
      },
      require: identity,
      path
    };
  });

  describe('#read', () => {
    it('should read config if file exists', done => {
      read(imports)
        .then(cfg => {
          assert.equal(cfg, '/user/sysoev/.traktor.json');
          done();
        });
    });

    it('should return empty object if there is no configuration file', done => {
      imports.fs.access = accessError;

      read(imports)
        .then(cfg => {
          assert.deepEqual(cfg, {});

          done();
        });
    });
  });

  describe('#bootstrap', () => {
    it('should bootstrap .traktor.json', () => {
      const result = bootstrap(imports);

      assert.equal(result[0], '/user/sysoev/.traktor.json');
      assert.equal(result[1], '{\n  "yt_key": "",\n  "yd_key": ""\n}');
    });
  });

  describe('#write', () => {
    const oldCfg = {
      yt_key: 1,
      dest: 'en'
    };
    const newCfg = {
      yt_key: 2,
      yd_key: 3
    };

    beforeEach(() => {
      imports.require = constant(oldCfg);
    });

    it('should write new config to file', done => {
      write({}, imports)
        .then(result => {
          assert.equal(result[0], '/user/sysoev/.traktor.json');
          assert.equal(result[1], '{\n  "yt_key": 1,\n  "dest": "en"\n}');
          done();
        });
    });

    it('should merge old config and new', done => {
      write(newCfg, imports)
        .then(result => {
          assert.equal(result[1], '{\n  "yt_key": 2,\n  "dest": "en",\n  "yd_key": 3\n}');
          done();
        });
    });
  });
});
