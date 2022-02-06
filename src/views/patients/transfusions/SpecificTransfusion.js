import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeFaqActions } from "../../../store/home/faq";
import InputComponent from "../../../components/InputComponent";
import ButtonUpdateGroupComponent from "../../../components/ButtonGroupComponent";
import ButtonCreateGroupComponent from "../../../components/ButtonCreateGroupComponent";
import { useSelector } from "react-redux";
import ImageUpload from "../../../components/ImageUpload";
import CodeEditor from "../../../components/CodeEditor";

const SpecificTransfusion = () => {
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [selectImage, setSelectImage] = useState("");

  const { id } = useParams();
  const { mountNumber, faqs } = useSelector((state) => state.homeFaq);

  useEffect(() => {
    if (mountNumber === 0) {
      // http get request
    } else {
      const filterValue = faqs.find((v) => v.id === id);
      if (filterValue) {
        setTitle(filterValue.question);
        setShortDescription(filterValue.answer);
      }
    }
  }, [mountNumber, id, faqs]);

  console.log("select file", selectImage);

  return (
    <div>
      <ImageUpload url={url} setFile={setSelectImage} />
      <InputComponent value={title} setValue={setTitle} name="Title" />

      <CodeEditor
        label="Short Description"
        value={shortDescription}
        setValue={setShortDescription}
      />

      <CodeEditor
        label="Description"
        value={description}
        setValue={setDescription}
      />

      {id && id === "new-faq" ? (
        <div>
          <ButtonCreateGroupComponent
            url="/home/add-faq"
            action={homeFaqActions}
            backRoute="/home-page/faq"
            data={{ question: title, answer: shortDescription }}
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
            data={{ question: title, answer: shortDescription }}
          />
        </div>
      )}
    </div>
  );
};

export default SpecificTransfusion;
