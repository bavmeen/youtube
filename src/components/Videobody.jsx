import React from 'react'
import VideoDesc from './VideoDesc';

const Videobody = ({videose})=>  { 
  if(!videose){
    return <div className="w-full h-[393px]">loading........</div>
  }
  const videoSrc=`https://www.youtube.com/embed/${videose.id.videoId}`;
  return (
    <section>
        <div className='flex flex-wrap mt-5'>
            <div className='basis-full'>
            <iframe src={videoSrc} 
            frameborder="0"
            title="Video Player"
            className="w-full h-[393px]"
            
            ></iframe>
                <p className='text-left  text-blue-600'>Tags</p>
                <h2 className='text-lg text-left font-normal'>{videose.snippet.title}</h2>
                <p className='text-left text-sm font-normal mt-3'>65,056,861 views &nbsp; {videose.snippet.publishedAt}</p>
                <hr className='mt-4'></hr>
            </div>
            
        </div>
        <VideoDesc video={videose} />
    </section>
    
  );

}
export default Videobody;
