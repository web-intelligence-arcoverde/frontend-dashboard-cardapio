import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stack,
  Button,
  TextField,
  IconButton,
  InputAdornment
} from '@mui/material';

import * as Yup from 'yup';
import { Icon } from '@iconify/react';

import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';

import { useFormik, Form, FormikProvider } from 'formik';

import Page from '../../atomic/layout/ReactHelmetContainer';
import Select from '../../atomic/atoms/Select';

const Index = () => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email tem que ser valido').required('Email é obrigatorio'),
    password: Yup.string().required('Password é obrigatorio')
  });

  const [role, setRole] = useState('');
  const roles = [
    { value: 'Admin', label: 'Admin' },
    { value: 'Gerente', label: 'Gerente' },
    { value: 'Outro', label: 'Outro' }
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: ''
    },
    validationSchema: LoginSchema,
    onSubmit: (data) => {
      console.log({ data, role });
    }
  });

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (
    <Page title="Usuario | Criar">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Criar Novo Usuario
          </Typography>
          <Button variant="contained">Voltar</Button>
        </Stack>

        <FormikProvider value={formik} autocomplete="off">
          <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                placeholder="Informe seu nome"
                type="text"
                label="Nome:"
                {...getFieldProps('name')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                autoComplete="off"
                inputProps={{
                  form: {
                    autocomplete: 'off'
                  }
                }}
              />

              <TextField
                fullWidth
                placeholder="username"
                type="email"
                label="Email"
                autoComplete="off"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />

              <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" spacing={4}>
                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  {...getFieldProps('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />

                <TextField
                  fullWidth
                  autoComplete="current-password"
                  type={showPassword ? 'text' : 'password'}
                  label="Password"
                  {...getFieldProps('password')}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                  error={Boolean(touched.password && errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Stack>

              <Select options={roles} value={role} onSort={setRole} />

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
