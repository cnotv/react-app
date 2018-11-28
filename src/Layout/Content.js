import React from 'react';
import routes from './../Routing/routes';
import { BrowserRouter as Router } from 'react-router-dom';

class Content extends React.Component {
  render() {
    return (
      <Router>
        <main className="Content">
          {routes}
        </main>
      </Router>
    )
  }
}

export default (Content);