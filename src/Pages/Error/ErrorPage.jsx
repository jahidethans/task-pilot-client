
const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-6">Oops!</h1>
                <p className="text-lg mb-8">Something went wrong. The page you are looking for might be unavailable.</p>
                <a href="/" className="text-blue-500 hover:underline text-lg">Redirect Home</a>
            </div>
        </div>
    );
};

export default ErrorPage;
