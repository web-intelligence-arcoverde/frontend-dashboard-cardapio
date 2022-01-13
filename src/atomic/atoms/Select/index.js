import PropTypes from 'prop-types';
// material
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

Select.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func,
  value: PropTypes.object
};

export default function Select({ options, onSort, value }) {
  return (
    <TextField
      select
      size="small"
      selectValue="latest"
      value={value}
      onChange={(e) => onSort(e.target.value)}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
