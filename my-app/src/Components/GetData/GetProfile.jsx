//Components
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
} from "react-twitter-embed";

//CSS
import getProfile from "../../CSS/GetNews/getProfile.module.css";
function GetProfile(props) {
  return (
    <div className={getProfile.box}>
      <h1>
        <img
          className={getProfile.img}
          src={props.profilePic}
          alt="twitter-profile-img"
        />
        @{props.username}
      </h1>
      <div className={getProfile.timeline}>
        <TwitterFollowButton screenName={props.username} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName={props.username}
          options={{ width: 400 }}
        />
        <TwitterShareButton
          url={props.url}
          options={{
            text: "Look at this cool Twitter account! #JustFollowed",
            via: props.username,
          }}
        />
      </div>
    </div>
  );
}

export default GetProfile;
