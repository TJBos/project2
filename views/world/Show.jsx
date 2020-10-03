const React = require('react');
const Layout = require('../layout.jsx');

class Show extends React.Component {
    render() {
        const { country } = this.props;
        return (
            <Layout>
                <div classNameName='show'>
                    <a href='/world'>Go back to destinations</a>
                    <h1>{country.name}</h1>
                    <form action={`/world/${country._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="delete this trip" />
                    </form>
                    <form action={`/world/${country._id}/edit`} method="GET">
                        <input type="submit" value="edit this trip"/>
                    </form>
                    <div>{country.description}</div>
                    <div>{country.date}</div>
                    <div>Places visited: {country.places}</div>

                    <h2>Photos</h2>
                    <div className="img-container">
                        {country.photos.map((photo) => {
                                return (
                                    <div className='photo'>
                                        <img src={photo}></img>
                                    </div>)})}
                    </div>
                
                    
        
                </div>
            </Layout>
        )
    }
}

module.exports = Show;