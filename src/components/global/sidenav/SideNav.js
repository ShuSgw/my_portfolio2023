import PropTypes from "prop-types";
import React, {Component} from "react";

import Sidebar from "react-sidebar";

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false,
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  onSetSidebarOpen(open) {
    this.setState({sidebarOpen: open});
  }

  render() {
    return (
      <div>
        <Sidebar
          sidebar={<b>Sidebar content</b>}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          styles={{sidebar: {background: "white"}}}
        ></Sidebar>
      </div>
    );
  }
}
