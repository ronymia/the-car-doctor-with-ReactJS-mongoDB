import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = "http://localhost:5000/service"
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };

    return (
        <div className="w-50 mx-auto">
            <h2 className='text-center'>Please add items</h2>
            <form
                className='w-50 mx-auto d-flex flex-column gap-2'
                onSubmit={handleSubmit(onSubmit)}>
                <input className='rounded p-2' placeholder='name' type="text" {...register("name")} />
                <textarea className='rounded p-2' placeholder='description' type="text" {...register("description")} />
                <input className='rounded p-2' placeholder='price' type="number" {...register("price")} />
                <input className='rounded p-2' placeholder='img' type="text" {...register("img")} />
                <input type="submit" value="add items" />
            </form>
        </div>
    );
};
export default AddService;