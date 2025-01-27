import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useGetLikes from "../../../hooks/interactions/getUserLikes";
import LayoutLoader from "../../../components/loader/layoutLoader";
import { calculateTime } from "../../../utils/format";
import Post from "../../../components/post";

function ProfileLikesTab() {
  const { data, isLoading, isError, error } = useGetLikes();
  const likedPosts = data || [];

  if (isLoading) {
    return <LayoutLoader />;
  }

  if (isError) {
    return <p className="text-red-500">Hata: {error.message}</p>;
  }

  return (
    <div className="p-3">
      {likedPosts.length > 0 ? (
        <div className="space-y-4">
          {likedPosts.map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">
          Henüz beğendiğiniz gönderi bulunmuyor.
        </p>
      )}
    </div>
  );
}

export default ProfileLikesTab;
