import {
    parseGAMRequest,
    parseYouTubeRequest,
} from './parser'

function parseRequest(request, isYouTube, truncateValues, ignoreValues) {
    if (request && request.trim().length > 0) {
        if (isYouTube) {
            return parseYouTubeRequest(request, truncateValues, ignoreValues)
        } else {
            return parseGAMRequest(request, truncateValues, ignoreValues);  
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
    const isYouTube = [...event.target.elements].filter(t => t.id === "radio_type_youtube")[0].checked;

    return [
        parseRequest(request1, isYouTube, truncateValues, ignoreValues),
        parseRequest(request2, isYouTube, truncateValues, ignoreValues),
    ];
}

export default parseEvent