import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Swal from "sweetalert2";

const Home = () => {
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/vol')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUser(data)
            })
    }, [])

    const handleDelete = id => {
      console.log(id)
      fetch(`http://localhost:5000/volunteer/${id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data =>{
        console.log(data)
        if(data.deletedCount > 0){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
        }
      })
    }
    // const handleEdit = id =>{
    // console.log(id)
    // }
    console.log(user)
    return (
        <div>
            <h2 className="text-3xl font-bold text-center">I Grow helping people in need</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
                {
                    user.map(m => <div className="border-2 p-2 m-4" key={m.name}>
                        <img className="w-3/4 mx-auto" src={m.image} alt="" />
                        <p className="btn btn-block btn-warning bottom-0 text-xl font-semibold ">{m.name}</p>
                        <button onClick={()=> handleDelete(m._id)} className="btn btn-block bg-white text-black hover:text-white">Delete</button>
                        <Link to={`/upd/${m._id}`}>
                        <button  className="btn btn-block btn-primary">Edit</button></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Home;