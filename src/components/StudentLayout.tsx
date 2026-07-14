import { Link, Outlet, useNavigate } from "react-router-dom";
import { account } from "../services/appwrite";

const StudentLayout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await account.deleteSession("current");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h1 className="text-2xl font-bold mb-10">
            Dashboard
          </h1>

          <div className="flex flex-col gap-3">
            <Link
              to="/students"
              className="hover:bg-blue-600 px-4 py-2 rounded-lg transition"
            >
              Student List
            </Link>

          </div>
        </div>

        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 transition px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </aside>

      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default StudentLayout;