var React = require('react');
var axios = require('axios');
var DefaultLayout = require('./layouts/default');

class Theater extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <h1>
          Info Theater
        </h1>
          Name: {this.props.theater.name}<br/>
          Andress: {this.props.theater.andress}<br/>
        <h1>
          Movies Available
        </h1>
        { 
          this.props.theater.moves &&
          this.props.theater.moves.map(
            (move, index) => (
              <div>
                <h5>
                  info move 
                </h5>
                Name: <a href={"/move/"+move._id}>{move.name}</a><br/>
                Language: {move.language}<br/>
                Release Date: {move.release_date ? move.release_date.toDateString() : ''}<br/>
                { 
                  this.props.is_admin &&
                  <form method="POST" action={"/api/theater/remove_move/"+this.props.theater._id} > 
                    <input type="hidden" name="move_id" value={move._id} /><br/>
                    <input type="submit" value="Remove" />
                  </form>
                }
              </div>
            )
          )
        }
        { 
          this.props.is_admin &&
          <div>
            <h1>
              Movies Not Available
            </h1>
            { 
              this.props.moves &&
              this.props.moves.map(
                (move, index) => (
                  <div>
                    { this.props.theater.moves.filter(function (theater_move) { return theater_move._id == move._id }).length == 0 &&
                      <div>
                        <h5>
                          info move
                        </h5>
                        Name: <a href={"/move/"+move._id}>{move.name}</a><br/>
                        Language: {move.language}<br/>
                        Release Date: {move.release_date ? move.release_date.toDateString() : ''}<br/>
                        <form method="POST" action={"/api/theater/add_move/"+this.props.theater._id} > 
                          <input type="hidden" name="move_id" value={move._id} /><br/>
                          <input type="submit" value="Add" />
                        </form>
                      </div>
                    }

                  </div>
                )
              )
            }
          </div>
        }
      </DefaultLayout>
    );
  }
}

Theater.defaultProps = {
  is_admin:false,
};

module.exports = Theater;