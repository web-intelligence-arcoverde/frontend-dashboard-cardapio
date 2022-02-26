import { useNavigate } from 'react-router';

const history = { navigate: () => {} };

export const useSetHistory = () => {
  history.navigate = useNavigate();
};

export const navigateTo = (route, ...params) => {
  history.navigate(route, ...params);
};
