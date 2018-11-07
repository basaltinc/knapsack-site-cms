import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MediaCardWrapper = styled.div`
  display: block;
  max-width: 360px;
  min-width: 200px;
  flex: 1 0 calc(33.333% - 20px);
`;

const MediaCardTop = styled.div`
  img {
    width: 100%;
    max-height: 200px;
    display: block;
    padding: 2rem;
  }
`;

const MediaCardBottom = styled.div`
  color: ${props => props.theme.primary};
  padding: 2rem;
  text-align: center;
`;

const MediaCard = props => (
  <MediaCardWrapper>
    <MediaCardTop>
      <img src={props.imgSrc} />
    </MediaCardTop>
    <MediaCardBottom>
      <h4>{props.title}</h4>
      <p>{props.copy}</p>
    </MediaCardBottom>
  </MediaCardWrapper>
);

MediaCard.defaultProps = {
  title: '',
  copy: '',
};

MediaCard.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};

export default MediaCard;
