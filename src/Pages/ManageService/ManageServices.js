import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDelete = (id) => {
        const proceed = window.confirm('are sure?')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='w-502 mx-auto m-4'>
            <h2 className='text-center'>Manage Your Service</h2>
            <div className="w-50 mx-auto">
                {
                    services.map(service =>
                        <div className=""
                            key={service._id}>
                            <h5>
                                {service.name}
                                <button onClick={() => handleDelete(service._id)}>X</button>
                            </h5>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ManageServices;