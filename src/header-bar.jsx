/**
  * <HeaderBar />
  */

import React from 'react';

export default class HeaderBar extends React.Component {
  render() {
    return (
      <div className="toolbar-header">
        <span className="label label-default">{this.props.data.text}</span>
        <div className="toolbar-header-buttons">
          {
            this.props.data.element !== "LineBreak" &&
            this.props.data.allowEdit !== false &&
            <div className="btn is-isolated btn-school" onClick={this.props.editModeOn.bind(this.props.parent, this.props.data)}><i className="is-isolated fa fa-pencil-square-o"></i></div>
          }
          {
            this.props.data.allowDelete !== false &&
            <div className="btn is-isolated btn-school" onClick={this.props.onDestroy.bind(this, this.props.data)}><i className="is-isolated fa fa-trash-o"></i></div>
          }
        </div>
      </div>
    );
  }
}