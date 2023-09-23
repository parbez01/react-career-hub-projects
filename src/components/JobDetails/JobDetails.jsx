
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localstorage';
const JobDetails = () => {
    const jobs =useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id ===(idInt));
    console.log(job);

    const handleApplyJob = () =>{
        saveJobApplication(idInt)
        toast('Successfull Apply')
    }

    return (
        <div>
            <h2>Job Detail:{id}</h2>
            <div className='grid gap-4 md:grid-cols-4'>
                <div className='border md:col-span-3 bg-red-700'>
                    <h2>Hello Bangladesh</h2>
                </div>
                <div className='border bg-red-800'>
                    <h1>Nishat</h1>
                    <Link><button className='btn btn-primary w-full' onClick={handleApplyJob}>Apply Now</button></Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;