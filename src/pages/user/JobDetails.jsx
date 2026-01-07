import { useParams } from "react-router-dom";
import { useState } from "react";

const JobDetails = () => {
    const { id } = useParams();
    const [applied, setApplied] = useState(false);

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold">Job Details</h1>
            <p className="mb-4">Job ID: {id}</p>

            {!applied ? (
                <button
                    onClick={() => setApplied(true)}
                    className="bg-blue-500 text-white px-4 py-2"
                >
                    Apply Job
                </button>
            ) : (
                <p className="text-green-600 font-semibold">
                    Application Submitted ✅
                </p>
            )}
        </div>
    );
};

export default JobDetails;
