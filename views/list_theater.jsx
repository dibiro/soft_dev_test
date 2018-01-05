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
              <div>
                <h1>
                  info theater
                </h1>
                Name: <a href={"/theater/"+theater._id}>{theater.name}</a><br/>
                Andress: {theater.andress}<br/>
              </div>
            )
          )
        }
      </DefaultLayout>
    );
  }
}

module.exports = ListTheater;