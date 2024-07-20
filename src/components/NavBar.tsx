export default function NavBar() {
    return (
        <div className="bg-black">
        <div className="h-[5vh] grid grid-cols-3 gap-4 px-4 py-4 overflow-hidden">
            <a href="/feed" className="text-white">
                Feed
            </a>
            <label for="photoupload" className="text-white">Upload
                <input id="photoupload" type="file" className="invisible" accept=".jpg,.png,.heic">
                </input>
            </label>
            <a href="/profile" className="text-white">
                Profile
            </a>
        </div>
        </div>
    );
    }