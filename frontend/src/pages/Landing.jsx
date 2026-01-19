// import { Link } from "react-router-dom";

// export default function Landing() {
//   return (
//     <section className="min-h-screen flex flex-col items-center justify-center
//                         bg-gradient-to-b from-blue-100 to-white
//                         dark:from-gray-900 dark:to-gray-800
//                         text-center px-4">

//       <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 dark:text-blue-400 mb-4">
//         Discover, Review & Improve Local Stores
//       </h1>

//       <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
//         RateMyStore helps customers find the best stores and helps
//         business owners grow using real feedback.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 mt-8">
//         <Link to="/signup" className="btn-primary px-8 py-3">
//           Get Started
//         </Link>

//         <Link
//           to="/login"
//           className="border border-blue-600 text-blue-600
//                      dark:border-blue-400 dark:text-blue-400
//                      px-8 py-3 rounded-full hover:bg-blue-50
//                      dark:hover:bg-gray-700 transition"
//         >
//           Log In
//         </Link>
//       </div>

//       <img
//         src="https://cdn-icons-png.flaticon.com/512/2038/2038725.png"
//         alt="shopping"
//         className="mt-12 w-48 sm:w-64 opacity-90"
//       />
//     </section>
//   );
// }


import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Landing() {
  const { user } = useAuth();

  // 🔁 Redirect logged-in users to their dashboard
  if (user) {
    if (user.role === "ADMIN") return <Navigate to="/admin/dashboard" />;
    if (user.role === "OWNER") return <Navigate to="/owner/dashboard" />;
    if (user.role === "USER") return <Navigate to="/user/stores" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800
                    flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-4">
        Discover, Review & Improve Local Stores
      </h1>

      <p className="text-lg text-gray-300 max-w-2xl">
        RateMyStore helps customers find the best stores and helps
        business owners grow using real feedback.
      </p>

      <div className="flex gap-4 mt-8">
        <Link to="/signup" className="btn-primary">
          Get Started
        </Link>

        <Link
          to="/login"
          className="px-6 py-3 rounded-full border border-blue-400
                     text-blue-400 hover:bg-blue-400 hover:text-white
                     transition"
        >
          Log In
        </Link>
      </div>

      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038725.png"
        alt="store"
        className="mt-10 w-52 opacity-90 animate-page-enter"
      />
    </div>
  );
}
