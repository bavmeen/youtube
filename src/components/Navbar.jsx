import React from "react";
class Navbar extends React.Component{
    state ={
        term:'',
    };
    onInputChange = (event) =>{
        this.setState({term:event.target.value});
    };
    onFormSubmit = (event) =>{
        event.preventDefault();

        this.props.onFormSubmit(this.state.term)
    };
    render(){
        return(
                <>
                <nav className="flex justify-between border pt-6 pb-3 pl-6 pr-3">
                    <div className="flex items-center ">
                        <img src="/menu.png" alt="log.png" className="w-5 h-5"/>
                        <img src="/YouTube_Logo_2017.png" alt="log.png" className="w-24 h-5 ml-6"/>
                    </div>
                    <div className="flex" >
                        <form className="h-full" onSubmit={this.onFormSubmit}>
                            <div className="items-center h-full " >
                                <input type='search' value={this.state.term} onChange={this.onInputChange} placeholder='Search' name='search' className='form-input lg:w-[530px] md:w-88 sm:w-60  h-full   text-base border'/>
                            </div>
                        </form>
                   
                        <span className=" cursor-pointer bg-gray-100 border  flex items-center sm:px-4 px-6 text-base font-normal text-gray-700 text-center whitespace-nowrap " id="basic-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" alt='micr'></path>
                            </svg>
                        </span>
                        <span className=" flex items-center self-center rounded-full border ml-3 bg-gray-100 ">
                            <img src='/48.png' alt='micr' className="  w-8 h-8 p-2"  />
                        </span>
                    </div>
                    <div className="flex items-center " >
                        <span>
                            <img src='/notification.png' alt='micr' className="w-5 h-5"  />
                        </span><span>
                            <img src='/grid.svg' alt='micr' className="ml-7 w-5 h-5"  />
                        </span>
                        <span><img src='/dots.png' alt='micr' className="ml-7 w-5 h-5"  /></span>
                        <span><img src='/men.png' alt='micr' className="w-7 sm:mt-3 md:mt-2 lg:mt-2 mx-6 cursor-pointer mb-1"/></span>
            
                    </div>

                </nav>
                </>
        );
    }
}
export default Navbar;