import { IS_SERVER } from '../build/build.constants.js';

function getUrlWithoutParams() {
    if (IS_SERVER)
        return "/";
    const { href, search } = window.location;
    return search ? href.replace(search, "") : href;
}
function urlToPathnameWhenPossible(url) {
    if (IS_SERVER)
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
    if (IS_SERVER)
        return url;
    return `${url}${window.location.search}`;
}
function isLocalhost() {
    if (IS_SERVER)
        return false;
    return window.location.hostname === "localhost";
}
function isLocalhostOrStaging() {
    if (IS_SERVER)
        return false;
    return isLocalhost() || /\.staging\./.test(window.location.origin.replace(/[/\-.]/g, "."));
}

export { getPathnameWithParams, getUrlWithSearchParams, getUrlWithoutParams, isLocalhost, isLocalhostOrStaging, isUrlPathname, urlToPathnameWhenPossible };
//# sourceMappingURL=url.utils.js.map
