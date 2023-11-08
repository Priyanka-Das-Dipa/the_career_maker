import { useEffect, useState } from "react";


const ManageService = () => {
    const [addServices, setAddServices] = useState()
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAddServices(data))
    },[])
    return (
        <div>

            {/* {
                addServices.map(addService => (

                ))
            } */}
        </div>
    );
};

export default ManageService;