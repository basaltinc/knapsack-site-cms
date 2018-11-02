import App, { Container } from 'next/app';
import Page from '../components/Page';

class BedrockWrapper extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Page suppressClassNameWarning>
          <Component {...pageProps} />
        </Page>
      </Container>
    );
  }
}

export default BedrockWrapper;
