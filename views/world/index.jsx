const React = require('react');
const Layout = require('../layout.jsx');



class Index extends React.Component {
    render() {
        return (
            <Layout>
                <div className='index'>
                    <h1>Countries</h1>
                    <a href="/world/new"><button>Add a country</button></a>
                    <div className='container'>
                        {this.props.country.map((item) => {
                            return (
                                <div className='card'>
                                    <a href={`/world/${item.id}`}>
                                        <img></img>
                                        <div className='title'>{item.name}</div>
                                        <div className='title'>{item.description}</div>
                                    </a>
                                </div>
                            )
                            
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Index;