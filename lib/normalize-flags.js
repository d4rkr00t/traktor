/**
 * Normalizes flags consider short flags versions if there are no long ones.
 *
 * @param {Object} flags
 *
 * @returns {Object}
 */
"use strict";

exports.__esModule = true;
exports["default"] = normalizeFlags;

function normalizeFlags(flags) {
  flags.dest = flags.dest || flags.d;
  flags.source = flags.source || flags.s;

  return flags;
}

module.exports = exports["default"];