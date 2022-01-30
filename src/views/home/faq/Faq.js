import React, { Fragment, useEffect, useState } from "react";
import { CButton } from "@coreui/react";
import CardComponent from "../../../components/Card";
import { OutsideWrapper, InsideWrapper } from "../../../components/Wrapper";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { homeFaqActions } from "../../../store/home/faq";

const Faqs = () => {
  const dispatch = useDispatch();
  const { mountNumber, faqs } = useSelector((state) => state.homeFaq);
  const history = useHistory();

  useEffect(() => {
    if (mountNumber === 0) {
      dispatch(
        homeFaqActions.addFaqs([
          { id: 1, question: "q 1", answer: "answer 1" },
          { id: 2, question: "q 2", answer: "answer 2" },
          { id: 3, question: "q 3", answer: "answer 3" },
          { id: 4, question: "q 4", answer: "answer 4" },
        ])
      );
    }
    dispatch(homeFaqActions.setMountNumber(1));
  }, []);

  const createOrUpdateFaq = (id) => {
    history.push(id ? `/home-page/faq/${id}` : "/home-page/faq/new-faq");
  };

  return (
    <Fragment>
      <CButton onClick={() => createOrUpdateFaq(null)}>New Faq</CButton>
      <OutsideWrapper>
        {faqs.map((faq) => (
          <InsideWrapper key={faq.id}>
            <div onClick={() => createOrUpdateFaq(faq.id)}>
              <Faq id={faq.id} question={faq.question} answer={faq.answer} />
            </div>
          </InsideWrapper>
        ))}
      </OutsideWrapper>
    </Fragment>
  );
};

export default Faqs;

export const Faq = (props) => {
  const { id, question, answer } = props;
  return (
    <div style={{ cursor: "pointer" }}>
      <CardComponent question={question} answer={answer} />
    </div>
  );
};
