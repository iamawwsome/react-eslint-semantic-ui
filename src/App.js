import React from 'react';
import { Container, Breadcrumb, Header } from 'semantic-ui-react';

import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <Container>
    <Header style={{ marginTop: '20px' }}>Welcome!</Header>
    <Breadcrumb>
      <Breadcrumb.Section link>Home</Breadcrumb.Section>
      <Breadcrumb.Divider icon="right angle" />
      <Breadcrumb.Section active>Welcome!</Breadcrumb.Section>
    </Breadcrumb>
    <Container style={{ marginTop: '20px' }}>
      <p>
        Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus
        et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh
        ultricies vehicula.
      </p>
    </Container>
  </Container>
);

export default App;
