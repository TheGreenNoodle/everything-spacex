//Components
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
} from "react-twitter-embed";

//CSS
import getProfile from "../../../CSS/Proflies/getTwitterProfile.module.css";
function GetTwitterProfile(props) {
  return (
    <div className={getProfile.componentBox}>
      <h1 className={getProfile.usernameAndImg}>
        <img
          className={getProfile.img}
          src={props.profilePic}
          alt="twitter-profile-img"
        />
        @{props.username}
      </h1>

      <div className={getProfile.timelineBox}>
        <TwitterTimelineEmbed
          theme="dark"
          sourceType="profile"
          screenName={props.username}
          options={{ width: 400 }}
        />
      </div>
    </div>
  );
}

export default GetTwitterProfile;
