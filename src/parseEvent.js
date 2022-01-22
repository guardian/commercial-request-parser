import {
    parseGAMRequest,
    parseYouTubeRequest,
} from './parser'

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

function parseRequest(request, truncateValues, ignoreValues) {
    if (request && request.trim().length > 0) {
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

function parseEvent(event) {
    event.preventDefault();
    const request1 = [...event.target.elements].filter(t => t.id === "request-1")[0].value;
    const request2 = [...event.target.elements].filter(t => t.id === "request-2")[0].value;
    const truncateValues = [...event.target.elements].filter(t => t.id === "radio_truncate_values")[0].checked;
    const ignoreValues = [...event.target.elements].filter(t => t.id === "radio_ignore_values")[0].checked;

    return [
        parseRequest(request1, truncateValues, ignoreValues),
        parseRequest(request2, truncateValues, ignoreValues),
    ];
}

export default parseEvent