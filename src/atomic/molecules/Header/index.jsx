import React from 'react';

import { Stack, Typography } from '@mui/material';
import Button from '../../atoms/Button/Link';

export default function Header({ title, redirect, buttonName }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Button redirect={redirect} text={buttonName} />
    </Stack>
  );
}
