import { Fragment, useState } from 'react';
import { Photo } from '~/types';
import Image from 'next/image';
interface PostCardProps {
    photo: Photo
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function PostCard({photo}: PostCardProps) {
    const [badImage, setBadImage] = useState(false);
    return !badImage &&(
        <Fragment>
        <div className="overflow-hidden bg-white">
            <div className='flex justify-between h-[4rem] rounded-lg mb-1 bg-[#F2F2F2] pt-[1rem]'>
            <p className='justify-left text-lg pl-6'>{photo.userEmail}</p>
            <p className='justify-right text-lg pr-6'>{photo.timestamp.getDate() + ' ' + monthNames[photo.timestamp.getMonth()]}</p>
            </div>
            <Image
                width={600}
                height={600}
                src={photo.url}
                alt="A photo from the feed"
                className='object-fill rounded-lg w-full'
                onError={(e) => {setBadImage(true)}}
            />
            
            <hr className='m-2 border-black'/>
        </div>
        </Fragment>
    );
}