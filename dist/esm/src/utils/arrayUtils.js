// eslint-disable-next-line @typescript-eslint/no-explicit-any
function distinctBy(array, key) {
    const map = new Map(array.map(item => [item[key], item]));
    return Array.from(map.values());
}
function join(array, separator = ", ", lastSeparator = ",") {
    const [lastElement, ...otherElements] = array.slice(0).reverse();
    return `${otherElements.join(separator)}${otherElements.length ? lastSeparator : ""}${lastElement}`;
}

export { distinctBy, join };
//# sourceMappingURL=arrayUtils.js.map
