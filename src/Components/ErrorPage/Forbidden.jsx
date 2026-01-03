import { MdOutlineShieldMoon, MdHome, MdArrowBack, MdLock } from "react-icons/md";

const Forbidden = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 flex items-center justify-center px-4 relative overflow-hidden">
      <title>Spark Decore | Forbidden Access</title>

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating Lock Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <MdLock size={30} className="absolute top-10 left-10 text-pink-300/40 animate-bounce" />
        <MdLock size={24} className="absolute top-20 right-32 text-purple-300/40 animate-pulse" />
        <MdLock size={28} className="absolute bottom-32 left-20 text-indigo-300/40 animate-bounce delay-500" />
        <MdLock size={26} className="absolute bottom-20 right-20 text-pink-300/40 animate-pulse delay-700" />
        <MdLock size={32} className="absolute top-1/3 right-10 text-purple-300/40 animate-bounce delay-1000" />
        <MdLock size={22} className="absolute top-2/3 left-32 text-indigo-300/40 animate-pulse delay-300" />
      </div>

      {/* Main Content Card */}
      <div className="relative z-10 text-center max-w-2xl">

        {/* Animated Shield Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-pink-300/20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-purple-300/20 animate-pulse"></div>

            <div className="relative bg-white rounded-full p-8 shadow-2xl animate-bounce">
              <MdOutlineShieldMoon size={80} className="text-indigo-600" />
            </div>
          </div>
        </div>

        {/* 403 Error Code */}
        <div className="mb-6">
          <h1 className="text-9xl font-black bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text animate-pulse">
            403
          </h1>
        </div>

        {/* Title */}
        <div className="mb-4 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Access <span className="text-indigo-600">Forbidden</span>
          </h2>
        </div>

        {/* Description */}
        <div className="mb-8 animate-fade-in">
          <p className="text-gray-600 text-lg mb-2">
            Oops! You don't have permission to access this page.
          </p>
          <p className="text-gray-500">
            Please contact your administrator if you believe this is an error.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple-300/40 to-transparent"></div>
          <MdLock size={20} className="text-pink-500 animate-spin" style={{ animationDuration: "3s" }} />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-300/40 to-transparent"></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="btn btn-outline btn-lg gap-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white group hover:scale-105 transition-transform"
          >
            <MdArrowBack size={20} className="group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>

          <button
            onClick={handleGoHome}
            className="btn btn-lg gap-2 bg-indigo-600 hover:bg-indigo-700 text-white group hover:scale-105 transition-transform"
          >
            <MdHome size={20} className="group-hover:rotate-12 transition-transform" />
            Go to Home
          </button>
        </div>

        {/* Error Badge */}
        <div className="mt-12">
          <div className="badge badge-lg gap-2 bg-pink-500 text-white animate-pulse">
            <MdLock size={14} />
            <span className="font-mono">ERR_FORBIDDEN_403</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
