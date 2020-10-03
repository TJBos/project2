const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <form action="/auth/signup" method="post">
          <div className='form-group'>
          <input className='form-control' type="text" name="username" placeholder="username" />
          </div>
          <div className='form-group'>
          <input className='form-control' type="text" name="password" placeholder="password" />
          </div>
          <input className='btn btn-dark' type="submit" value="Sign up" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
