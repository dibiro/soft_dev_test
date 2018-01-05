var React = require('react');
var axios = require('axios');
var DefaultLayout = require('./layouts/default');

class ListMove extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        { 
          this.props.moves &&
          this.props.moves.map(
            (move, index) => (
              <div>
                <h1>
                  info move
                </h1>
                Name: <a href={"/move/"+move._id}>{move.name}</a><br/>
                Language: {move.language}<br/>
              </div>
            )
          )
        }
      </DefaultLayout>
    );
  }
}

module.exports = ListMove;