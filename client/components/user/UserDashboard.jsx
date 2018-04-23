import React from "react";
import UserBusinesses from './UserBusinesses';


const UserDashboard = () => {
  return (
    <div>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-8 text-center">
            <div className="justify-content-center mx-auto my-5">
              <img className="profile-avatar" src="http://i.pravatar.cc/500" />
            </div>
            <h1 className="text-center header-color">Seun Daramola</h1>
            <p className="text-center my-4">
              <span className="mr-3 h2 header-color"> 51 </span>
              <span className="h6 mr-3">Businesses Created</span>
              <span className="mr-3 h2 header-color"> 531 </span>
              <span className="h6">Reviews</span>
            </p>
          </div>
        </div>
      </div>
      <UserBusinesses/>
    </div>
  );
};

export default UserDashboard;