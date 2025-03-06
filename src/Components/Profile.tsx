import React from 'react';
import UpdateInfo from './UpdateInfo';
import UpdatePassword from './UpdatePassword';
import Header from './Header';

const Profile = () => {
  return (
    <div className="container-fluid">
      <Header profile={false} logout={true} />
      <main className='row my-5'>
        <UpdateInfo />
        <div className="col-1"></div>
        <UpdatePassword />
      </main>
    </div>
  );
};

export default Profile;
