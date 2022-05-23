import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import useServiceDetail from '../../../hooks/useServiceDetail';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
    const { serviceId } = useParams();
    const { service } = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            name: user.displayName,
            email: user.email,
            serviceId: serviceId,
            address: event.target.address.value,
            number: event.target.number.value,
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    toast('your order booked')
                    event.target.reset();
                }
            })
    }


    // const [user, setUser] = useState({
    //     name: 'NaZmuL MaHmuD',
    //     email: 'abc@abd.bd',
    //     number: '0177777777',
    //     address: 'Tajmohol Road'
    // });
    // const handleAddress = event => {
    //     console.log(event.target.value);
    //     const { address, ...rest } = user;
    //     const newAddress = event.target.value;
    //     const newUser = { address: newAddress, ...rest };
    //     setUser(newUser);
    // }

    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please Book : {service.name}</h2>
            <br />
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user.displayName} name="name" placeholder='name' id="" required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={user.email} name="email" placeholder='email' id="" required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="name" placeholder='name' id="" required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="number" value={user.number} name="number" placeholder='number' id="" required />
                <br />
                <input className='w-100 mb-2' type="text" autoComplete='off' value={user.address} name="address" placeholder='address' id="" required />
                <br />
                <input type="submit" className='btn btn-primary w-100' value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;