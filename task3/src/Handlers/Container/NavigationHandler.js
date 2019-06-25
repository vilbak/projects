/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

import { withRouter } from 'react-router-dom';
import NavigationPanelView from '../Component/NavigationView';

class NavigationHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      path: props.location.path,
    };
  }

handleChange = (event, newValue) => {
  this.setState({ path: newValue });
};

render() {
  switch (this.state.path) {
    case '/': return <NavigationPanelView value="false" handleChange={this.handleChange} />;
    case '/about':
    case '/mouseOn': return <NavigationPanelView value={this.state.path} handleChange={this.handleChange} />;
    default: return <NavigationPanelView />;
  }
}
}
export default withRouter(NavigationHandler);
