import { useHistory } from "react-router-dom";

const useVendingMachine = () => {
  const history = useHistory();

  const handleClick = (route) => {
    history.push(route);
  };

  return handleClick;
};

export default useVendingMachine;