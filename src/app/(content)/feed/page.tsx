"use client";
import { getFeed } from "~/lib/api/getFeed";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import PostCard  from "~/components/PostCard";
import { Photo } from "~/types";

export default function FeedPage() {
  const { user } = useUser();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      if (user) {
        // We know this is safe because we check if the user is signed in
        const userPhotos = await getFeed(user?.emailAddresses[0]?.emailAddress as string, 0, 10);
        setPhotos(userPhotos);
      }
    };

    loadPhotos();
  }, [user]);

  const photoCards = photos.map((photo) => (
    <PostCard key={photo.id} photo={photo} />
  ))

  return (
    <main className="flex flex-col items-center justify-center ">
      <p className="text-4xl text-white font-bold">Feed</p>
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-[1rem]">
        <div className="grid grid-cols-1 gap-4">
          {photoCards}
        </div>
      </div>
    </main>
  );
}
