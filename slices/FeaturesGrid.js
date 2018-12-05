import styled from 'styled-components';
import MediaCard from '../components/MediaCard';
import { Flex } from './styles/SliceStyles';
import { features } from '../data/features';

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
      {features.map(feature => (
        <MediaCard
          key={feature.imgSrc}
          imgSrc={feature.imgSrc}
          title={feature.title}
          copy={feature.copy}
        />
      ))}
    </Flex>
  </FeaturesGridWrapper>
);

export default FeaturesGrid;
