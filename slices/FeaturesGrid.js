import styled from 'styled-components';
import MediaCard from '../components/MediaCard';
import { Flex } from './styles/SliceStyles';

const FeaturesGridWrapper = styled.div`
  &:after {
    content: '';
    display: block;
    height: 125px;
    width: 100%;
    margin: 0 50px 0 0;
    background: -webkit-gradient(
      linear,
      right bottom,
      left top,
      color-stop(49.9%, ${props => props.theme.primaryExtra}),
      color-stop(50.1%, transparent)
    );
    background: linear-gradient(
      to left top,
      ${props => props.theme.primaryExtra} 49.9%,
      transparent 50.1%
    );
  }
`;

const FeaturesGrid = () => (
  <FeaturesGridWrapper id="features">
    <Flex>
      <MediaCard
        imgSrc="../static/icons/route.svg"
        title=""
        copy="Allows integration points cross-discipline"
      />
      <MediaCard
        imgSrc="../static/icons/documentation.svg"
        title=""
        copy="Facilitates documentation to ensure clear component intention, properties, and use cases."
      />
      <MediaCard
        imgSrc="../static/icons/pagebuilder.svg"
        title=""
        copy="Prototypes full experiences in our Page Builder"
      />
      <MediaCard
        imgSrc="../static/icons/component.svg"
        title=""
        copy="Builds coded components for your design system"
      />
    </Flex>
  </FeaturesGridWrapper>
);

export default FeaturesGrid;
