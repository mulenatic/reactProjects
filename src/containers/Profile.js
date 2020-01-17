import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

class Profile extends React.Component {
    constructor() {
	super();
	this.state = {
	    data: {},
	    loading: true,
	};
    }

    async componentDidMount() {
	const profile = await fetch('https://api.github.com/users/mulenatic');
	const profileJSON = await profile.json();

	if (profileJSON) {
	    this.setState({
		data: profileJSON,
		loading: false
	    });
	}
    }
    

    render() {
	return (
	    <div></div>
	);
    }
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
