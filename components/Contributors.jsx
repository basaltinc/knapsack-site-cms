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

  componentDidMount() {
    // temporary endpoint until bedrock is public
    const contributors = [];
    const apiEndpoint =
      'https://api.github.com/repos/marywarrington/burrito-adventure/contributors';
    // const apiEndpoint = 'https://api.github.com/repos/basaltinc/bedrock/contributors';
    window
      .fetch(apiEndpoint)
      .then(res => res.json())
      .then(data =>
        data.map(contributor =>
          contributors.push({
            username: contributor.login,
            avatar: contributor.avatar_url,
            url: contributor.url,
          }),
        ),
      )
      .then(data => {
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
        Contributors
        <AvatarWrapper>
          {bedrockContributors.map(contributor => (
            <Link href={contributor.url} key={contributor.url}>
              <a>
                <img src={contributor.avatar} alt={contributor.username} />
              </a>
            </Link>
          ))}
        </AvatarWrapper>
      </ContributorsWrapper>
    );
  }
}

export default Contributors;
