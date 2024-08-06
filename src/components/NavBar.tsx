"use client";

import { Fragment } from "react";
import UploadModal from "./UploadModal";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "~/lib/features/uiSlice";


export default function NavBar() {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <div className="bg-black">
            <div className="h-[5vh] grid grid-cols-3 gap-4 px-4 py-4 overflow-hidden">
                <a href="/feed" className="text-white">
                    Feed
                </a>
                <p className="text-white" onClick={() => dispatch(setIsModalOpen(true))}>
                    Upload
                </p>
                <a href="/profile" className="text-white">
                    Profile
                </a>
            </div>
            </div>
            <UploadModal/>
        </Fragment>
    );
    }

