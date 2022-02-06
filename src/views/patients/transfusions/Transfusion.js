import React, { Fragment, useEffect } from "react";
import { CButton } from "@coreui/react";
import CardComponent from "../../../components/Card";
import { OutsideWrapper, InsideWrapper } from "../../../components/Wrapper";
import { useSelector, useDispatch } from "react-redux";
import { homeFaqActions } from "../../../store/home/faq";

import { useHistory } from "react-router-dom";
import useHttp from "../../../hooks/useHttp";

const Transfusion = () => {
  const dispatch = useDispatch();
  const { mountNumber, faqs } = useSelector((state) => state.homeFaq);
  const history = useHistory();
  const getRequest = useHttp({
    url: "/home/get-faqs",
    method: "get",
    data: null,
    onSucsses: (data) => dispatch(homeFaqActions.addFaqs(data)),
  });

  useEffect(() => {
    const httpReq = async () => {
      if (mountNumber === 0) {
        await getRequest();
      }
      dispatch(homeFaqActions.setMountNumber(1));
    };

    httpReq();
  }, [dispatch, getRequest, mountNumber]);


  const createOrUpdateFaq = (id) => {
    history.push(id ? `/patients/transfusion/${id}` : "/patients/transfusion/new-transfusion");
  };

  return (
    <Fragment>
      <CButton onClick={() => createOrUpdateFaq(null)}>New Transfusion</CButton>
      <OutsideWrapper>
        {faqs.map((faq) => (
          <InsideWrapper key={faq.id}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => createOrUpdateFaq(faq.id)}
            >
              <CardComponent question={faq.question} answer={faq.answer} />
            </div>
          </InsideWrapper>
        ))}
      </OutsideWrapper>
    </Fragment>
  );
};

export default Transfusion;
