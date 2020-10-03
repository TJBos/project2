const React = require('react');
const Layout = require('../layout.jsx');

class New extends React.Component {
    render() {
        const { country } = this.props;
        return (
            <Layout>
                <div>
                    <h1>Add a photo</h1>
                    <form action={`/world/${country._id}/`} method='POST'>
                        <div className='form-group'>
                        <label>
                            Name <input type="text" className='form-control' placeholder="image url" name="photo" />
                        </label>
                        </div>
                        <input className="btn btn-default" type="submit" value="Add Photo"></input>
                        
                    </form>

                </div>
            </Layout>
        );
    }
}

module.exports = New;
