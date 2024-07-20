export default function NavBar() {
    return (
        <div className="bg-black">
        <div className="h-[5vh] grid grid-cols-3 gap-4 px-4 py-4">
            <a href="/feed" className="text-white">
                Feed
            </a>
            <a href="/" className="text-white">
                Upload
            </a>
            <a href="/profile" className="text-white">
                Profile
            </a>
        </div>
        </div>
    );
    }