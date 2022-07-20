import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UsersRow from './UsersRow';

const AllUsers = () => {
    const {data:users,isLoading,refetch}=useQuery(['users'],()=>fetch('http://localhost:5000/users',{
        method:'GET',
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading/>
    }
    return (
        <div>
            <h2 className='text-2xl font-bold text-center pt-5 pb-10' >All Users</h2>
            <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {
            users.map(user=><UsersRow
            user={user}
            key={user._id}
            refetch={refetch}
            ></UsersRow>)
        }
    </tbody>
  </table>
</div>
       
        </div>
    );
};

export default AllUsers;