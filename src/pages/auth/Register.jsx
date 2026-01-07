import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        role: "user",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(form);
        localStorage.setItem("users", JSON.stringify(users));

        navigate("/login");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        placeholder="Full Name"
                        className="w-full border p-3 rounded"
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded"
                        onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                        }
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-3 rounded"
                        onChange={(e) =>
                            setForm({ ...form, password: e.target.value })
                        }
                        required
                    />

                    <select
                        className="w-full border p-3 rounded"
                        onChange={(e) =>
                            setForm({ ...form, role: e.target.value })
                        }
                    >
                        <option value="user">User</option>
                        <option value="recruiter">Recruiter</option>
                    </select>

                    <button className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
