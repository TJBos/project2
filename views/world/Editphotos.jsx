const React = require('react');
const Layout = require('../layout.jsx');

class Editphotos extends React.Component {
    render() {
        const { photos } = this.props;
        const { country } = this.props;
        return (
            <Layout>
                <div>
                    <a href={`/world/${country._id}/addphoto`}><button id='addphoto' className='btn btn-default'>Add photo</button></a>
                    {photos.map((item, index) => {
                            return (
                                <div className='edit-photo-ctr'>
                                    <img className='editimg' src={item}></img>
                                    <form action={`/world/${country._id}/${index}?_method=DELETE`} method="POST">
                                    <input className='btn btn-default' type="submit" value="delete photo" />
                                    </form>
                                </div>
                            )}
                    )}
                </div>
            </Layout>
        );
    }
}

module.exports = Editphotos;