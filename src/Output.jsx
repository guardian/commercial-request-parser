import ReactDiffViewer from 'react-diff-viewer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Output.css'

function Output({ parsed: [ parsed1, parsed2 ] }) {
    console.log('hello', parsed1, parsed2);
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
                            className="output"
                            id="output-request-1"
                            rows="10"
                            cols="50"
                            value={parsed1}
                        >   
                        </textarea>
                        <div onClick={() => {navigator.clipboard.writeText(parsed1)}}>📋</div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="output-request-container">
                        <textarea
                            className="output"
                            id="output-2"
                            rows="10"
                            cols="50"
                            value={parsed2}
                        >
                        </textarea>
                        <div onClick={() => {navigator.clipboard.writeText(parsed2)}}>📋</div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="diff-container">
                        <ReactDiffViewer
                            oldValue={parsed1}
                            newValue={parsed2}
                            splitView={false}
                            showDiffOnly={true}
                        />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Output;