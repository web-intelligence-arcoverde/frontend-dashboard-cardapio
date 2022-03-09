import React from 'react';
import { Container, Typography, Stack, Button, TextField } from '@mui/material';

import * as Yup from 'yup';

import { useFormik, Form, FormikProvider } from 'formik';

import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import Page from '../../../atomic/layout/ReactHelmetContainer';

import { updateRoleRequest } from '../../../store/modules/role/actions';

const Index = () => {
  const role = useSelector((state) => state.role.role);

  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    nome: Yup.string().required('O nome do cargo é obrigatorio')
  });

  const formik = useFormik({
    initialValues: {
      nome: role.nome
    },

    validationSchema: LoginSchema,
    onSubmit: (data) => {
      const updateRole = {
        id: role.id,
        nome: data.nome
      };
      dispatch(updateRoleRequest(updateRole));
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  const navigate = useNavigate();

  return (
    <Page title="Cargo | Atualizar">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Atualizar Cargo
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
                error={Boolean(touched.nome && errors.nome)}
                helperText={touched.nome && errors.nome}
                autoComplete="off"
                required
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  form: {
                    autocomplete: 'off'
                  }
                }}
              />

              <Button variant="contained" fullWidth size="large" disableElevation type="submit">
                Atualizar
              </Button>
            </Stack>
          </Form>
        </FormikProvider>
      </Container>
    </Page>
  );
};

export default Index;
