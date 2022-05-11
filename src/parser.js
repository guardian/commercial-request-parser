const truncateString = (str) =>
    str.length <= 80 ? str : str.substring(0, 76) + '...';

const truncateArray = (arr) =>
    arr.length >= 10 ? arr.slice(0,9).concat("...") : arr

const sortKeysAndTruncateValues = (obj, truncate, ignoreValues) =>
    Object.keys(obj).sort((a,b) => a.localeCompare(b)).reduce((result, key) => {
        const value = obj[key];
        if (ignoreValues) {
            result[key] = typeof value === "string" || Array.isArray(value)
                        ? ""
                        : value;
        }
        else if (truncate) {
            result[key] = typeof value === "string"
                        ? truncateString(value)
                        : Array.isArray(value) ? truncateArray(value) : value;
        } else {
            result[key] = value;
        }
        return result;
    }, {});

const getRequestParams = (request) => {
    const requestPathEncoded = request.substring(request.indexOf("?") + 1);
    const requestPathDecoded = decodeURIComponent(requestPathEncoded);
    return requestPathDecoded.split("&").map(decodeURIComponent);    
}

const parseCustParams = (custParamsString) => {
    const custParams = decodeURIComponent(custParamsString);
    const custParamsItems = custParams.split("&");
    return custParamsItems.reduce((newParams, cpi) => {
        const [key, value] = cpi.split("=");
        if (value.includes(",")) {
            newParams[key] = value.split(",");
        } else {
            newParams[key] = value;
        }
        return newParams;
    }, {});
}

const parseIfDefined = (obj, key, parseFn) => {
    if (obj && obj[key]) {
        obj[key] = parseFn(obj[key]);
    }
    return undefined;
}

function cleanRequest(request) {
    return request
        // Remove any leading / trailing whitespace
        .trim()
        // Remove leading string that may be included when copying from browser
        .replace("Request URL: ", "");
}

function isYouTubeRequest(request) {
    if (request.startsWith("https://www.youtube.com/embed/")) {
        return true;
    }
}

function isGAMRequest(request) {
    if (request.startsWith("https://securepubads.g.doubleclick.net/gampad/ads")) {
        return true;
    }
}

/**
 * When using dev tools to 'copy value' of a request Chrome will do a decode step over the request string
 * Detect this by looking at parts of the URL and check if decoded
 */
function isDecoded(request, type) {
    if (type === 'youtube') {
        if (request.includes('origin=https://')) {
            return true;
        }
    }
    if (type === 'gam') {
        if (request.includes('cust_params=')) {
            return true;
        }
    }
    return false;
}

const parseYouTubeRequest = (request, truncate, ignoreValues) => {
    let requestSummary = {};

    getRequestParams(request).forEach(rp => {
        const equalIndex = rp.indexOf("=");
        if (rp.startsWith("embed_config")) {
            const embedConfig = JSON.parse(rp.substring(equalIndex+1));
            parseIfDefined(
                embedConfig?.adsConfig?.adTagParameters,
                'cust_params',
                (obj) => sortKeysAndTruncateValues(parseCustParams(obj), truncate, ignoreValues)
            )
            parseIfDefined(
                embedConfig?.adsConfig,
                'adTagParameters',
                (obj) => sortKeysAndTruncateValues(obj, truncate, ignoreValues)
            )
            requestSummary["embed_config"] = sortKeysAndTruncateValues(embedConfig, truncate, ignoreValues);
        } else {
            requestSummary[rp.substring(0, equalIndex)] = rp.substring(equalIndex+1);
        }
    });

    requestSummary = sortKeysAndTruncateValues(requestSummary, truncate, ignoreValues);
    return JSON.stringify(requestSummary, null ,2);
}

const parseGAMRequest = (request, truncate, ignoreValues) => {
    let requestSummary = {};

    getRequestParams(request).forEach(rp => {
        const equalIndex = rp.indexOf("=");
        if (rp.startsWith("cust_params")) {
            const equalIndex = rp.indexOf("=");
            const custParamsString = rp.substring(equalIndex+1);
            requestSummary["cust_params"] = sortKeysAndTruncateValues(parseCustParams(custParamsString), truncate, ignoreValues);
        } else {
            requestSummary[rp.substring(0, equalIndex)] = rp.substring(equalIndex+1);
        }
    });

    requestSummary = sortKeysAndTruncateValues(requestSummary, truncate, ignoreValues);
    return JSON.stringify(requestSummary, null ,2);
}

function parseRequest(rawRequest, truncateValues, ignoreValues) {
    const request = cleanRequest(rawRequest);
    if (request && request.length > 0) {
        if (isYouTubeRequest(request)) {
            return parseYouTubeRequest(request, truncateValues, ignoreValues)
        } else if (isGAMRequest(request)) {
            return parseGAMRequest(request, truncateValues, ignoreValues);  
        } else {
            return "";
        }
    }
    return "";
}

export {
    parseGAMRequest,
    parseYouTubeRequest,
    parseRequest,
}