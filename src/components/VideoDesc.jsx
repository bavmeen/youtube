import React from 'react';

const VideoDesc=({video})=> {
    
        return(
            <section>
                <div className='flex flex-wrap   mt-6'>
                    <img src='#' alt="label" className='rounded-lg w-12' />
                    <div className='ml-3'>
                        <h2 className='text-sm font-medium  mt-1'>{video.snippet.channelTitle}</h2>
                        <h3 className='text-sm text-left font-normal'>2.07 Subscribe</h3>
                        
                    </div>
                    
                </div>
            </section>

        );

}
export default VideoDesc;
