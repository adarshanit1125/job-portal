import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addJob, deleteJob, updateJob } from "../../redux/jobSlice";

const RecruiterDashboard = () => {
    const dispatch = useDispatch();

    const jobs = useSelector((state) => state.jobs.jobs) || [];
    const { user } = useSelector((state) => state.auth);

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [editId, setEditId] = useState(null);

    const recruiterJobs = jobs.filter(
        (job) => job.owner === "recruiter"
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            dispatch(
                updateJob({
                    id: editId,
                    title,
                    company,
                    owner: "recruiter",
                })
            );
            setEditId(null);
        } else {
            dispatch(
                addJob({
                    id: Date.now(),
                    title,
                    company,
                    owner: "recruiter",
                })
            );
        }

        setTitle("");
        setCompany("");
    };

    const handleEdit = (job) => {
        setEditId(job.id);
        setTitle(job.title);
        setCompany(job.company);
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <h1 className="text-3xl font-bold mb-2">
                    Welcome, {user?.name}
                </h1>
                <p className="text-gray-600 mb-8">
                    Manage your job postings
                </p>

                {/* Stats */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Total Jobs</p>
                        <h2 className="text-3xl font-bold">
                            {recruiterJobs.length}
                        </h2>
                    </div>
                </div>

                {/* Job Form */}
                <div className="bg-white p-6 rounded-xl shadow mb-10">
                    <h2 className="text-xl font-semibold mb-4">
                        {editId ? "Update Job" : "Post New Job"}
                    </h2>

                    <form
                        onSubmit={handleSubmit}
                        className="grid md:grid-cols-3 gap-4"
                    >
                        <input
                            type="text"
                            placeholder="Job Title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border p-3 rounded"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            className="border p-3 rounded"
                            required
                        />

                        <button
                            className={`text-white rounded px-4 py-3 ${editId
                                ? "bg-indigo-600 hover:bg-indigo-700"
                                : "bg-green-600 hover:bg-green-700"
                                } transition`}
                        >
                            {editId ? "Update Job" : "Post Job"}
                        </button>
                    </form>
                </div>

                {/* Job List */}
                <h2 className="text-2xl font-semibold mb-4">
                    Your Job Listings
                </h2>

                {recruiterJobs.length === 0 ? (
                    <p className="text-gray-500">
                        No jobs posted yet
                    </p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {recruiterJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                            >
                                <h3 className="text-lg font-semibold mb-1">
                                    {job.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {job.company}
                                </p>

                                <div className="flex gap-3">
                                    <button
                                        onClick={() => handleEdit(job)}
                                        className="text-sm bg-indigo-500 text-white px-3 py-1 rounded hover:bg-indigo-600"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() =>
                                            dispatch(deleteJob(job.id))
                                        }
                                        className="text-sm bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RecruiterDashboard;
