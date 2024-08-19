import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz({ className, score, setScore, category, difficulty }) {
    const [quiz, setQuiz] = useState(null);
    const [index, setIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isQuizOver, setIsQuizOver] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

    useEffect(() => {
        if (!quiz) {
            getQuestions();
        }
    }, [quiz]);

    const getQuestions = async () => {
        try {
            const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`);
            const results = response.data.results;
            if (index >= results.length) {
                setIsQuizOver(true); // Stop the quiz if the last question is reached
                return;
            }

            const currentQuestion = results[index];
            const formattedQuestion = currentQuestion.question.replace(/&quot;/g, '"');
            const allAnswers = [currentQuestion.correct_answer, ...currentQuestion.incorrect_answers];
            
            setQuiz({
                ...currentQuestion,
                question: formattedQuestion,
                allAnswers: shuffleArray(allAnswers),
            });

            setIndex((prevIndex) => prevIndex + 1);

            setSelectedAnswer(null);
            setIsAnswerSubmitted(false);
            setIsCorrect(null);
        } catch (error) {
            console.error('Error fetching quiz questions:', error);
        }
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const handleRadioChange = (event) => {
        setSelectedAnswer(event.target.value);
    };

    const handleSaveAnswer = (event) => {
        event.preventDefault();
    
        if (selectedAnswer === quiz.correct_answer) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setIsAnswerSubmitted(true);
    };

    return (
        <div className={className}>
            {isCorrect === true && (
                <div role="alert" className="alert alert-success">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Correct answer, you get 1 point</span>
                </div>
            )}
            {isCorrect === false && (
                <div role="alert" className="alert alert-error">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Wrong Answer</span>
                </div>
            )}
            {isQuizOver ? (
                <div className="flex justify-center mt-6 mr-2 ml-2 sm:mr-0 sm:ml-0">
                    <div className="card bg-primary text-primary-content w-screen">
                        <div className="card-body">
                            <h2 className="card-title">Quiz Over</h2>
                            <p>You've reached the end of the quiz & your score is: {score}</p>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {quiz && (
                        <div className="flex justify-center mt-6">
                            <div className="card bg-primary text-primary-content w-screen">
                                <div className="card-body">
                                    <h2 className="card-title">Question</h2>
                                    <p>{quiz.question}</p>
                                    <form onSubmit={handleSaveAnswer}>
                                        {quiz.allAnswers.map((answer, idx) => (
                                            <div className="form-control" key={idx}>
                                                <label className="label cursor-pointer">
                                                    <span className="label-text text-primary-content font-bold">{answer}</span>
                                                    <input 
                                                        type="radio" 
                                                        name="radio-quiz" 
                                                        value={answer} 
                                                        checked={selectedAnswer === answer} 
                                                        onChange={handleRadioChange} 
                                                        className="radio checked:bg-accent" 
                                                    />
                                                </label>
                                            </div>
                                        ))}
                                        <div className="flex justify-center mt-4 gap-4">
                                            <button type="submit" disabled={isAnswerSubmitted} className="btn btn-primary">Save Answer</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="flex justify-center mt-4 gap-4">
                        <button className="btn btn-primary" onClick={getQuestions}>
                            {quiz ? 'Next Question' : 'Play Quiz'}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Quiz;



