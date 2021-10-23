import { ReactComponent as Calendar } from '../../assets/Calendar.svg';
import { ReactComponent as Logo } from '../../assets/Logo.svg';
import { ReactComponent as Facebook } from '../../assets/Facebook.svg';
import { ReactComponent as Twitter } from '../../assets/Twitter.svg';
import { ReactComponent as Instagram } from '../../assets/Instagram.svg';

import * as S from './styles';
import Heading from '../Heading';
import Link from '../Link';
import Paragraph from '../Paragraph';
import Box from '../Box';

const Footer = () => {
  return (
    <S.Footer>
      <Heading xxlFontSize='2.8rem'>Become a nanny share host</Heading>
      <Box margin='0 0 2.4rem' lgMargin='1.6rem 0 0'>
        <Paragraph xxlFontSize='1.8rem'>
          Takes less than 5 minutes to get started
        </Paragraph>
      </Box>
      <Box margin='2.4rem 0' lgMargin='3.2rem 0 2.4rem'>
        <S.LinkButton
          padding='1.2rem 3.7rem 1.2rem 2.5rem'
          color='#fff'
          backgroundColor='#5E20A4'
          borderRadius='4px'
        >
          <Calendar />
          <Box margin='0 0 0 2.1rem'>
            <Paragraph>Create Your Nanny Share</Paragraph>
            <Paragraph style={{ fontSize: '1.2rem', lineHeight: '1.6rem' }}>
              Takes less than 5 minutes
            </Paragraph>
          </Box>
        </S.LinkButton>
      </Box>
      <Link decoration color='#5E20A4' fontSize='1.6rem'>
        Or browse local nanny-shares
      </Link>
      <S.FooterBottom>
        <span style={{ flex: '1' }}>
          <Logo />
        </span>
        <S.Nav>
          <Link fontSize='1.4rem' color='#3D3D3D'>
            Share Your Nanny
          </Link>
          <Link fontSize='1.4rem' color='#3D3D3D'>
            Our Story
          </Link>
          <Link fontSize='1.4rem' color='#3D3D3D'>
            Blog
          </Link>
          <Link fontSize='1.4rem' color='#3D3D3D'>
            Terms & Privacy
          </Link>
        </S.Nav>
        <S.SocialMediaContainer>
          <Link>
            <Facebook />
          </Link>
          <Link>
            <Twitter />
          </Link>
          <Link>
            <Instagram />
          </Link>
        </S.SocialMediaContainer>
      </S.FooterBottom>
      <S.FooterDivider />
      <Box margin='0' mdMargin='7.5rem 0 0'>
        <Paragraph style={{ fontSize: '1.2rem' }}>
          Copyright © 2017 Hapu PTY Limited All rights reserved
        </Paragraph>
      </Box>
    </S.Footer>
  );
};

export default Footer;
