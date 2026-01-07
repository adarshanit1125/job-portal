import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getJobs } from "../../redux/jobSlice";

const Jobs = () => {
    const dispatch = useDispatch();
    const { jobs, loading } = useSelector((state) => state.jobs);

    const [search, setSearch] = useState("");

    useEffect(() => {
        if (jobs.length === 0) {
            dispatch(getJobs());
        }
    }, [dispatch, jobs.length]);

    const filteredJobs = jobs.filter((job) =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <h1 className="text-3xl font-bold mb-6">
                    Explore Jobs
                </h1>

                {/* Search */}
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Search job title..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full md:w-1/2 border p-3 rounded-lg shadow-sm"
                    />
                </div>

                {/* Loading */}
                {loading && (
                    <p className="text-gray-500">Loading jobs...</p>
                )}

                {/* Job Cards */}
                {filteredJobs.length === 0 && !loading ? (
                    <p className="text-gray-500">
                        No jobs found
                    </p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-lg font-semibold">
                                        {job.title}
                                    </h2>
                                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                                        New
                                    </span>
                                </div>

                                <p className="text-gray-600 mb-4">
                                    {job.company}
                                </p>

                                <Link
                                    to={`/job/${job.id}`}
                                    className="inline-block mt-auto text-indigo-600 font-medium hover:underline"
                                >
                                    View Details →
                                </Link>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Jobs;
