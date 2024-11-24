import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbumData from './DisplayAlbumData';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes('album');
  const albumId = isAlbum ? location.pathname.split('/').pop() : ''; // Extract the last part of the path
  const bgColor = albumId && albumsData[Number(albumId)] ? albumsData[Number(albumId)].bgColor : null;

  useEffect(() => {
    if (displayRef.current) {
      if (isAlbum && bgColor) {
        displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
      } else {
        displayRef.current.style.background = `#121212`;
      }
    }
  }, [isAlbum, bgColor]); // Added dependencies to ensure the effect runs correctly

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbumData />} />
      </Routes>
    </div>
  );
};

export default Display;
 