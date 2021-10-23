import * as S from './styles';
import { ReactComponent as Badge } from '../../assets/Badge.svg';
import { ReactComponent as PlayIcon } from '../../assets/PlayIcon.svg';
import ProfileImage from '../../assets/ProfileImage.png';
import HeaderContentImage from '../../assets/HeaderContent.png';
import Link from '../Link';
import Image from '../Image';

const Header = () => {
  return (
    <>
      <S.Container>
        <S.Top>
          <span>
            <Badge />
          </span>
          <S.TopInner>
            <S.Nav>
              <S.NavLink>Create Your Nanny Share</S.NavLink>
              <S.NavLink>Browse Shares</S.NavLink>
              <S.NavLink>Our Story</S.NavLink>
            </S.Nav>
            <span>
              <Link
                padding='1.2rem 2.1rem'
                backgroundColor='#00a870'
                borderRadius='4px'
                fontSize='1.4rem'
                lineHeight='2rem'
              >
                Become a Nanny Share Host
              </Link>
              <S.SignInLink>Sign In</S.SignInLink>
            </span>
          </S.TopInner>
        </S.Top>
        <S.Content>
          <S.ContentInner>
            <S.Heading>
              Easily create or join a local nanny share with Hapu
            </S.Heading>
            <S.Paragraph>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </S.Paragraph>
            <S.ContentVideo>
              <S.VideoButtonContainer>
                <PlayIcon />
              </S.VideoButtonContainer>
              <Link fontSize='1.6rem' decoration>
                See hapu in action (27 seconds)
              </Link>
            </S.ContentVideo>
          </S.ContentInner>
          <Image src={HeaderContentImage} xlVisible />
        </S.Content>
      </S.Container>
      <S.Divider>
        <img src={ProfileImage} alt='Sarah' width='56' />
        <S.DividerLink decoration color='#5E20A4'>
          Sarah’s day care available now in North Sydney
        </S.DividerLink>
        <S.DividerText>Wednesday, Thursday, Friday - 7:30 - 5:30</S.DividerText>
      </S.Divider>
    </>
  );
};

export default Header;
