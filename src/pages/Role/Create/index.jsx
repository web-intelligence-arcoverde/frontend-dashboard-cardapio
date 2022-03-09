import React from 'react';
import { Container, Typography, Stack, Button, TextField } from '@mui/material';

import * as Yup from 'yup';

import { useFormik, Form, FormikProvider } from 'formik';

import { useDispatch } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import Page from '../../../atomic/layout/ReactHelmetContainer';

import { createRoleRequest } from '../../../store/modules/role/actions';

const Index = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const LoginSchema = Yup.object().shape({
    nome: Yup.string().required('O nome do cargo é obrigatorio')
  });

  const formik = useFormik({
    initialValues: {
      nome: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      dispatch(createRoleRequest(data));
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <Page title="Cargo | Criar">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Criar Novo Cargo
          </Typography>
          <Button
            variant="contained"
            onClick={(e) => navigate('/dashboard/role', { replace: true })}
          >
            Voltar
          </Button>
        </Stack>

        <FormikProvider value={formik} autocomplete="off">
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="Informe o nome do novo cargo"
                type="text"
                label="Cargo:"
                {...getFieldProps('nome')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                autoComplete="off"
                required
                inputProps={{
                  form: {
                    autocomplete: 'off'
                  }
                }}
              />

              <Button variant="contained" fullWidth size="large" disableElevation type="submit">
                Criar
              </Button>
            </Stack>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
};

export default Index;
