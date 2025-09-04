import { useEffect, useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import JobsCard from '../jobscard/jobscard';

const Home = ()=>{

    const [jobs,getJobs] = useState({
        search : "",
        jobsData : [],
        loader : false,
        isJob : true,
        savejobs : [],
        checkSave : false
    })

    const FetchData = async ()=>{

        getJobs({...jobs,loader:true});


        const api = `https://jobicy.com/api/v2/remote-jobs?count=20&tag=${jobs.search}`;

        const option = {
            method : "GET"
        }

        try {
            
            const response = await fetch(api,option);

            const data = await response.json();

            if(response.ok){

                if( data.jobCount === 0){
                    getJobs({...jobs,isJob:false, savejobs:jobs.savejobs});
                }
                else{
                getJobs({...jobs,jobsData:data.jobs, loader:false, isJob:true, savejobs:jobs.savejobs, checkSave:true})
                }


            }

        } catch (error) {
            console.log( error );
        }

    }

    const getValue = (e)=>{
        getJobs({...jobs,search:e.target.value})
    }


  return(
    <div className='bg-dark'>

        <nav className='d-flex justify-content-between p-3'>
            <h3 className='text-light'><strong>Job Finder</strong></h3>
            <Link to={"/wishlist"} className='btn btn-success'>Wishlist</Link>
        </nav>
      <div className='container main-cont'>

        <h1 className='text-light'>Find The Job That Fits You</h1>

        <br />

        <input type="text" onChange={getValue} placeholder='Search you job' className='form-control w-50'/>

        <br />
        
        <button onClick={FetchData} className='btn btn-outline-light'>Search</button>


        <hr style={{border:"1px solid white", width:"100%"}}/>

        <ul style={{listStyle:"none"}}>

            
            {
                jobs.loader ? <div className="d-flex justify-content-center">
                <div className="spinner-border text-warning" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>  :  jobs.isJob ?  jobs.jobsData.map((e)=><JobsCard key={e.id} jobItem={e}/>) : <img src="/Vkl3WkPrrJ (1).gif"/> 
            }
        </ul>


      </div>
    </div>
  )
}
export default Home;