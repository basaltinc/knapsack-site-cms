import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MediaCardWrapper = styled.div`
  display: block;
  flex: 1 0 250px;
  margin: ${props => (props.horizontal ? '1rem' : '2rem 1rem')};
  ${props => (props.horizontal ? 'display: flex;' : '')};
`;

const MediaCardIcon = styled.div`
  img {
    width: auto;
    margin: 0 auto;
    max-height: 250px;
    display: block;
    padding: 3rem;
  }
`;

const MediaCardText = styled.div`
  color: ${props => props.theme.primary};
  padding: 2rem;
  text-align: ${props => props.textAlign};
`;

const MediaCard = props => (
  <MediaCardWrapper horizontal={props.horizontal}>
    <MediaCardIcon>
      <img src={props.imgSrc} alt={props.title} />
    </MediaCardIcon>
    <MediaCardText textAlign={props.textAlign}>
      <h4>{props.title}</h4>
      <p>{props.copy}</p>
    </MediaCardText>
  </MediaCardWrapper>
);

MediaCard.defaultProps = {
  title: '',
  copy: '',
  horizontal: false,
  textAlign: 'center',
};

MediaCard.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
  horizontal: PropTypes.bool,
  textAlign: PropTypes.string,
};

export default MediaCard;
