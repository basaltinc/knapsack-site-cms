import styled from 'styled-components';
import MediaCard from '../components/MediaCard';
import { Flex } from './styles/SliceStyles';

const FeaturesGridWrapper = styled.div`
  padding: 4rem 2rem;
`;

const FeaturesGrid = () => (
  <FeaturesGridWrapper id={'features'}>
    <Flex>
      <MediaCard
        imgSrc="../static/basalt-color.svg"
        title="Testing"
        copy="Testing out this new media card situation!"
      />
      <MediaCard
        imgSrc="../static/basalt-color.svg"
        title="Testing"
        copy="Testing out this new media card situation!"
      />
      <MediaCard
        imgSrc="../static/basalt-color.svg"
        title="Testing"
        copy="Testing out this new media card situation!"
      />
      <MediaCard
        imgSrc="../static/basalt-color.svg"
        title="Testing"
        copy="Testing out this new media card situation!"
      />
      <MediaCard
        imgSrc="../static/basalt-color.svg"
        title="Testing"
        copy="Testing out this new media card situation!"
      />
      <MediaCard
        imgSrc="../static/basalt-color.svg"
        title="Testing"
        copy="Testing out this new media card situation!"
      />
    </Flex>
  </FeaturesGridWrapper>
);

export default FeaturesGrid;
