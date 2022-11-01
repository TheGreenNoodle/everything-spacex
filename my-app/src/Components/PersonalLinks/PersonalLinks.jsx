//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//Custom Components
import Link from "./Link";

//CSS
import links from "../../CSS/PersonalLinks/personalLinks.module.css";

function Links() {
  return (
    <div className={links.box}>
      <Link
        name="GitHub"
        src="https://github.com/TheGreenNoodle"
        icon={<GitHubIcon fontSize="large" />}
      />
      <Link
        name="LinkedIn"
        src="https://www.linkedin.com/in/anton-fleming-8969671a2/"
        icon={<LinkedInIcon fontSize="large" />}
      />
    </div>
  );
}

export default Links;
