import { useState } from "react";
import "./App.css";
import questions from "./constants/questions.json";
import Question from "./components/Question";
import Result from "./components/Result";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswers([...userAnswers, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
  };

  // console.log(userAnswers);

  return (
    <>
      <div className="app">
        <h1>World Quiz</h1>
        {currentQuestion < questions.length && (
          <Question
            question={questions[currentQuestion]}
            onAnswerClick={handleNextQuestion}
          />
        )}

        {currentQuestion === questions.length && (
          <Result
            userAnswers={userAnswers}
            questions={questions}
            resetQuiz={resetQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
