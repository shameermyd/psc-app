import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useState } from "react";

const Home = () => {

    const navigate = useNavigate();
    const [openCategory, setOpenCategory] = useState(null);

    const toggleCategory = (category) => {
        setOpenCategory(openCategory === category ? null : category);
    };

    // group by category
    const groupedCourses = courses.reduce((acc, course) => {
        if (!acc[course.category]) {
            acc[course.category] = [];
        }
        acc[course.category].push(course);
        return acc;
    }, {});


    return (
        <div className="p-6">
            <div className="bg-blue-600 text-white p-8 rounded mb-6 text-center">
                <h1 className="text-3xl font-bold">Kerala PSC Coaching</h1>
                <p className="mt-2">Prepare smart. Crack exams faster.</p>

                <button
                    onClick={() => navigate("/quiz")}
                    className="mt-4 bg-white text-blue-600 px-4 py-2 rounded"
                >
                    Try Free Quiz
                </button>
            </div>
            <h1 className="text-2xl font-bold mb-6">PSC Courses</h1>

            {/* {Object.keys(groupedCourses).map((category) => (
                <div key={category} className="mb-8">

                    <h2 className="text-xl font-semibold mb-4 text-blue-600">
                        {category}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        {groupedCourses[category].map((course) => (
                            <div className="border p-4 rounded shadow hover:shadow-lg transition bg-white">
                                <h3 className="font-bold text-lg">{course.title}</h3>

                                <p className="text-sm mt-2 text-gray-600">
                                    {course.description}
                                </p>

                                <button
                                    onClick={() => navigate(`/course/${course.id}`)}
                                    className="mt-3 bg-blue-500 text-white px-3 py-1 rounded w-full"
                                >
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))} */}
            {Object.keys(groupedCourses).map((category) => (
                <div key={category} className="mb-6 border rounded">

                    {/* Header */}
                    <div
                        onClick={() => toggleCategory(category)}
                        className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
                    >
                        <h2 className="text-lg font-semibold text-blue-600">
                            {category}
                        </h2>

                        <span>
                            {openCategory === category ? "▲" : "▼"}
                        </span>
                    </div>

                    {/* Content */}
                    {openCategory === category && (
                        <div className="grid md:grid-cols-3 gap-4 p-4">
                            {groupedCourses[category].map((course) => (
                                <div
                                    key={course.id}
                                    className="border p-4 rounded shadow hover:shadow-lg transition bg-white"
                                >
                                    <h3 className="font-bold text-lg">{course.title}</h3>

                                    <p className="text-sm mt-2 text-gray-600">
                                        {course.description}
                                    </p>

                                    <button
                                        onClick={() => navigate(`/course/${course.id}`)}
                                        className="mt-3 bg-blue-500 text-white px-3 py-1 rounded w-full"
                                    >
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div >
    );
};

export default Home;

// const Home = () => {
//     return (
//         <div className="p-6">
//             <h2 className="text-2xl font-semibold">Courses</h2>

//             <div className="mt-4 border p-4 rounded shadow">
//                 <h3 className="text-xl font-bold">PSC Crash Course</h3>
//                 <p>Basic preparation course</p>
//                 <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
//                     Start Learning
//                 </button>
//             </div>
//         </div>
//     );
// }
// export default Home;