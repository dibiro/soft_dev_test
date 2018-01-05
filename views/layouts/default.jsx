var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <div>
            <div>
              <a href="/admin">admin</a>
            </div>
            <div>
              <a href="/">Home</a>
            </div>
            <div>
              <a href="/list_move">List Move</a>
            </div>
            <div>
              <a href="/list_theater">List Theater</a>
            </div>
            { 
              this.props.links &&
              this.props.links.map(
                (link, index) => (
                  <div>
                    <a href={"/"+link.link}>{link.label}</a>
                  </div>
                )
              )
            }
          </div>
        </head>
        <body>
          <h1>
            {this.props.title}
          </h1>
          {this.props.children}
        </body>
      </html>
    );
  }
}

DefaultLayout.defaultProps = {
  links:[],
};

module.exports = DefaultLayout;