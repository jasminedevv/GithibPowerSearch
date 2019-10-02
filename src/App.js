/**
 * WIP
 * A static react app to search github in steps
 * The first step passes it to the next one to further refine results
 * along the way display number of results as well as time elapsed
 * should have helpful error messages from when the search is too big or if other stuff goes wrong
 */

import React from 'react';
import './App.css';

class IssueSearch extends React.Component () {
  constructor (props) {
    // props should be the JSON of results from the last search
  }

  getResults (props) {
    // refine the results from the last step
    // for issues specifically, search the entire content
  }

  render() {
    return (
      <div className="IssueSearch">
        {/* Searches through issues */}
        {/* Displays how many results it found */}
        <ResultPreview
          name="something"
          content="no idea what these will look like"
        ></ResultPreview>
      </div>
    )
  }
}

class ResultPreview extends React.Component () {
  constructor (props) {
    // top results in JSON format: title, preview, etc
  }

  render() {
    return (
      <div className="ResultPreview">
        {/* Displays a preview of results */}
      </div>
    )
  }
}

function RenderNextSearch(props) {
  if (props == "some type of search like issues or commits or whatever") {
    type = "a component"
    component = <IssueSearch></IssueSearch>
  }

  return (
    <div className="NextSearch">
      {/* dropdown that picks the next component type for the search */}
      {component }
    </div>
  )
}
function FirstFilter() {
  // do some ajaxy stuff to get a JSON with the inital search results

  return (
    <div className="FirstFilter">
      <p>Search:</p>
      <input type="text"></input>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <FirstFilter></FirstFilter>
    </div>
  );
}

export default App;
