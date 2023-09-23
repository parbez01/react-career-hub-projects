import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs,setJobs] = useState([]);
    // not best way
    const [dataLength,setDataLength] = useState(4)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Featured Jobs</h1>
                <p className='mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0,dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
                <div className={dataLength === jobs.length && 'hidden'}>
                    <button className="btn btn-primary flex justify-center ml-auto mb-6"
                    onClick={()=> setDataLength(jobs.length)}
                    >Show All</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;