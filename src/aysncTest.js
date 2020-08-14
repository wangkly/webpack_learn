"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

require("regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var asyncFunc = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    var reuslt;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              setTimeout(function () {
                resolve(111);
              }, 1000);
            });

          case 2:
            reuslt = _context.sent;
            console.log('result===>', reuslt);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function asyncFunc() {
    return _ref.apply(this, arguments);
  };
}();

asyncFunc();
