import {
    parseGAMRequest,
    parseYouTubeRequest,
} from './parser'

function parseEvent(event) {
    event.preventDefault();
    const request1 = [...event.target.elements].filter(t => t.id === "request-1")[0].value;
    const request2 = [...event.target.elements].filter(t => t.id === "request-2")[0].value;
    const truncateValues = [...event.target.elements].filter(t => t.id === "radio_truncate_values")[0].checked;
    const ignoreValues = [...event.target.elements].filter(t => t.id === "radio_ignore_values")[0].checked;
    const youtube = [...event.target.elements].filter(t => t.id === "radio_type_youtube")[0].checked;

    let parsed1 = "";
    let parsed2 = "";

    if (request1 && request1.trim().length > 0) {
        parsed1 = youtube
            ? parseYouTubeRequest(request1, truncateValues)
            : parseGAMRequest(request1, truncateValues);
    }
    if (request2 && request2.trim().length > 0) {
        parsed2 = youtube
        ? parseYouTubeRequest(request2, truncateValues)
        : parseGAMRequest(request2, truncateValues);
    }
    return [parsed1, parsed2]
}

export default parseEvent