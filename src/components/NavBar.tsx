"use client";

import { Fragment } from "react";
import UploadModal from "./UploadModal";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "~/lib/features/uiSlice";


export default function NavBar() {
    const dispatch = useDispatch();
    return (
        <Fragment>
            
                <div className="grid grid-rows-3 gap-y-6 px-4 pt-[50px] overflow-hidden text-white">
                    <div className="font-bold text-lg">InstaPlate.</div>
                    <a href="/feed">
                        Feed
                    </a>
                    <p onClick={() => dispatch(setIsModalOpen(true))}>
                        Upload
                    </p>
                    <a href="/profile">
                        Profile
                    </a>
                </div>
            <UploadModal/>
        </Fragment>
    );
    }

