import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [reloadPage, setReloadPage] = useState(true)
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then( r=> r.json())
    .then(data => {setQuestions(data) 
      setReloadPage(false)
    })
  }, [reloadPage])
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm reloadPage={setReloadPage}/> : <QuestionList setReloadPage={setReloadPage} questions={questions}/>}
    </main>
  );
}

export default App;
