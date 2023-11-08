import { useEffect, useState } from "react";

const ManageService = () => {
  const [addServices, setAddServices] = useState();
  useEffect(() => {
    fetch("https://the-career-maker-server-eight.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setAddServices(data));
  }, []);
  return <div>
    
    {/* {addServices.map((addService) => asasasd)} */}
    
    
    </div>;
};

export default ManageService;
