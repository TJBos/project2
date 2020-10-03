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
                    <div>{country.date}</div>
                    <form action={`/world/${country._id}?_method=DELETE`} method="POST">
                        <input className='btn btn-default' type="submit" value="delete this trip" />
                    </form>
                    <h3>Story</h3>
                    <div className="description">{country.description}</div>
                    <div className='places'>Places visited: <span>{country.places}</span></div>
                    <form action={`/world/${country._id}/edit`} method="GET">
                        <input className='btn btn-default' type="submit" value="edit this trip"/>
                    </form>

                    <h3>Photos</h3>
                    <form action={`/world/${country._id}/editimg`} method="GET">
                        <input className='btn btn-default' type="submit" value="edit photos"/>
                    </form>
                    <div className="img-container">
                        {country.photos.map((photo) => {
                                return (
                                    <div className='showphoto'>
                                        <img src={photo}></img>
                                    </div>)})}
                    </div>
                
                    
        
                </div>
            </Layout>
        )
    }
}

module.exports = Show;