import PropTypes from 'prop-types';
import { Box } from '@mui/material';

// Adicionar imagem
// <Box component="img" src="/static/logo.svg" sx={{ width: 40, height: 40, ...sx }} >Beer</Box>;

export default function Logo({ sx }) {
  return <Box sx={{ width: 40, height: 40, ...sx }}>Beer</Box>;
}

Logo.propTypes = {
  sx: PropTypes.object
};
