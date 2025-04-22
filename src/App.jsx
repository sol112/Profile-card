import React from "react";
import ProfileCard from "./component/ProfileCard";
import data from "./component/data";

function App() {
  return (
    <div>
      {data.map((profile) => (
        <ProfileCard
          name={profile.name}
          age={profile.age}
          occupation={profile.occupation}
          profileImage={profile.profileImage}
        />
      ))}
    </div>
  );
}

export default App;
