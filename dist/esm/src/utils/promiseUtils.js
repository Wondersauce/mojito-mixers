function wait(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isPromise(maybePromise) {
    return maybePromise && typeof maybePromise === "object" && typeof maybePromise.then === "function";
}

export { isPromise, wait };
//# sourceMappingURL=promiseUtils.js.map
