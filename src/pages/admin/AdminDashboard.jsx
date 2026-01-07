import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deleteJob, updateJob } from "../../redux/jobSlice";

const AdminDashboard = () => {
    const dispatch = useDispatch();

    // Safe selectors
    const jobs = useSelector((state) => state.jobs.jobs) || [];
    const { user } = useSelector((state) => state.auth);

    const [editId, setEditId] = useState(null);
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");

    const handleEdit = (job) => {
        setEditId(job.id);
        setTitle(job.title);
        setCompany(job.company);
    };

    const handleUpdate = (e) => {
        e.preventDefault();

        dispatch(
            updateJob({
                id: editId,
                title,
                company,
                owner: "admin",
            })
        );

        setEditId(null);
        setTitle("");
        setCompany("");
    };

    // Mock analytics
    const totalJobs = jobs.length;
    const totalRecruiters = 3;
    const totalUsers = 25;

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl font-bold">
                        Welcome, {user?.name}
                    </h1>
                    <p className="text-gray-600">
                        Admin control panel
                    </p>
                </div>

                {/* Analytics */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Total Jobs</p>
                        <h2 className="text-3xl font-bold">
                            {totalJobs}
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Recruiters</p>
                        <h2 className="text-3xl font-bold">
                            {totalRecruiters}
                        </h2>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                        <p className="text-gray-500">Users</p>
                        <h2 className="text-3xl font-bold">
                            {totalUsers}
                        </h2>
                    </div>
                </div>

                {/* Edit Job */}
                {editId && (
                    <div className="bg-white p-6 rounded-xl shadow mb-10">
                        <h2 className="text-xl font-semibold mb-4">
                            Edit Job
                        </h2>

                        <form
                            onSubmit={handleUpdate}
                            className="grid md:grid-cols-3 gap-4"
                        >
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="border p-3 rounded"
                                required
                            />
                            <input
                                value={company}
                                onChange={(e) =>
                                    setCompany(e.target.value)
                                }
                                className="border p-3 rounded"
                                required
                            />
                            <button className="bg-indigo-600 text-white rounded px-4 py-3 hover:bg-indigo-700">
                                Update Job
                            </button>
                        </form>
                    </div>
                )}

                {/* Job Management */}
                <h2 className="text-2xl font-semibold mb-4">
                    Manage Jobs
                </h2>

                {jobs.length === 0 ? (
                    <p className="text-gray-500">
                        No jobs available
                    </p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job) => (
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

export default AdminDashboard;
