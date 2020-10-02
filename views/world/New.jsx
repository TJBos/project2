const React = require('react');
const Layout = require('../layout.jsx');

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div>
                    <h1>Enter a new country</h1>
                    <form action='/world/' method='POST'>
                        <div className='form-group'>
                        <label>
                            Name <input type="text" className='form-control' placeholder="name" name="name" />
                        </label>
                        </div>
                        <div className='form-group'>
                        <label>
                            Images <input type="text" className='form-control' placeholder="img url" name="[photos]" />
                        </label>
                        </div>
                        <div className='form-group'>
                        <label>
                            Description <input type="text" className='form-control' placeholder="description" name="description" />
                        </label>
                        </div>
                        <div className='form-group'>
                        <label>
                            Date <input type="text" className='form-control' placeholder="Date" name="date" />
                        </label>
                        </div>
                        <div className='form-group'>
                        <label>
                            Places visited <input type="text" className='form-control' placeholder="places" name="[places]" />
                        </label>
                        </div>
                        <input className="btn btn-default" type="submit" value="Enter country"></input>
            
                    </form>

                </div>
            </Layout>
        );
    }
}

module.exports = New;
