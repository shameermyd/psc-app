const Home = () => {
    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold">Courses</h2>

            <div className="mt-4 border p-4 rounded shadow">
                <h3 className="text-xl font-bold">PSC Crash Course</h3>
                <p>Basic preparation course</p>
                <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">
                    Start Learning
                </button>
            </div>
        </div>
    );
}
export default Home;