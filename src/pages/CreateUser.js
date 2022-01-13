import React from 'react';
import { Container, Typography, Stack, Button } from '@mui/material';

import Page from '../atomic/atoms/LayoutPageHelmet';

const Index = () => (
  <Page title="Usuario | criar">
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4" gutterBottom>
          Usuario
        </Typography>
        <Button variant="contained">Voltar</Button>
      </Stack>
    </Container>
  </Page>
);

export default Index;
