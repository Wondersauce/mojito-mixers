'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var build_constants = require('../domain/build/build.constants.js');
var url_utils = require('../domain/url/url.utils.js');

/* eslint-disable class-methods-use-this */
// TODO: Change to getCookieParams:
function getCookieSecurityParams(params = {}) {
    const { domain = "", secure = true, crossDomain = false, httpOnly, } = params;
    const securityParams = [];
    if (secure && !url_utils.isLocalhost()) {
        securityParams.push("secure");
    }
    if (crossDomain) {
        const domainParam = domain || (build_constants.IS_BROWSER ? window.location.host : "");
        if (domainParam)
            securityParams.push(`domain=${domainParam}`);
    }
    if (httpOnly) {
        securityParams.push("httponly");
    }
    const securityParamsStr = securityParams.filter(Boolean).join("; ");
    return securityParamsStr ? ` ${securityParamsStr};` : "";
}
function setCookie(key, value, params = {}) {
    if (typeof document === "undefined")
        return;
    const serializedValue = params.noParse ? value : encodeURIComponent(JSON.stringify(value));
    const expirationDate = params.expirationDate ||
        (params.expirationDate === false ? undefined : new Date(Date.now() + (30 * 24 * 3600000))); // 30 days default expiration
    const cookieParams = [
        expirationDate ? `expires=${expirationDate.toUTCString()}` : undefined,
        `path=${params.path || "/"}`,
        getCookieSecurityParams(params),
    ].filter(Boolean).join("; ");
    console.log(`Setting cookie ${key}=<VALUE>; ${cookieParams}`);
    if (url_utils.isLocalhost()) {
        document.cookie = `${key}=${serializedValue}; ${cookieParams}`;
    }
}
function parseCookie(cookieValue) {
    return JSON.parse(decodeURIComponent(cookieValue));
}
function getCookies() {
    if (typeof document === "undefined")
        return {};
    return Object.fromEntries(document.cookie.split("; ").map((cookie) => {
        return cookie.split("=");
    }));
}
function getCookie(name, options = {}) {
    const cookies = getCookies();
    let rawCookie;
    if (typeof name === "string") {
        rawCookie = cookies[name];
    }
    else {
        // Recent first:
        const matchingKey = Object.keys(cookies).reverse().find((cookieKey) => {
            return name.test(cookieKey);
        });
        if (matchingKey)
            rawCookie = cookies[matchingKey];
    }
    if (rawCookie === undefined)
        return undefined;
    if (options.noParse)
        return rawCookie;
    return parseCookie(rawCookie);
}
function hasCookie(key) {
    return getCookie(key, { noParse: true }) !== undefined;
}
function deleteCookie(key, params = {}) {
    const hasCookieResult = hasCookie(key);
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${params.path || "/"};${getCookieSecurityParams(params)}`;
    // Note this might return a false negative if the cookie was set in a different domain or path or if it was httpOnly:
    return hasCookieResult;
}
function deleteCookies(key, params = {}) {
    if (typeof key === "string")
        return deleteCookie(key, params);
    let cookiesDeleted = 0;
    Object.keys(getCookies()).forEach((cookieKey) => {
        if (key.test(cookieKey)) {
            cookiesDeleted += deleteCookie(cookieKey, params) ? 1 : 0;
        }
    });
    return cookiesDeleted;
}
class ProxyStorage {
    constructor(type) {
        this.type = type;
    }
    /**
     * Stores a value given a key name.
     * The options parameter is used only with instances of cookieStorage.
     */
    setItem(key, value, options) {
        setCookie(key, value, options);
    }
    /**
     * Retrieves a value by its key name.
     * If noParse is true then the value retrieved is not parsed with JSON.parse.
     */
    getItem(key, options = {}) {
        return getCookie(key, options);
    }
    /**
     * Deletes an item from the storage.
     * The options parameter is used only with instances of cookieStorage.
     */
    removeItem(key, options) {
        return deleteCookies(key, options);
    }
    /**
     * Removes all items from the storage instance.
     */
    clear(options) {
        Object.keys(getCookies()).forEach(key => deleteCookie(key, options));
    }
    /**
     * Gets the number of items stored in the instance.
     */
    get length() {
        return Object.keys(getCookies()).length;
    }
}
const cookieStorage = new ProxyStorage("cookieStorage");

exports.ProxyStorage = ProxyStorage;
exports.cookieStorage = cookieStorage;
//# sourceMappingURL=storageUtils.js.map
