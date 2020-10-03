const React = require('react');
const Layout = require('../layout.jsx');



class Index extends React.Component {
    render() {
        return (
            <Layout>
                <div className='index'>
                    <a href="/world/new"><button className="btn btn-dark">Add a destination</button></a>
                    <h2>My Trips</h2>
                    <div className='card-container'>
                        {this.props.country.map((item) => {
                            return (
                                <div className='card'>
                                        <div className='date'>{item.date}</div>
                                        <div className='img' style={{'background-image': `url(${item.photos[0]})`}} ></div>
                                        <a href={`/world/${item.id}`}>
                                            <div className='name'>{item.name}</div>
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