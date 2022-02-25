import { useNavigate } from 'react-router-dom';

const Navigate = () => {
  const history = { navigate: () => {} };

  const useSetHistory = () => {
    history.navigate = useNavigate();
  };

  const navigateTo = (route, ...params) => {
    history.navigate(route, ...params);
  };
};

export default Navigate;
