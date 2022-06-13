'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isPromise(maybePromise) {
    return maybePromise && typeof maybePromise === "object" && typeof maybePromise.then === "function";
}

exports.isPromise = isPromise;
exports.wait = wait;
//# sourceMappingURL=promiseUtils.js.map
