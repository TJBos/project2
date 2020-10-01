const React = require('react');
const Layout = require('../layout.jsx');

class Show extends React.Component {
    render() {
        const { country } = this.props;
        return (
            <Layout>
                <div className='show'>
                    <a href='/world'>Go back to countries</a>
                    <h1>{country.name}</h1>
                    <form action={`/world/${country._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="delete country" />
                    </form>
                    <form action={`/world/${country._id}/edit`} method="GET">
                        <input type="submit" value="edit country"/>
                    </form>
                    <img></img>
                    <div>{country.description}</div>
                    <div>{country.date}</div>
                    <div>Places visited: {country.places[0]}</div>
        
                </div>
            </Layout>
        )
    }
}

module.exports = Show;