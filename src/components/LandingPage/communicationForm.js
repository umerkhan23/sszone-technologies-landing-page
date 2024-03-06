import React from "react";

const CommunicationForm = () => {
  return (
    <>
      <div
        id="form"
        className="p-0.5 relative top-20 bg-[#82C047] border solid shadow-lg"
      ></div>
      <div className="flex mt-24 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl text-[#54b435] font-bold py-4">
            Frequent Questions
          </h1>
          <h1 className="text-justify mb-4">
            How do I get started with community gardening?
          </h1>
          <h1 className="text-justify mb-4">
            What are the benefits of community gardening?
          </h1>
          <h1 className="text-justify mb-4">
            How do I start a community garden?
          </h1>
          <h1 className="text-justify mb-4">
            What are the best plants for community gardening?
          </h1>
        </div>
      </div>
    </>
  );
};

export default CommunicationForm;
