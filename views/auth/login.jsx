const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout>
        <form action="/auth/login" method="post">
          <div className='form-group'>
          <input className='form-control' type="text" name="username" placeholder="username"/>
          </div>
          <div className='form-group'>
          <input className='form-control' type="text" name="password" placeholder="password"/>
          </div>
          <input className='btn btn-dark' type="submit" value="Log in"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
