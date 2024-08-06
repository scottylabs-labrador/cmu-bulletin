"use client";
import { useUser } from "@clerk/nextjs";
import { useDispatch } from "react-redux";
import { postImage } from "~/lib/apiRoutes";
import { setIsModalOpen } from "~/lib/features/uiSlice";
import { useAppSelector } from "~/lib/hooks";

export default function UploadModal() {
    const dispatch = useDispatch();
    const isModalOpen = useAppSelector(state => state.ui.isModalOpen);
    const {isLoaded, isSignedIn, user} = useUser();
    if (!isSignedIn || !user)
        return
    
    const userEmail = user?.emailAddresses[0]?.emailAddress

    if (!isModalOpen || !userEmail)
        return

    return (
        <div className="bg-[#00000010] fixed top-0 left-0 h-screen w-screen">
            <div className="bg-white w-[50%] h-[50%] fixed top-[25%] left-[25%]">
                <button onClick={() => dispatch(setIsModalOpen(false))}>Close</button>
                <p>Upload your file here!</p>
                <form action={(e) => postImage(e, userEmail)}>
                    {/* A file upload that only allows images */}
                    <input type="file" name="uploadedImage" accept="image/png, image/jpeg, image/heic" />
                    <input type="submit"/>
                </form>
            </div>
        </div>
    );
}

