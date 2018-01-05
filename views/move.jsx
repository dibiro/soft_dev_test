var React = require('react');
var axios = require('axios');
var DefaultLayout = require('./layouts/default');

class Move extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>
          info move
        </h1>
          Name: {this.props.move.name}<br/>
          Language: {this.props.move.language}<br/>
          Release Date: {this.props.move.release_date.toDateString()}<br/>
      </DefaultLayout>
    );
  }
}

module.exports = Move;