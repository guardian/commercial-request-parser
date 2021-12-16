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
                    <input type="radio" id="radio_type_youtube" name="radio_request_type" value="radio_type_youtube" defaultChecked />
                    <label htmlFor="radio_type_youtube">YouTube embed request <span className="light">(e.g. https://www.youtube.com/embed/3LtcTkRMI1w?embed_config...)</span></label>
                    <br></br>
                    <input type="radio" id="radio_type_page_targeting" name="radio_request_type" value="radio_type_page_targeting" />
                    <label htmlFor="radio_type_page_targeting">GAM Page Targeting <span className="light">(e.g. https://securepubads.g.doubleclick.net/gampad/ads?...)</span></label>
                    <br></br>
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