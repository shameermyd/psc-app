import { useState } from "react";
import { quizQuestions } from "../data/quiz";

const Quiz = () => {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleSelect = (qId, option) => {
        setAnswers({ ...answers, [qId]: option });
    };

    const handleSubmit = () => {
        let total = 0;

        quizQuestions.forEach((q) => {
            if (answers[q.id] === q.answer) {
                total++;
            }
        });

        setScore(total);
    };

    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Quiz</h1>

            {quizQuestions.map((q) => (
                <div key={q.id} className="mb-4 border p-4 rounded">
                    <p className="font-semibold">{q.question}</p>

                    {q.options.map((opt) => (
                        <div key={opt}>
                            <label>
                                <input
                                    type="radio"
                                    name={`q-${q.id}`}
                                    value={opt}
                                    onChange={() => handleSelect(q.id, opt)}
                                />
                                <span className={`p-1 ${answers[q.id] === opt ? "bg-slate-200 rounded-2xl" : ""}`}>{opt}</span> 
                                {/* className="ml-2" */}
                            </label>
                        </div>
                    ))}
                </div>
            ))}

            <button
                onClick={handleSubmit}
                className="bg-green-600 text-white px-4 py-2 rounded"
            >
                Submit
            </button>

            {score !== null && (
                <p className="mt-4 font-bold">
                    Your Score: {score} / {quizQuestions.length}
                </p>
            )}
        </div>
    );
};

export default Quiz;
