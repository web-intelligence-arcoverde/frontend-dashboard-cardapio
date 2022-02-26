import { styled } from '@mui/material/styles';
import { Stack, Container, Typography } from '@mui/material';

// components
import Page from '../../atomic/layout/ReactHelmetContainer';
import LoginForm from '../../atomic/molecules/LoginForm';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export default function Login() {
  return (
    <RootStyle title="Entrar">
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack sx={{ mb: 5 }} direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h2" gutterBottom color="primary">
              Entrar
            </Typography>
          </Stack>

          <LoginForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
