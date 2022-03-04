import { withStyles } from '@material-ui/core/styles';
import React, { Component, Suspense } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import CreditsBody from '../../common/components/CreditsBody';
import { Section } from '../../components/Welcome/sectionStyles';
import cordovaScrollablePaneTopPadding from '../../utils/cordovaScrollablePaneTopPadding';
import { renderLog } from '../../common/utils/logging';

const WelcomeAppbar = React.lazy(() => import(/* webpackChunkName: 'WelcomeAppbar' */ '../../components/Navigation/WelcomeAppbar'));
const WelcomeFooter = React.lazy(() => import(/* webpackChunkName: 'WelcomeFooter' */ '../../components/Welcome/WelcomeFooter'));


class Credits extends Component {
  static getProps () {
    return {};
  }

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  render () {
    renderLog('Credits');  // Set LOG_RENDER_EVENTS to log all renders
    return (
      <Wrapper>
        <Helmet title="Credits - We Vote" />
        <Suspense fallback={<></>}>
          <WelcomeAppbar pathname="/more/pricing" />
        </Suspense>
        <HeaderForCredits>
          <CreditsTitle>Credits &amp; Thanks</CreditsTitle>
        </HeaderForCredits>
        <Section noTopMargin>
          <CreditsBody />
        </Section>
        <Suspense fallback={<></>}>
          <WelcomeFooter />
        </Suspense>
      </Wrapper>
    );
  }
}

const styles = (theme) => ({
  buttonContained: {
    borderRadius: 32,
    height: 50,
    [theme.breakpoints.down('md')]: {
      height: 36,
    },
  },
});

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background: white;
  overflow-x: hidden;
  padding-top: ${() => cordovaScrollablePaneTopPadding()}
`;

const HeaderForCredits = styled.div`
  position: relative;
  height: 190px;
  width: 110%;
  color: white;
  background-image: linear-gradient(to bottom, #415a99, #2d3b5e);
  border-bottom-left-radius: 50% 25%;
  border-bottom-right-radius: 50% 25%;
  padding: 0 2em;
  margin-top: -72px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 190px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    height: 150px;
  }
`;

const CreditsTitle = styled.h1`
  font-weight: bold;
  font-size: 36px;
  text-align: center;
  margin-top: 3em;
  margin-bottom: 0;
  padding-bottom: 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    margin-top: 3em;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.xs}) {
    font-size: 18px;
    margin-top: 5em;
  }
`;

export default withStyles(styles)(Credits);