"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise = require('es6-promise');
var fetch = require('fetch-ponyfill')(Promise).fetch;
if (typeof global.Promise === 'undefined') {
    global.Promise = Promise;
}
var fetchCsv = function (postCodeFront) {
    return fetch("https://ken-all.numb86.net/csv/" + postCodeFront + ".csv");
};
exports.default = fetchCsv;
//# sourceMappingURL=fetchCsv.js.map