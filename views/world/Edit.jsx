const React = require('react');
const Layout = require('../layout.jsx');

class Edit extends React.Component {
    render() {
        const { country } = this.props;
        return (
            <Layout>
                <div>
                    <h1>Edit trip details</h1>
                    <form action={`/world/${country._id}?_method=PUT`} method="POST">
                    <div className='form-group'>
                        <label>
                            Name <input className='form-control' type="text" defaultValue={country.name} name="name" />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Description <input className='form-control' type="textarea" defaultValue={country.description} name="description" />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Date <input className='form-control' type="text" defaultValue={country.date} name="date" />
                        </label>
                    </div>
                    <div className='form-group'>
                        <label>
                            Places <input className='form-control' type="text" defaultValue={country.places} name="places" />
                        </label>
                    </div>
                        <input className='btn btn-default' type="submit" value="Update"></input>
            
                    </form>

                </div>
            </Layout>
        );
    }
}

module.exports = Edit;