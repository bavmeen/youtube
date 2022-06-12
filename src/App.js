import React from 'react';
import './App.css';
import youtube from './apis/youtubeapi';
import Navbar from './components/Navbar';
import Videobody from './components/Videobody';
import VideoList from './components/VideoList';

class App  extends React.Component{
  state = {
    videos:[],
    selectedVideo : '',
  };
  componentDidMount(){
    this.onTermSubmit("karan aujla");
  }

   onSelectVideo = (videos) =>{
    this.setState({selectedVideo:videos});
  }; 

  onTermSubmit = async (term) => {
    const res = await youtube.get('/search', {
      params:{
        q:term,
        
      },
    });
    console.log(res.data);
   this.setState({videos:res.data.items, selectedVideo:res.data.items[0]})
    
  };
  render(){
  return (
   <div >
       <Navbar onFormSubmit={this.onTermSubmit}/> 
        <div className='flex flex-wrap'>
          <div className='basis-full md:basis-3/5 pl-16'>
            <Videobody videose={this.state.selectedVideo}/>
          </div>
          <div className=' basis-full md:basis-1/3 px-4  '>
            <VideoList videos={this.state.videos} onSelectVideo={this.onSelectVideo} />
          </div>
        </div>

    </div>
  
  );
}
}
export default App;
