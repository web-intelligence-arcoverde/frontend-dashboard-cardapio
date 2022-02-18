import { Container } from '@mui/material';
import Header from '../../molecules/Header';

import List from '../../molecules/ListBase';
import Page from '../../layout/ReactHelmetContainer';

export default function User() {
  return (
    <Page title="User | Cardapio">
      <Container>
        <Header title="Cargo" redirect="/dashboard/role/create" buttonName="Cadastrar cargo" />

        <List />
      </Container>
    </Page>
  );
}
