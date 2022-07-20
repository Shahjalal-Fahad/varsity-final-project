import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyAppointment = () => {
    const [treatments, setTreatments] = useState([])
    const [user] = useAuthState(auth);
    const navigate=useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setTreatments(data);
                });
        }
    }, [user])
    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                    <th scope="col" class="px-6 py-3">
                        No
                        </th>
                        <th scope="col" class="px-6 py-3">
                        Treatment
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Slot
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Phone
                        </th>
                        <th scope="col" class="px-6 py-3">
                            
                        </th>


                    </tr>
                </thead>
                <tbody>
                   
                            {
                                treatments.map((treatment,index)=> <tr
                                key={index}
                                 class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {index+1}
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    {treatment.treatment}
                                </th>
                                <td class="px-6 py-4">
                                    {treatment.patient}
                                </td>
                                <td class="px-6 py-4">
                                {treatment.date}
                                </td>
                                <td class="px-6 py-4">
                                {treatment.slot}
                                </td>
                                <td class="px-6 py-4">
                                {treatment.phone}
                                </td>
                                
                            </tr>)
                            }

                </tbody>
            </table>
        </div>

    );
};

export default MyAppointment;