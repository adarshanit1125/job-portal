import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/authSlice";

/* default admin */
const initAdmin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (!users.find((u) => u.email === "admin@jobportal.com")) {
        users.push({
            name: "Admin",
            email: "admin@jobportal.com",
            password: "admin123",
            role: "admin",
        });
        localStorage.setItem("users", JSON.stringify(users));
    }
};

const Login = () => {
    initAdmin();

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // 🔹 Forgot password states
    const [showForgot, setShowForgot] = useState(false);
    const [forgotEmail, setForgotEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(
            (u) => u.email === email && u.password === password
        );

        if (!user) {
            setError("Invalid email or password");
            return;
        }

        dispatch(login({ role: user.role, user }));
        navigate("/");
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        alert(`Password reset link sent to ${forgotEmail} (mock)`);
        setForgotEmail("");
        setShowForgot(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
            <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Welcome Back
                </h2>

                {/* LOGIN FORM */}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border p-3 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border p-3 rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-red-600 text-sm">{error}</p>
                    )}

                    <button className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition">
                        Login
                    </button>
                </form>

                {/* FORGOT PASSWORD */}
                <div className="mt-4 text-center">
                    <button
                        onClick={() => setShowForgot(!showForgot)}
                        className="text-sm text-indigo-600 hover:underline"
                    >
                        Forgot password?
                    </button>
                </div>

                {showForgot && (
                    <form
                        onSubmit={handleForgotPassword}
                        className="mt-4 space-y-3"
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border p-3 rounded"
                            value={forgotEmail}
                            onChange={(e) => setForgotEmail(e.target.value)}
                            required
                        />
                        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
                            Send Reset Link
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Login;
