import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthContext';
import useRole from '../Hook/useRole';
import Loading from '../Components/Loading/Loading';
import Forbidden from '../Components/ErrorPage/Forbidden';


const AdminRoute = ({children}) => {
    const { loading, user } = use(AuthContext);
    const { role, roleLoading } = useRole();
    

    if (loading || !user || roleLoading) {
        return <Loading></Loading>
    }

    if (role !== "admin") {
        return <Forbidden></Forbidden>
    }
    return children;
};

export default AdminRoute;


// import React from 'react';
// import useAuth from '../hooks/useAuth';
// import useRole from '../hooks/useRole';
// import Loading from '../Component/Loading/Loading';
// import Forbidden from '../Pages/Error/Forbidden/Forbidden';


// const AdminRoute = ({children}) => {
//     const { loading, user } = useAuth();
//     const { role, roleLoading } = useRole();

//     if (loading || !user || roleLoading) {
//         return <Loading></Loading>
//     }

//     if (role !== "admin") {
//         return <Forbidden></Forbidden>
//     }
//     return children;
// };

// export default AdminRoute;