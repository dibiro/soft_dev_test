var React = require('react');
var DefaultLayout = require('./layouts/default');

class Admin extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title} links={[{link:'new_theater', label:'New Theater'},{link:'new_move', label:'New Move'}]}>
        <div>Hello {this.props.name}</div>
      </DefaultLayout>
    );
  }
}

module.exports = Admin;