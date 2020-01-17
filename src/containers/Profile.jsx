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
//	const profile = await fetch('https://api.github.com/users/mulenatic');
	const profile = await fetch('https://api.github.com/users/octocat');
	const profileJSON = await profile.json();

	if (profileJSON) {
	    this.setState({
		data: profileJSON,
		loading: false
	    });
	}
    }
    

    render() {
	const { data, loading } = this.state;

	if (loading) {
	    return <div>Loading...</div>;
	}
	
	return (
	    <div>
	      <ul>
		<li>avatar_url: {data.avatar_url}</li>
		<li>html_url: {data.html_url}</li>
		<li>repos_url: {data.repos_url}</li>
		<li>name: {data.name}</li>
		<li>company: {data.company}</li>
		<li>location: {data.location}</li>
		<li>email: {data.email}</li>
		<li>bio: {data.bio}</li>
	      </ul>
	    </div>
	);
    }
};

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

export default Profile;
