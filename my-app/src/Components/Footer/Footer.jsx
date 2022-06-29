//Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

//Custom Components
import Link from "./Link";

//CSS
import footer from "../../CSS/Footer/footer.module.css";

function Footer() {
  return (
    <div>
      <hr className={footer.line} />
      <div className={footer.box}>
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
        <Link
          name="Website"
          src="https://thegreennoodle.github.io/my-personal-site/"
          icon={<LanguageIcon fontSize="large" />}
        />
      </div>
    </div>
  );
}

export default Footer;
