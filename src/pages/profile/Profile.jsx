import { useSelector } from "react-redux";

const Profile = () => {
    const { user, role } = useSelector((state) => state.auth);

    if (!user) return null;

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6">
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-center text-3xl font-bold mb-3">
                        {user.name.charAt(0).toUpperCase()}
                    </div>

                    <h2 className="text-xl font-semibold">
                        {user.name}
                    </h2>
                    <p className="text-gray-500 capitalize">
                        {role}
                    </p>
                </div>

                <div className="mt-6 space-y-3">
                    <div className="flex justify-between">
                        <span className="text-gray-500">Name</span>
                        <span className="font-medium">
                            {user.name}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Email</span>
                        <span className="font-medium">
                            {user.email}
                        </span>
                    </div>

                    <div className="flex justify-between">
                        <span className="text-gray-500">Role</span>
                        <span className="font-medium capitalize">
                            {role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
