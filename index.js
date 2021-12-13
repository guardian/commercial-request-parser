const truncateString = (str) =>
    str.length <= 80 ? str : str.substring(0, 76) + '...';

const truncateArray = (arr) =>
    arr.length >= 10 ? arr.slice(0,9).concat("...") : arr

const sortKeysAndTruncateValues = (obj, truncate) =>
    Object.keys(obj).sort((a,b) => a.localeCompare(b)).reduce((result, key) => {
        const value = obj[key];
        if (truncate) {
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
    console.log(custParams);
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

const parseYouTubeRequest = (request, truncate) => {
    let requestSummary = {};

    getRequestParams(request).forEach(rp => {
        const equalIndex = rp.indexOf("=");
        if (rp.startsWith("embed_config")) {
            const embedConfig = JSON.parse(rp.substring(equalIndex+1));
            parseIfDefined(
                embedConfig?.adsConfig?.adTagParameters,
                'cust_params',
                (obj) => sortKeysAndTruncateValues(parseCustParams(obj), truncate)
            )
            parseIfDefined(
                embedConfig?.adsConfig,
                'adTagParameters',
                (obj) => sortKeysAndTruncateValues(obj, truncate)
            )
            requestSummary["embed_config"] = sortKeysAndTruncateValues(embedConfig, truncate);
        } else {
            requestSummary[rp.substring(0, equalIndex)] = rp.substring(equalIndex+1);
        }
    });

    requestSummary = sortKeysAndTruncateValues(requestSummary, truncate);
    return JSON.stringify(requestSummary, null ,2);
}

const parseGAMRequest = (request, truncate) => {
    let requestSummary = {};

    getRequestParams(request).forEach(rp => {
        const equalIndex = rp.indexOf("=");
        if (rp.startsWith("cust_params")) {
            const equalIndex = rp.indexOf("=");
            const custParamsString = rp.substring(equalIndex+1);
            requestSummary["cust_params"] = sortKeysAndTruncateValues(parseCustParams(custParamsString), truncate);
        } else {
            requestSummary[rp.substring(0, equalIndex)] = rp.substring(equalIndex+1);
        }
    });

    requestSummary = sortKeysAndTruncateValues(requestSummary, truncate);
    return JSON.stringify(requestSummary, null ,2);
}