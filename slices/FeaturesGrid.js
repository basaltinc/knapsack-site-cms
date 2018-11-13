import styled from 'styled-components';
import MediaCard from '../components/MediaCard';
import { Flex } from './styles/SliceStyles';

const FeaturesGridWrapper = styled.div`
  padding: 4rem 2rem;
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
      {/*<MediaCard*/}
        {/*imgSrc="../static/basalt-color.svg"*/}
        {/*title="Testing"*/}
        {/*copy="Testing out this new media card situation!"*/}
      {/*/>*/}
      {/*<MediaCard*/}
        {/*imgSrc="../static/basalt-color.svg"*/}
        {/*title="Testing"*/}
        {/*copy="Testing out this new media card situation!"*/}
      {/*/>*/}
    </Flex>
  </FeaturesGridWrapper>
);

export default FeaturesGrid;
