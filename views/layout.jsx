const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>
          <header>
            <h1>Gallivant</h1>
            <nav className="navbar">
              <a className='nav-link' href="/auth/signup">Sign Up</a>
              <a className='nav-link' href="/auth/login">Log In</a>
              <a className='nav-link' href="/auth/logout">Log Out</a>
              <a className='nav-link' href="/world">Home</a>
            </nav>
           
            
          </header>
          <main>{this.props.children}</main>
          
        </body>
      </html>
    );
  }
}

module.exports = Layout;