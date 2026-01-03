import React, { use } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../Provider/AuthContext';
import axios from 'axios';

const useRole = () => {


    const { user } = use(AuthContext)

    const {isLoading: roleLoading, data: role = "" } = useQuery({
        queryKey: ["user-role", user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://online-learning-platform-server-livid.vercel.app/users/email?email=${user?.email}`);
            return res.data?.role || "";
        }
    })



    return { role , roleLoading };
};

export default useRole;