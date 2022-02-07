import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { homeFaqActions } from "../../../store/home/faq";
import InputComponent from "../../../components/InputComponent";
import ButtonUpdateGroupComponent from "../../../components/ButtonGroupComponent";
import ButtonCreateGroupComponent from "../../../components/ButtonCreateGroupComponent";
import { useSelector } from "react-redux";
import ImageUpload from "../../../components/ImageUpload";
import CodeEditor from "../../../components/CodeEditor";
import FullComponentForModel from "../../../components/FullComponentForModel";
import useUnsaved from "../../../hooks/useUnsaved";

const SpecificTransfusion = () => {
  const [prompt, setIsDirty, setIsClean] = useUnsaved();

  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [selectImage, setSelectImage] = useState("");
  const { id } = useParams();
  const { mountNumber, faqs } = useSelector((state) => state.homeFaq);

  // you may know model values
  const [youMayList, setYouMayList] = useState([]);
  const [modelTitle, setModelTitle] = useState("");
  const [modelDescription, setModelDescription] = useState("");
  const [modelUrl, setModelUrl] = useState("");
  const [selectModelImage, setSelectModelImage] = useState("");

  const inputElements = [
    { value: modelTitle, setValue: setModelTitle, name: "Title" },
    {
      value: modelDescription,
      setValue: setModelDescription,
      name: "Description",
    },
  ];
  const imageElements = [
    {
      url: modelUrl,
      setFile: setSelectModelImage,
      setModelUrl: setModelUrl,
    },
  ];

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

  console.log(youMayList, "youmayknowlist");

  return (
    <div>
      <ImageUpload url={url} setFile={setSelectImage} />
      <InputComponent
        value={title}
        setValue={() => {
          setTitle();
          setIsDirty();
        }}
        name="Title"
      />

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

      <FullComponentForModel
        setList={setYouMayList}
        title="You May Like"
        imageElements={imageElements}
        inputElements={inputElements}
        allMethods={(onClose) => {
          setModelTitle();
          setModelDescription();
          setModelUrl();
          if (!onClose) {
            // add to store
          }
        }}
        selectedItemMethod={({ title, description, imageUrl }) => {
          setModelTitle(title);
          setModelDescription(description);
          setModelUrl(imageUrl);

          // add to store
        }}
        addValues={() => {
          return {
            title: modelTitle,
            description: modelDescription,
            imageUrl: modelUrl,
          };
        }}
        updateValues={(item) => {
          item.title = modelTitle;
          item.description = modelDescription;
          item.imageUrl = modelUrl;
          return item;
        }}
      />

      {prompt}

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

// const onModelListHandler = () => {
//   let idOfItemSelectedForUpdate = selectedListItem.id;

//   if (idOfItemSelectedForUpdate) {
//     let item = modelList.find((l) => l.id === idOfItemSelectedForUpdate);
//     item.title = modelTitle;
//     item.description = modelDescription;
//     item.imageUrl = modelUrl;

//     setModelList((prev) => [
//       ...prev.filter((p) => p.id !== idOfItemSelectedForUpdate),
//       item,
//     ]);
//   } else {
//     setModelList((prev) => [
//       ...prev,
//       {
//         id: modelList.length + 1,
//         title: modelTitle,
//         description: modelDescription,
//         imageUrl: modelUrl,
//       },
//     ]);
//   }

//   setModelTitle("");
//   setModelDescription("");
//   setModelUrl("");
// };

// const onModelHandlerClose = () => {
//   setModelTitle("");
//   setModelDescription("");
//   setModelUrl("");
// };

// const OnSelecttListItem = (id) => {
//   const findItem = modelList.find((l) => l.id === id);
//   setSelectedListItem(findItem);
//   setModelTitle(findItem.title);
//   setModelDescription(findItem.description);
//   setModelUrl(findItem.imageUrl);
//   setIsOpen(true);
//   setModelType("update");
// };

// end model values
