const React = require('react');
const Layout = require('../layout.jsx');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Enter a new country</h1>
                <form action='/world/' method='POST'>
    
                    <label>
                        Name <input type="text" placeholder="name" name="name" />
                    </label>
                    <label>
                        Images <input type="text" placeholder="img url" name="[photos]" />
                    </label>
                    <label>
                        Description <input type="text" placeholder="description" name="description" />
                    </label>
                    <label>
                        Date <input type="text" placeholder="Date" name="date" />
                    </label>
                    <label>
                        Places visited <input type="text" placeholder="places" name="[places]" />
                    </label>
                    <input type="submit" value="Enter country"></input>
        
                </form>

            </div>
        );
    }
}

module.exports = New;
