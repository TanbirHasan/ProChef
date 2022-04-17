// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const RequireAuth = ({ children }) => {
//   const location = useLocation();
//   const [user] = useAuthState(auth);
//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
//   }
//   return children;
// };

// export default RequireAuth;