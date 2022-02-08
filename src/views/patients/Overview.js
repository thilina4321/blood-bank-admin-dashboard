import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { homeFaqActions } from "../../store/home/faq";

import { useHistory } from "react-router-dom";
import useHttp from "../../hooks/useHttp";
import InputComponent from "../../components/InputComponent";
import SaveButtonComponent from "../../components/SaveButtonComponent";
import CodeEditor from "../../components/CodeEditor";

const PatientOverview = () => {
  const [title, setTitle] = useState();
  const [description, setDesciption] = useState();

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

  console.log("data");

  const createOrUpdateFaq = (id) => {
    history.push(id ? `/patients/overview/${id}` : "/home-page/faq/new-faq");
  };

  return (
    <div>
      <InputComponent value={title} setValue={setTitle} name="Title" />
      <CodeEditor
        value={description}
        setValue={setDesciption}
        label="Description"
      />

      <SaveButtonComponent
        data={(title, description)}
        name="Save"
        clickHanlder={() => {}}
      />
    </div>
  );
};

export default PatientOverview;
