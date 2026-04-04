import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

const CourseDetails = () => {
    const { id } = useParams();
    const course = courses.find((c) => c.id === parseInt(id));
    console.log(course);

    if (!course) {
        return <p className="p-6">Course not found</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-xl w-full bg-white border p-6 rounded shadow">
                <h1 className="text-2xl font-bold">{course.title}</h1>

                <p className="text-blue-600 mt-2">{course.category}</p>

                <p className="mt-4 text-gray-700">{course.description}</p>

                <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded">
                    Enroll Now
                </button>
            </div>
        </div>
    )


}
export default CourseDetails;


{/* <div className="p-6">
            <h1 className="text-2xl font-bold">{course.title}</h1>

            <p className="text-gray-600 mt-2">{course.category}</p>

            <p className="mt-4">{course.description}</p>

            <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded">
                Enroll Now
            </button>
        </div> */}