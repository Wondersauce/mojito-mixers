'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var build_constants = require('../build/build.constants.js');

function getUrlWithoutParams() {
    if (build_constants.IS_SERVER)
        return "/";
    const { href, search } = window.location;
    return search ? href.replace(search, "") : href;
}
function urlToPathnameWhenPossible(url) {
    if (build_constants.IS_SERVER)
        return "/";
    const { origin } = window.location;
    return (url.startsWith(origin) ? url.replace(origin, "") : url) || "/";
}
function getPathnameWithParams() {
    return `${window.location.pathname}${window.location.search}`;
}
function isUrlPathname(url) {
    return !url.startsWith("http");
}
function getUrlWithSearchParams(url) {
    if (build_constants.IS_SERVER)
        return url;
    return `${url}${window.location.search}`;
}
function isLocalhost() {
    if (build_constants.IS_SERVER)
        return false;
    return window.location.hostname === "localhost";
}
function isLocalhostOrStaging() {
    if (build_constants.IS_SERVER)
        return false;
    return isLocalhost() || /\.staging\./.test(window.location.origin.replace(/[/\-.]/g, "."));
}

exports.getPathnameWithParams = getPathnameWithParams;
exports.getUrlWithSearchParams = getUrlWithSearchParams;
exports.getUrlWithoutParams = getUrlWithoutParams;
exports.isLocalhost = isLocalhost;
exports.isLocalhostOrStaging = isLocalhostOrStaging;
exports.isUrlPathname = isUrlPathname;
exports.urlToPathnameWhenPossible = urlToPathnameWhenPossible;
//# sourceMappingURL=url.utils.js.map
