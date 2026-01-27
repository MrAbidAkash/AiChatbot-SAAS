import { FaRobot, FaBell } from "react-icons/fa";
import Link from "next/link";

const DashboardLayout = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaRobot className="text-white text-sm" />
              </div>
              <span className="font-bold text-xl text-gray-900">
                ChatTime AI
              </span>
            </div>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                href="/dashboard"
                className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
              >
                Dashboard
              </Link>
              <Link
                href="/inbox"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Inbox
              </Link>
              <Link
                href="/analytics"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Analytics
              </Link>
              <Link
                href="/training"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Training
              </Link>
              <Link
                href="/settings"
                className="text-gray-600 hover:text-blue-600 font-medium"
              >
                Settings
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative text-gray-600 hover:text-gray-900">
              <FaBell className="text-xl" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
              U
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardLayout;
