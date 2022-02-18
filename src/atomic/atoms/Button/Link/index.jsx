import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import plusFill from '@iconify/icons-eva/plus-fill';

export default function ({ redirect, text }) {
  return (
    <Button
      variant="contained"
      component={RouterLink}
      to={redirect}
      startIcon={<Icon icon={plusFill} />}
    >
      {text}
    </Button>
  );
}
