import ImageSection1 from '../../assets/ImageSection1.png';
import ImageSection3 from '../../assets/ImageSection3.png';
import ImageSection4 from '../../assets/ImageSection4.png';
import ImageSection5 from '../../assets/ImageSection5.svg';
import { ReactComponent as LoadingIcon } from '../../assets/Loading.svg';
import Divider from '../Divider';
import Heading from '../Heading';
import Box from '../Box';
import Paragraph from '../Paragraph';
import * as S from './styles';
import Image from '../Image';
import Link from '../Link';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../api/api';

const Main = () => {
  const { register, handleSubmit, getValues } = useForm();
  const [loading, setLoading] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    text: '',
    color: '',
  });

  const submitForm = async () => {
    const { name, email } = getValues();

    setLoading(true);
    try {
      await api.post('/challenge-newsletter/', { name, email });
      setSubscriptionStatus({
        text: 'Subscribed successfully!',
        color: '#00A870',
      });
    } catch (e) {
      const color = '#d20000';
      if (e.response.status === 400) {
        setSubscriptionStatus({
          text: 'Could not subscribe, please enter a valid email',
          color,
        });
        return;
      }
      setSubscriptionStatus({
        text: 'Could not subscribe, please try again later',
        color,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      <S.Section
        smPadding='6.4rem 3.4rem'
        xlPadding='6.4rem 8rem'
        xxlPadding='12rem 12.8rem 12rem 22.8rem'
        lgTextAlign='left'
        lgFlexDirection='row-reverse'
        lgAlignItems='flex-start'
      >
        <Box margin='0 0 2.4rem 0' lgMargin='0 0 0 5.6rem'>
          <Image
            src={ImageSection1}
            mobileWidth='calc(212px + 25.84vw)'
            maxWidth='584px'
          />
        </Box>
        <S.Column>
          <Heading xxlFontSize='2.8rem' lgTextAlign='left'>
            Share your home,
            <br />
            nanny and costs
          </Heading>
          <Box margin='1.6rem 0 2.4rem' lgMargin='4rem 0'>
            <Paragraph lgTextAlign='left' xxlMaxWidth='48ch'>
              You have a fantastic home, a fantastic nanny and wouldn’t cutting
              your costs in half be, well, fantastic?! If only it was easy to
              connect with other parents to share your costs? Well now it is,
              with Hapu.{' '}
              <Link decoration color='#5e20a4' style={{ display: 'inline' }}>
                Hapu means tribe
              </Link>{' '}
              and it’s our foundational 3 tribal principles that empowers you to
              create and manage your own tribe. A tribe that together has the
              power to create new affordable solutions in childcare that work
              for you and your community.
            </Paragraph>
          </Box>
          <Link decoration color='#5e20a4' fontSize='1.6rem'>
            Ready to get started?
          </Link>
        </S.Column>
      </S.Section>
      <Divider />
      <S.Section>
        <Heading>
          Are you a parent without a nanny and looking to share?
        </Heading>
        <Box margin='1.6rem 0 3.2rem' lgMargin='1.6rem 7.4rem'>
          <Paragraph>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </Paragraph>
        </Box>
        <S.Form>
          <S.Input
            placeholder='Your name'
            type='text'
            {...register('name', { required: true })}
          />
          <S.Input
            placeholder='Your email'
            {...register('email', { required: true })}
            type='email'
          />
          <S.Button onClick={handleSubmit(submitForm)}>
            {loading ? <LoadingIcon /> : 'Send'}
          </S.Button>
        </S.Form>
        {subscriptionStatus.text && (
          <Box margin='3rem 0 0'>
            <Paragraph style={{ color: subscriptionStatus.color }}>
              {subscriptionStatus.text}
            </Paragraph>
          </Box>
        )}
      </S.Section>
      <Divider />
      <S.Section
        lgFlexDirection='row'
        lgAlignItems='flex-start'
        lgTextAlign='left'
        xlPadding='6.4rem 8rem;'
        xxlPadding='9.6rem 22.8rem'
      >
        <Box lgMargin='0 4.4rem 0 0'>
          <Image src={ImageSection3} mobileWidth='312px' xlWidth='456px' />
        </Box>
        <S.Column>
          <Box margin='4rem 0 0 0' lgMargin='0'>
            <Heading xxlFontSize='2.8rem' lgTextAlign='left'>
              Shared payments made simple
            </Heading>
          </Box>
          <Box margin='1.6rem 0 2.4rem' lgMargin='4rem 0'>
            <Paragraph lgTextAlign='left' xxlMaxWidth='48ch'>
              Sometimes it’s hard enough just sharing a restaurant bill. Try
              sharing that bill week in, week out and you might encounter more
              than a few snares. But not with Hapu. Simply set your rates and
              our automated payment system takes care of the rest. You need
              never talk money or who owes what.
            </Paragraph>
          </Box>
          <Link decoration color='#5E20A4' fontSize='1.6rem'>
            Read how Bridget’s share (without Hapu) ended over $15
          </Link>
        </S.Column>
      </S.Section>
      <Divider />
      <S.Section xxlPadding='9.6rem 22.8rem 10.4rem'>
        <Heading xxlFontSize='2.8rem'>
          A framework built for the long term
        </Heading>
        <Box margin='1.6rem 0 2.4rem' lgMargin='4rem 10rem'>
          <Paragraph>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </Paragraph>
        </Box>
        <Link decoration color='#5E20A4' fontSize='1.6rem'>
          Read how Hapu’s tribal background defines our app
        </Link>
        <Box lgMargin='6.4rem 0 0'>
          <Image src={ImageSection4} xlVisible />
        </Box>
      </S.Section>
      <Divider />
      <S.Section xxlPadding='9.6rem 32.8rem 12.0rem'>
        <Image src={ImageSection5} mobileWidth='216px' />
        <Box margin='2.4rem 0 1.6rem' lgMargin='4rem 0 4rem'>
          <Heading xxlFontSize='2.8rem'>
            Coming soon: Nanny Share Daily Diary!
          </Heading>
        </Box>
        <Paragraph>
          With the Hapu daily diary your nanny will be able to update you and
          your sharers with photos and commentary of the day. You and sharers
          will receive notifications and you’ll be able to login to view the
          daily adventures fo your little ones. We can’t wait!
        </Paragraph>
      </S.Section>
    </S.Container>
  );
};

export default Main;
