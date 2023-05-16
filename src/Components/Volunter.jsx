import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const Volunter = () => {
    const [user, setUser] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/add`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setUser(data)
        })
    },[])
    const handleDelete = id =>{
        console.log(id)
        fetch(`http://localhost:5000/add/${id}`,{
            method:"DELETE"
        })
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            
            if(data.deletedCount){
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
                // const remaining  = user.filter()
            }
        })
    }
    return (
        <div>
            {
                user.map(m=><div className="flex justify-between items-center text-center ps-4 pr-3 border-2" key={m.name}>
                    <p>{m.name}</p>
                    <p>{m.email}</p>
                    <h3>{m.date}</h3>
                    <button onClick={()=> handleDelete(m._id)} className="btn bg-red-600" >X</button>
                </div>)
            }
        </div>
    );
};

export default Volunter;