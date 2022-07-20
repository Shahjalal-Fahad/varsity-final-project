import React from 'react';
import { toast } from 'react-toastify';

const UsersRow = ({ user,refetch }) => {
    const { email,role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        }
        )
        .then(res=>res.json())
        .then(data=>
            {
                refetch()
                toast.success("Successfully made an Admin")
            
            })
    }
    return (
        <tr>
            <th></th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}
            </td>
            <td><button className="btn btn-warning btn-xs">Remove User</button>
            </td>
        </tr>
    );
};

export default UsersRow;