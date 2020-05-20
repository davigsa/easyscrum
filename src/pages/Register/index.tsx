import React from 'react';
import Lottie from 'react-lottie';

import { Container, AnimationContainer, Title } from './style'
import Input from '../../components/input';
import beer from '../../static/beer.json';


const Register: React.FC = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: beer,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return(
      <Container>
        <AnimationContainer>
          <Lottie 
            options={defaultOptions}
            height={300}
            width={300}
          />
        </AnimationContainer>
        <Title>EASYSCRUM</Title>
        <Input 
          inputTitle='Shall we begin?' 
          inputText='username' 
          auxiliarText='Make sure you have the best username ;)' 
          textButton='Ready'
        />
      </Container>
  );
}

export default Register;