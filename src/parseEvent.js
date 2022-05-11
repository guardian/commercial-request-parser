import { parseRequest } from './parser'


function parseEvent(event) {
    event.preventDefault();
    const request1 = [...event.target.elements].filter(t => t.id === "request-1")[0].value;
    const request2 = [...event.target.elements].filter(t => t.id === "request-2")[0].value;
    const truncateValues = [...event.target.elements].filter(t => t.id === "radio_truncate_values")[0].checked;
    const includeValues = [...event.target.elements].filter(t => t.id === "radio_include_values")[0].checked;
    const ignoreValues = !includeValues;

    return [
        parseRequest(request1, truncateValues, ignoreValues),
        parseRequest(request2, truncateValues, ignoreValues),
    ];
}

export default parseEvent