var React = require('react');
var axios = require('axios');
var DefaultLayout = require('./layouts/default');

class ListTheater extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        { 
          this.props.theaters &&
          this.props.theaters.map(
            (theater, index) => (
              <div className="card-slim">
                <div className="card-header">
                  <p>info theater</p>
                </div>
                <div className="card-description">
                  <p>Name: <a href={"/"+this.props.admin+"theater/"+theater._id}>{theater.name}</a></p>
                  <p> Andress: {theater.andress}</p>
                </div>
              </div>
            )
          )
        }
      </DefaultLayout>
    );
  }
}

ListTheater.defaultProps = {
  admin:'',
};

module.exports = ListTheater;