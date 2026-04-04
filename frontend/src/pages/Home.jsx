import { useNavigate } from "react-router-dom";
import { courses } from "../data/courses";

const Home = () => {

    const navigate = useNavigate();
    // group by category
    const groupedCourses = courses.reduce((acc, course) => {
        if (!acc[course.category]) {
            acc[course.category] = [];
        }
        acc[course.category].push(course);
        return acc;
    }, {});
    console.log(courses,'=====courses');
    console.log(groupedCourses);
    

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">PSC Courses</h1>

            {Object.keys(groupedCourses).map((category) => (
                <div key={category} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-blue-600">
                        {category}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        {groupedCourses[category].map((course) => (
                            <div
                                key={course.id}
                                className="border p-4 rounded shadow hover:shadow-lg transition"
                            >
                                <h3 className="font-bold text-lg">{course.title}</h3>
                                <p className="text-sm mt-2">{course.description}</p>

                                <button 
                                    className="mt-3 bg-blue-500 text-white px-3 py-1 rounded"
                                    onClick={() => navigate(`/course/${course.id}`)}
                                >
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
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