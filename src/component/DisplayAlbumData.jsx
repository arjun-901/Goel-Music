import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
// import { albumsData } from '../assets/assets';
// import AlbumItem from './AlbumItem';


const DisplayAlbumData = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    const {PlayWithId}=useContext(PlayerContext)


    return (
        <>
            <Navbar></Navbar>
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='h-5 w-5 inline-block' src={assets.spotify_logo} alt="" />
                        <b>Goel Clone</b>
                        . 13,23,154
                        . <b>50 song,</b>
                         about2hr 30min
                    </p>

                </div>
            </div>
           <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
            <p className='mr-4'>#<b>Title</b></p>
            <p>Album</p>
            <p className='hidden sm:block'>Date Added</p>
            <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div> 
            <hr />
            {
                songsData.map((item,index)=>(
                    <div onClick={()=>PlayWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff26] cursor-pointer'>
                        <p className='text-white'>
                            <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>10 Days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>


                    </div>
                    

                ))
            }

        </>

    )
}

export default DisplayAlbumData