"use client";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { postImage } from "~/lib/apiRoutes";
import { setIsModalOpen } from "~/lib/features/uiSlice";
import { useAppSelector } from "~/lib/hooks";
import { useState } from "react";

export default function UploadModal() {
    const dispatch = useDispatch();
    const isModalOpen = useAppSelector(state => state.ui.isModalOpen);
    const {isLoaded, isSignedIn, user} = useUser();

    const [fileSelected, setFileSelected] = useState(false);

    if (!isSignedIn || !user)
        return
    
    const userEmail = user?.emailAddresses[0]?.emailAddress

    if (!isModalOpen || !userEmail)
        return

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileSelected(true); 
        } else {
            setFileSelected(false); 
        }
    };

    return (
        <div className="bg-[#00000010] fixed top-0 left-0 h-screen w-screen flex justify-center items-center">
            <div className="bg-white w-[40%] h-[50%] relative flex flex-col items-center justify-center p-4 shadow-lg rounded-md">
                <button onClick={() => dispatch(setIsModalOpen(false))} className="absolute top-4 left-4 text-black text-2xl">
                    &times;
                </button>

                <div className="bg-gray-200 p-4 rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-12 h-12 text-gray-600">
                        <path strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M12 16v-8m-4 4l4-4m0 0l4 4M4 12a8 8 0 1016 0 8 8 0 10-16 0z" />
                    </svg>
                </div>

                <p className="text-lg font-semibold mb-6">Upload your file here!</p>
                <form action={(e) => postImage(e, userEmail)} className="flex flex-col items-center">
                    <label className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mb-4 cursor-pointer">
                        Choose File
                        <input type="file" 
                        name="uploadedImage" 
                        accept="image/png, image/jpeg, image/heic" 
                        className="hidden" 
                        onChange={handleFileChange}/>
                    </label>
                    <button type="submit" 
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                    disabled={!fileSelected}>
                        Post</button>
                </form>
            </div>
        </div>
    );
}

