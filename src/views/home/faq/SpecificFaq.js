import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { homeFaqActions } from "../../../store/home/faq";

const SpecificFaq = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams();
  const deleteFaq = () => {
    dispatch(homeFaqActions.deleteFaq(+id));
    history.push("/home-page/faq");
  };
  return (
    <div>
      <label> Name : </label>
      <input value={""} onChange={null} />
      <button onClick={deleteFaq}> Delete </button>
    </div>
  );
};

export default SpecificFaq;
