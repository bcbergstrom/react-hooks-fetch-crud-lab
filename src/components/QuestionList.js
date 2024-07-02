import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions ,setReloadPage}) {
  const element = questions.map(question => <QuestionItem setReloadPage={setReloadPage} key={question.id} question={question}/>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{element}</ul>
    </section>
  );
}

export default QuestionList;
