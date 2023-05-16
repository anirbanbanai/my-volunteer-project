
const Donation = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const all = {name, image}
        console.log(all)

        fetch(`http://localhost:5000/volunteer`, {
            method:"POST",
            headers:{
                'content-type' : "application/json"
            },
            body: JSON.stringify(all)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            form.reset()
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="hero  bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Add Donate</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="text" name="image" placeholder="phot_url" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-block btn-primary" type="submit" value="Add Donate" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Donation;