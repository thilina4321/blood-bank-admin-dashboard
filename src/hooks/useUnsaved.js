import React, { useEffect, useState } from "react";
import { Prompt } from "react-router-dom";

const useUnsaved = (message = "Do you want to leave") => {
  const [isDirty, setIsDirty] = useState(false);
  useEffect(() => {
    window.onbeforeunload = isDirty && (() => message);

    return () => (window.onbeforeunload = null);
  }, [isDirty, message]);

  const prompt = <Prompt when={isDirty} message={message} />;
  return [prompt, () => setIsDirty(true), () => setIsDirty(false)];
};

export default useUnsaved;
