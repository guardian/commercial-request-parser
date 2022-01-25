import { useState } from 'react'
import './Controls.css'
import parseEvent from './parseEvent'

function HelperText() {
    return (
        <span className="light">can be a GAM ('https://securepubads.g.doubleclick.net/gampad/ads?...') or YouTube ('https://www.youtube.com/embed/...') request</span>
    );
};

function Controls({
    setParsed
}) {
    const [error, setError] = useState("")
    const handleSubmit = (event) => {
        event?.preventDefault()
        setParsed(parseEvent(event))
    }
    return (
        <div id="controls-container">
            <form id="form" onSubmit={handleSubmit}>
                <div className="request-container">
                    <div>Request 1: <HelperText /></div>
                    <textarea
                        className="request"
                        id="request-1"
                        rows="5"
                        wrap="hard"
                        >
                    </textarea>
                </div>
                <div className="request-container">
                    <div>Request 2: <HelperText /></div>
                    <textarea
                        className="request"
                        id="request-2"
                        rows="5"
                        wrap="hard"
                    >
                    </textarea>
                </div>
                <div id="controls">
                    <input type="checkbox" id="radio_truncate_values" name="radio_truncate_values" value="radio_truncate_values" defaultChecked />
                    <label htmlFor="radio_truncate">Truncate long values</label>
                    <br></br>
                    <input type="checkbox" id="radio_ignore_values" name="radio_ignore_values" value="radio_ignore_values" defaultChecked />
                    <label htmlFor="radio_truncate">Ignore values</label>
                    <br></br>
                    <div id="parse-button-container">
                        <button type="submit">Parse</button>    
                        {error && <span id="error">{error}</span>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Controls