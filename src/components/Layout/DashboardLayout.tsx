import { FaRobot, FaBell, FaCog } from "react-icons/fa";
import Link from "next/link";

const DashboardLayout = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur-xl border-b border-gray-800/50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <FaRobot className="text-white text-sm" />
              </div>
              <span className="font-bold text-xl text-white">ChatTime AI</span>
            </div>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                href="/dashboard"
                className="text-purple-400 font-semibold border-b-2 border-purple-400 pb-1"
              >
                Dashboard
              </Link>
              <Link
                href="/inbox"
                className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
              >
                Inbox
              </Link>
              <Link
                href="/analytics"
                className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
              >
                Analytics
              </Link>
              <Link
                href="/training"
                className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
              >
                Training
              </Link>
              <Link
                href="/settings"
                className="text-gray-400 hover:text-purple-400 font-medium transition-colors"
              >
                Settings
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <FaBell className="text-xl" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <FaCog className="text-xl" />
            </button>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              U
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardLayout;
