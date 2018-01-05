var React = require('react');
var axios = require('axios');
var DefaultLayout = require('./layouts/default');

class Move extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div className="card-slim">
          <div className="card-header">
            <p>Info Move</p>
          </div>
          <div className="card-description">
            <p>Name: <a href={"/move/"+this.props.move._id}>{this.props.move.name}</a></p>
            <p>Language: {this.props.move.language}</p>
            <p>Release Date: {this.props.move.release_date ? this.props.move.release_date.toDateString() : ''}</p>
          </div>
        </div>
      </DefaultLayout>
    );
  }
}

module.exports = Move;