import { useState } from 'react'
import './Controls.css'
import parseEvent from './parseEvent'

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
                    <div>1</div>
                    <textarea
                        className="request"
                        id="request-1"
                        rows="1"
                        cols="50"
                        >
                    </textarea>
                </div>
                <div className="request-container">
                    <div>2</div>
                    <textarea
                        className="request"
                        id="request-2"
                        rows="1"
                        cols="50"
                    >
                    </textarea>
                </div>
                <div id="controls">
                    {/* https://www.youtube.com/embed/3LtcTkRMI1w?embed_config...)
                    https://securepubads.g.doubleclick.net/gampad/ads?...) */}
                    <input type="checkbox" id="radio_truncate_values" name="radio_truncate_values" value="radio_truncate_values" defaultChecked />
                    <label htmlFor="radio_truncate">Truncate long values</label>
                    <br></br>
                    <input type="checkbox" id="radio_ignore_values" name="radio_ignore_values" value="radio_ignore_values" defaultChecked />
                    <label htmlFor="radio_truncate">Ignore values</label>
                    <br></br>
                    <div id="parse-button-container">
                        <button type="submit">
                            Parse
                        </button>    
                        {error && <span id="error">{error}</span>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Controls