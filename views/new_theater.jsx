var React = require('react');
var axios = require('axios');
var DefaultLayout = require('./layouts/default');

class NewTheater extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <form method="POST" action="/api/theater/" > 
          Name: <input require type="text" name="name" /><br/>
          Andress: <input require type="text" name="address" /><br/>
          <input type="submit" value="Submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = NewTheater;