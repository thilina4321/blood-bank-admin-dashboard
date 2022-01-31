import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export const useCommonButtonLogic = (dispathFunc, navigate) => {
  const dispatch = useDispatch();
  const history = useHistory();

  dispatch(dispathFunc());
  history.push(navigate);
  return {};
};

