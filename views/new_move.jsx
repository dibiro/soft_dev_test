var React = require('react');
var axios = require('axios');
var DefaultLayout = require('./layouts/default');

class NewMove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.nameChange = this.nameChange.bind(this);
    this.lenguageChange = this.lenguageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  lenguageChange(event) {
    this.setState({name: event.target.name});
  }

  nameChange(event) {
    this.setState({language: event.target.language});
    console.log(event.target.language);
  }

  handleSubmit() {
    console.log('funciona');
    axios.post('/api/moves/', {
      name:this.state.name,
      language:this.state.language,
    })
    .then(function (response) {
      if (response.message=='move created!') {
        window.location.replace("/update_move/"+response.id);
      }
      console.log(response);
    })
    .catch(function (error) {
      alert('oups error')
      console.log(error);
    });
  }
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <form method="POST" action="/api/moves/" > 
          Name: <input require type="text" name="name" /><br/>
          language: <input require type="text" name="language" /><br/>
          release date: <input require type="date" name="release_date" /><br/>
          <input type="submit" value="Submit" />
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = NewMove;