import React from 'react'


const VideoCard = ({info}) => {
  
  const {snippet, statistics} = info;
  const {thumbnails, title, channelTitle} = snippet;

  return (
    <div className="p-3 m-4 w-80">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url}/>
      <ul>
        <li className="font-bold">{title}</li>
      </ul>
      <ul className="text-sm text-gray-500">
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} Views</li>
      </ul>
    </div>
  )
}

export default VideoCard
