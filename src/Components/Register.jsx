import { Link } from "react-router-dom";

const Register = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const des = form.des.value;
        const all = {name, email, date, des};
        console.log(all);

        fetch(`http://localhost:5000/add`,{
            method:"POST",
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(all)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register as a Volunteer!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full name</span>
                                </label>
                                <input  type="text" name="name" placeholder="name" className="input input-bordered outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username or Email</span>
                                </label>
                                <input type="text"  name="email" placeholder="username / email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name="date" placeholder="" className="input input-bordered" />
                                <label className="label">

                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <input type="text" name="des" placeholder="description" className="input input-bordered" />
                                <label className="label">
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Registration" />
                            </div>
                            <h2>Appready register?<Link to='/login'>Login</Link></h2>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;