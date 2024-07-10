export default function NavBar() {
    return (
        <div className="bg-black">
        <div className="grid grid-cols-3 gap-4 px-4 py-4">
            <a href="/" className="text-white">
                Feed
            </a>
            <a href="/login" className="text-white">
                Login
            </a>
            <a href="/profile" className="text-white">
                Profile
            </a>
        </div>
        </div>
    );
    }