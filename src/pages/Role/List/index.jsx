import { useSelector } from 'react-redux';

import { Container } from '@mui/material';

import Page from '../../../atomic/layout/ReactHelmetContainer';
import Header from '../../../atomic/molecules/Header';

/* componente especifico */
import List from '../../../atomic/organisms/ListRole';

export default function Role() {
  const test = useSelector((state) => state);

  return (
    <Page title="Cargo | Dashboard">
      <Container>
        <Header title="Cargo" redirect="/dashboard/role/create" buttonName="Cadastrar cargo" />
        <List />
      </Container>
    </Page>
  );
}
