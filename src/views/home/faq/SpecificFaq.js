import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeFaqActions } from "../../../store/home/faq";
import InputComponent from "../../../components/InputComponent";
import ButtonUpdateGroupComponent from "../../../components/ButtonGroupComponent";
import ButtonCreateGroupComponent from "../../../components/ButtonCreateGroupComponent";
import { useSelector } from "react-redux";

const SpecificFaq = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const { id } = useParams();
  const { mountNumber, faqs } = useSelector((state) => state.homeFaq);

  useEffect(() => {
    if (mountNumber === 0) {
      // http get request
    } else {
      const filterValue = faqs.find((v) => v.id === id);
      if (filterValue) {
        setQuestion(filterValue.question);
        setAnswer(filterValue.answer);
      }
    }
  }, [mountNumber, id, faqs]);

  console.log("spe");

  return (
    <div>
      <InputComponent value={question} setValue={setQuestion} name="Question" />
      <InputComponent value={answer} setValue={setAnswer} name="Answer" />

      {id && id === "new-faq" ? (
        <div>
          <ButtonCreateGroupComponent
            url="/home/add-faq"
            action={homeFaqActions}
            backRoute="/home-page/faq"
            data={{ question, answer }}
          />
        </div>
      ) : (
        <div>
          <ButtonUpdateGroupComponent
            updateUrl="/home/update-faq"
            deleteUrl="/home/delete-faq"
            action={homeFaqActions}
            backRoute="/home-page/faq"
            id={id}
            data={{ question, answer }}
          />
        </div>
      )}
    </div>
  );
};

export default SpecificFaq;
