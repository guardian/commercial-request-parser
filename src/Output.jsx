import ReactDiffViewer from 'react-diff-viewer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Output.css'

function Output({ parsed: [ parsed1, parsed2 ] }) {
    return (
        <div className="output-container">
            <Tabs>
                <TabList>
                    <Tab>Parsed 1</Tab>
                    <Tab>Parsed 2</Tab>
                    <Tab>Diff</Tab>
                </TabList>
                <TabPanel>
                    <div className="output-request-container">
                        <textarea
                            className="output-request"
                            readOnly
                            rows="10"
                            cols="50"
                            value={parsed1}
                        > 
                            {parsed1}
                        </textarea>
                        <div class="copy" title="Copy" onClick={() => {navigator.clipboard.writeText(parsed1)}}>📋</div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="output-request-container">
                        <textarea
                            className="output-request"
                            readOnly
                            rows="10"
                            cols="50"
                            value={parsed2}
                        >
                        </textarea>
                        <div class="copy" title="Copy" onClick={() => {navigator.clipboard.writeText(parsed2)}}>📋</div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="diff-container">
                        <ReactDiffViewer
                            oldValue={parsed1}
                            newValue={parsed2}
                            splitView={true}
                            showDiffOnly={true}
                            leftTitle="Parsed 1"
                            rightTitle="Parsed 2"
                            codeFoldMessageRenderer={(number) => <div className="no-diff-msg">Expand {number} lines (no diff) ...</div>}
                        />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Output;