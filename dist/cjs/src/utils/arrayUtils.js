'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function distinctBy(array, key) {
    const map = new Map(array.map(item => [item[key], item]));
    return Array.from(map.values());
}
function join(array, separator = ", ", lastSeparator = ",") {
    const [lastElement, ...otherElements] = array.slice(0).reverse();
    return `${otherElements.join(separator)}${otherElements.length ? lastSeparator : ""}${lastElement}`;
}

exports.distinctBy = distinctBy;
exports.join = join;
//# sourceMappingURL=arrayUtils.js.map
