const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <h1>Welcome to Gallivant</h1>
        <h3>Sign up or log in and start building your digital travel diary!</h3>
        <img className='travelicon' src="https://static.vecteezy.com/system/resources/previews/000/129/854/original/vector-free-travel-icons.jpg"></img>
      </Layout>
    );
  }
}

module.exports = Index;
