import {
    parseGAMRequest,
    parseYouTubeRequest,
} from './parser'

function parseEvent(event) {
    event.preventDefault();
    // document.getElementById("error").innerHTML = "";
    const request1 = [...event.target.elements].filter(t => t.id === "request-1")[0].value;
    const request2 = [...event.target.elements].filter(t => t.id === "request-2")[0].value;
    const truncateValues = [...event.target.elements].filter(t => t.id === "radio_truncate_values")[0].checked;
    const ignoreValues = [...event.target.elements].filter(t => t.id === "radio_ignore_values")[0].checked;
    const youtube = [...event.target.elements].filter(t => t.id === "radio_type_youtube")[0].checked;
    // console.log(request1, truncateValues, ignoreValues, youtube)
    // if (youtube && !requestString.startsWith("https://www.youtube.com/embed/")) {
    //     document.getElementById("parsed").value = "";
    //     document.getElementById("error").innerHTML = "Request string does not look like a YouTube embed request!";
    //     return;
    // }
    // if (!youtube && !requestString.startsWith("https://securepubads.g.doubleclick.net/")) {
    //     document.getElementById("parsed").value = "";
    //     document.getElementById("error").innerHTML = "Request string does not look like a GAM request!";
    //     return;
    // }
    const parsed1 = youtube
        ? parseYouTubeRequest(request1, truncateValues)
        : parseGAMRequest(request1, truncateValues);
    const parsed2 = youtube
        ? parseYouTubeRequest(request2, truncateValues)
        : parseGAMRequest(request2, truncateValues);
    return [parsed1, parsed2]
}

export default parseEvent