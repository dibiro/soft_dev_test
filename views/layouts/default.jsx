var React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <div>
            <a href="/admin">admin</a>
            <a href="/">Home</a>
            <div>
              { 
                this.props.links &&
                this.props.links.map(
                  (link, index) => (
                    <a href={"/"+link.link}>{link.label}</a>
                  )
                )
              }
            </div>
          </div>
        </head>
        <body>{this.props.children}</body>
      </html>
    );
  }
}

DefaultLayout.defaultProps = {
  links:[],
};

module.exports = DefaultLayout;