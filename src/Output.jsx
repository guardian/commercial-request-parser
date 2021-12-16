import ReactDiffViewer from 'react-diff-viewer';
import './Output.css'

function Output({ parsed: [ parsed1, parsed2 ] }) {
    console.log('hello', parsed1, parsed2);
    return (
        <div className="output-container">
            <hr />
            <div className="output-request-container">
                <div>1</div>
                <textarea
                    className="output"
                    id="output-request-1"
                    rows="10"
                    cols="50"
                    value={parsed1}
                >   
                </textarea>
            </div>
            <div className="output-request-container">
                <div>2</div>
                <textarea
                    className="output"
                    id="output-2"
                    rows="10"
                    cols="50"
                    value={parsed2}
                >
                </textarea>
            </div>
            <div className="diff-container">
                <hr />
                <ReactDiffViewer
                    oldValue={parsed1}
                    newValue={parsed2}
                    splitView={false}
                    showDiffOnly={true}
                />
            </div>

        </div>
    )
}

export default Output;