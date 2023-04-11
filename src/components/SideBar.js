import React from 'react'
import { useSelector } from 'react-redux';

const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className="col-span-2">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className="p-1 m-3"></hr>
      <ul>
        <li>Library</li>
        <li>History</li>
        <li>Your Videos</li>
        <li>Watch Later</li>
        <li>Liked Videos</li>
      </ul>
      <hr className="p-1 m-3"></hr>
      
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>Star Music India</li>
        <li>TAMIL VOICE OVER</li>
        <li>JustMotivation</li>
        <li>Makeup By Nikki La Rose</li>
        <li>HomeCookingShow</li>
        <li>Rachel Talbott</li>
        <li>Miriam James Se</li>
      </ul>
      
      <hr className="p-1 m-3"></hr>
      
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Live</li>
        <li>News</li>
        <li>Sport</li>
        <li>Learning</li>
        <li>Fashion & beauty</li>
      </ul>
      
      <hr className="p-1 m-3"></hr>
      
      <h1 className="font-bold">More from YouTube</h1>
      <ul>
        <li>YouTube Premium</li>
        <li>YouTube Studio</li>
        <li>YouTube Music</li>
        <li>YouTube Kids</li>
      </ul>

      <hr className="p-1 m-3"></hr>

      <ul>
        <li>Settings</li>
        <li>Report history</li>
        <li>Help</li>
        <li>Send feedback</li>
      </ul>

      
    </div>
  )
}

export default SideBar
