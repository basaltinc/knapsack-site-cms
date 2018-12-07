import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const ContributorsWrapper = styled.div`
  //max-width: 50%;
`;

const AvatarWrapper = styled.div`
  img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 0.75rem;
  }
`;

class Contributors extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contributors: [],
      ready: false,
    };
  }

  async componentDidMount() {
    const apiEndpoint =
      'https://api.github.com/repos/basaltinc/bedrock/contributors';
    await window
      .fetch(apiEndpoint)
      .then(res => res.json())
      .then(contributors => {
        this.setState({
          contributors,
          ready: true,
        });
      });
  }

  render() {
    if (!this.state.ready) {
      return <p>Loading...</p>;
    }
    const bedrockContributors = this.state.contributors;
    return (
      <ContributorsWrapper>
        <p>Bedrock Contributors</p>
        <AvatarWrapper>
          {bedrockContributors.map(contributor => (
            <Link href={contributor.url} key={contributor.url}>
              <a>
                <img src={contributor.avatar_url} alt={contributor.username} />
              </a>
            </Link>
          ))}
        </AvatarWrapper>
      </ContributorsWrapper>
    );
  }
}

export default Contributors;
