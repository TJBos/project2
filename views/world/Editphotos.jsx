const React = require('react');
const Layout = require('../layout.jsx');

class Editphotos extends React.Component {
    render() {
        const { photos } = this.props;
        const { country } = this.props;
        return (
            <div>
                <a href='world/addphoto'><button>Add photo</button></a>
                {photos.map((item, index) => {
                            return (
                                <div>
                                    <img src={item}></img>
                                    <form action={`/world/${country._id}/${index}?_method=DELETE`} method="POST">
                                    <input type="submit" value="delete photo" />
                                    </form>
                                </div>
                            )}
                )}
            </div>
        );
    }
}

module.exports = Editphotos;