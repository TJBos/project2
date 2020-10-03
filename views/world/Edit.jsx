const React = require('react');
const Layout = require('../layout.jsx');

class Edit extends React.Component {
    render() {
        const { country } = this.props;
        return (
            <div>
                <h1>Edit Country</h1>
                <form action={`/world/${country._id}?_method=PUT`} method="POST">
    
                    <label>
                        Name <input type="text" defaultValue={country.name} name="name" />
                    </label>
                    
                    <label>
                        Description <input type="text" defaultValue={country.description} name="description" />
                    </label>
                    <label>
                        Date <input type="text" defaultValue={country.date} name="date" />
                    </label>
                    <label>
                        Places <input type="text" defaultValue={country.places} name="places" />
                    </label>
                    <input type="submit" value="Edit country"></input>
        
                </form>

            </div>
        );
    }
}

module.exports = Edit;