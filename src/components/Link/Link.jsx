import React from 'react';
import PropTypes from 'prop-types';
import './Link.css';

const propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};

const Link = ({url, title}) => {

    return (
        <a
	  className="App-link"
	  href={url}
	  target="_blank"
	  rel="noopener noreferrer"
          >
          {title}
	</a>
    )

};

Link.propTypes = propTypes;


export default Link;
