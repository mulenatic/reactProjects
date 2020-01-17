import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InnerLink = styled.a`
color: #61dafb;
`;

const propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};

const Link = ({url, title}) => {

    return (
	<InnerLink
	  href={url}
	  target="_blank"
	  rel="noopener noreferrer"
          >
          {title}
	</InnerLink>
    )

};

Link.propTypes = propTypes;


export default Link;
