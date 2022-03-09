import { Container } from '@mui/material';

import List from 'src/atomic/organisms/ListRole';
import Page from 'src/atomic/layout/ReactHelmetContainer';
import Header from 'src/atomic/molecules/Header';

export default function Role() {
  return (
    <Page title="Cargo | Dashboard">
      <Container>
        <Header title="Cargo" redirect="/dashboard/role/create" buttonName="Cadastrar cargo" />
        <List />
      </Container>
    </Page>
  );
}
