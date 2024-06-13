import React from 'react';
import { useForm } from 'react-hook-form';

const AddTask = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Title</span>
                    </div>
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        className="input input-bordered w-full"
                        {...register('title', { required: 'Title is required' })}
                    />
                    {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Description</span>
                    </div>
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="input input-bordered w-full"
                        {...register('description', { required: 'Description is required' })}
                    />
                    {errors.description && <span className="text-red-500">{errors.description.message}</span>}
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Deadline</span>
                    </div>
                    <input
                        type="text"
                        name="deadline"
                        placeholder="Deadline (YYYY-MM-DD)"
                        className="input input-bordered w-full"
                        {...register('deadline', { required: 'Deadline is required', pattern: { value: /^\d{4}-\d{2}-\d{2}$/, message: 'Invalid deadline format (YYYY-MM-DD)' } })}
                    />
                    {errors.deadline && <span className="text-red-500">{errors.deadline.message}</span>}
                </label>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text font-bold">Priority</span>
                    </div>
                    <select className="input input-bordered w-full" {...register("priority", { required: 'Priority is required' })}>
                        <option value="">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}
                </label>
                <div>
                    <button type="submit" className="btn bg-teal-900 mt-5 text-white text-xl">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddTask;