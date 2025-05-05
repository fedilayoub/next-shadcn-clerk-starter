import Link from "next/link";
const NotFound = () => {
  return (
    <section className="container mx-auto flex min-h-screen items-center justify-center p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
        <p className="text-lg mb-4">The page you are looking for does not exist.</p>
        <Link href="/" className="flex items-center gap-x-1 text-blue-500 hover:text-blue-600 group">
         <span className="pb-1"> Go back to the home page</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-5 h-5 fill-blue-500 group-hover:translate-x-1 transition-all duration-300"
          >
            <path
              fillRule="evenodd"
              d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
