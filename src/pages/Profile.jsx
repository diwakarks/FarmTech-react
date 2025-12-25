import { useState, useEffect } from "react";
import "./styles/profile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Load user data (simulate localStorage)
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify(user));
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header">
          <h2>Your Profile</h2>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div className="profile-body">
          <div className="profile-img-container"></div>

          <div className="profile-details">
            <p>
              <strong>Name:</strong>{" "}
              {isEditing ? (
                <input
                  value={user.name}
                  onChange={(e) =>
                    setUser({ ...user, name: e.target.value })
                  }
                />
              ) : (
                user.name
              )}
            </p>

            <p>
              <strong>Email:</strong>{" "}
              {isEditing ? (
                <input
                  value={user.email}
                  onChange={(e) =>
                    setUser({ ...user, email: e.target.value })
                  }
                />
              ) : (
                user.email
              )}
            </p>

            <p>
              <strong>Phone:</strong>{" "}
              {isEditing ? (
                <input
                  value={user.phone}
                  onChange={(e) =>
                    setUser({ ...user, phone: e.target.value })
                  }
                />
              ) : (
                user.phone
              )}
            </p>

            <p>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="portal-link"
              >
                🐦‍⬛ Twitter
              </a>
            </p>

            <div className="button-group">
              {!isEditing && (
                <button
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Profile
                </button>
              )}

              {isEditing && (
                <button className="save-btn" onClick={handleSave}>
                  Save Changes
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
