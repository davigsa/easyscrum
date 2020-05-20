import React, { FunctionComponent } from 'react';

import { Container, LeftContainer, RightContainer, Title } from './style';

const Board: FunctionComponent = () => {
  return (
      <Container>
          <LeftContainer>
            <Title>Hello board</Title>
          </LeftContainer>
          <RightContainer></RightContainer>
      </Container>
  );
}

export default Board;