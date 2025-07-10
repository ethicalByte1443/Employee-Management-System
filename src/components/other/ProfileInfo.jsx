import React from 'react';

const ProfileInfo = ({ user }) => {
  if (!user) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">👤 Profile Info</h2>
      <p><strong>Name:</strong> {user.naam}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.type || 'Admin'}</p>
      <p><strong>Joined:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default ProfileInfo;
