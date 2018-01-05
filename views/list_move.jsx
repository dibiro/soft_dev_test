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
              <div className="card-slim">
                <div className="card-header">
                  <p>Info Move</p>
                </div>
                <div className="card-description">
                  <p>Name: <a href={"/move/"+move._id}>{move.name}</a></p>
                  <p>Language: {move.language}</p>
                  <p>Release Date: {move.release_date ? move.release_date.toDateString() : ''}</p>
                  { 
                    this.props.is_admin &&
                    <form method="POST" action={"/api/theater/remove_move/"+this.props.theater._id} > 
                      <input type="hidden" name="move_id" value={move._id} /><br/>
                      <input type="submit" value="Remove" />
                    </form>
                  }
                </div>
              </div>
            )
          )
        }
      </DefaultLayout>
    );
  }
}

module.exports = ListMove;