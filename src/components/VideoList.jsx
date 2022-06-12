import React from "react";

const VideoList=({ videos,onSelectVideo })=> {
    const renderList = videos.map(video => {
        return (
            <section>
                <div className='flex mt-5'  >
                    <div className='basis-full lg:basis-2/5 ' onClick={()=>onSelectVideo(video)} >
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className='w-full h-[90px]' />
                    </div>
                    <div className=' basis-full lg:basis-1/2 mx-3'>
                        <p>{video.snippet.title}</p>
                    </div>
                </div>
            </section>
        );
    });
    return (
        <>
            <div>{renderList}</div>
        </>
    );

}
export default VideoList;