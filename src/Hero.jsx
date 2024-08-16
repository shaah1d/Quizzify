import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Hero() {
    const [category, setCategory] = useState('any');
    const [difficulty, setDifficulty] = useState('easy');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Extract form data
        const formData = new FormData(event.target);
        const selectedCategory = formData.get('trivia_category');
        const selectedDifficulty = formData.get('trivia_difficulty');

        // Update the state (optional)
        setCategory(selectedCategory);
        setDifficulty(selectedDifficulty);

        // Navigate to the next page with the selected values
        navigate('/quiz', { state: { category: selectedCategory, difficulty: selectedDifficulty } });
    };

    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Quiz Generator</h1>
                        <p className="py-6">
                            Let's see how smart you really are!
                        </p>
                        <form onSubmit={handleSubmit}>
                            <select className="select select-primary w-full max-w-xs" name="trivia_category" defaultValue="any">
                                <option value="any">Select Category</option>
                                <option value="9">General Knowledge</option>
                                <option value="10">Entertainment: Books</option>
                                <option value="11">Entertainment: Film</option>
                                <option value="12">Entertainment: Music</option>
                                <option value="14">Entertainment: Television</option>
                                <option value="15">Entertainment: Video Games</option>
                                <option value="16">Entertainment: Board Games</option>
                                <option value="17">Science & Nature</option>
                                <option value="18">Science: Computers</option>                                                  
                                <option value="21">Sports</option>
                                <option value="22">Geography</option>
                                <option value="23">History</option>
                                <option value="24">Politics</option>
                                <option value="25">Art</option>
                                <option value="26">Celebrities</option>
                                <option value="27">Animals</option>
                                <option value="28">Vehicles</option>
                    
                       
                    
                            </select>
                            <select name="trivia_difficulty" className="select select-primary w-full max-w-xs mt-4" defaultValue="easy">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                            <div>
                                <button className="btn btn-primary text-primary-content mt-4" type="submit">Generate Quiz</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
