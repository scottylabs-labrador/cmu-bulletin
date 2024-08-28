import React from 'react';
import { Photo } from '~/types';

interface PostCardProps {
    photo: Photo
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function PostCard({photo}: PostCardProps) {;
    return (
        <React.Fragment>
        <div className="bg-[#DDD] rounded-lg overflow-hidden">
            <p className='text-lg'>{photo.timestamp.getDate() + ' ' + monthNames[photo.timestamp.getMonth()]}</p>
            <img
                key={photo.id}
                src={photo.url}
                alt="A photo from the feed"
                className='object-cover'
            />
        </div>
        </React.Fragment>
    );
}