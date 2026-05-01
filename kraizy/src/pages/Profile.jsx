import { useState } from "react";

function Profile() {
  const [profile, setProfile] = useState({
    name: "LOKESH VERMA",
    email: "[EMAIL_ADDRESS]",
    phone: "+91 XXXXXXXXXX",
    city: "CITY NAME",
    bio: "Streetwear enthusiast & Kraizy fan 🔥"
  });

  const [isEditing, setIsEditing] = useState(false);

  const [tempProfile, setTempProfile] = useState({ ...profile });

  const handleChange = (e) => {
    setTempProfile({
      ...tempProfile,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    setProfile({ ...tempProfile });
    setIsEditing(false);
    alert("✅ Profile updated successfully!");
  };

  const handleCancel = () => {
    setTempProfile({ ...profile });
    setIsEditing(false);
  };

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div className="avatar">
          {profile.name.charAt(0).toUpperCase()}
        </div>
        <div className="profile-header-info">
          <h1>{profile.name}</h1>
          <p>{profile.email}</p>
          <span className="member-badge">⚡ Kraizy Member</span>
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-card-header">
          <h2>Personal Information</h2>
          {!isEditing && (
            <button className="btn-edit" onClick={() => setIsEditing(true)}>
              ✏️ Edit Profile
            </button>
          )}
        </div>

        {!isEditing ? (
          <div className="profile-info-grid">
            <div className="info-item">
              <label>Full Name</label>
              <p>{profile.name}</p>
            </div>
            <div className="info-item">
              <label>Email Address</label>
              <p>{profile.email}</p>
            </div>
            <div className="info-item">
              <label>Phone Number</label>
              <p>{profile.phone}</p>
            </div>
            <div className="info-item">
              <label>City</label>
              <p>{profile.city}</p>
            </div>
            <div className="info-item full-width">
              <label>Bio</label>
              <p>{profile.bio}</p>
            </div>
          </div>
        ) : (
          <div className="profile-form">
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={tempProfile.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={tempProfile.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={tempProfile.phone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                value={tempProfile.city}
                onChange={handleChange}
                placeholder="Your city"
              />
            </div>
            <div className="form-group full-width">
              <label>Bio</label>
              <textarea
                name="bio"
                value={tempProfile.bio}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                rows={3}
              />
            </div>

            <div className="form-actions">
              <button className="btn-save" onClick={handleSave}>
                💾 Save Changes
              </button>
              <button className="btn-cancel" onClick={handleCancel}>
                ✖ Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="profile-stats">
        <div className="stat-card">
          <span className="stat-number">12</span>
          <span className="stat-label">Orders Placed</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">5</span>
          <span className="stat-label">Wishlisted</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">3</span>
          <span className="stat-label">Reviews Given</span>
        </div>
      </div>

    </div>
  );
}

export default Profile;
