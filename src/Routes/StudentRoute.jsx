import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import useRole from '../Hook/useRole';
import Loading from '../Components/Loading/Loading';
import Forbidden from '../Components/ErrorPage/Forbidden';


const StudentRoute = ({children}) => {
    const { loading, user} = use(AuthContext);
    const { role, roleLoading } = useRole();

    if (loading || !user || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== "student") {
        return <Forbidden></Forbidden>
    }
    return children;
};

export default StudentRoute;