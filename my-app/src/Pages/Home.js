// Custom Components
import HeadingGroup from "../Components/Heading/HeadingGroup";
import LargeCard from "../Components/Cards/LargeCard";

function Home() {
  return (
    <div>
      <HeadingGroup title={"Home"} />
      <LargeCard
        title="Goals"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis. Velit dignissim sodales ut eu sem integer. Interdum consectetur libero id faucibus nisl tincidunt. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Adipiscing at in tellus integer feugiat scelerisque. Dolor sit amet consectetur adipiscing elit. Mauris commodo quis imperdiet massa tincidunt nunc. Aenean et tortor at risus viverra adipiscing. Malesuada fames ac turpis egestas integer. Enim ut tellus elementum sagittis vitae. Ut sem viverra aliquet eget sit amet. Augue ut lectus arcu bibendum at varius vel pharetra."
        hasRoute={true}
        route="/goals"
        src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jwfa6idwrsflicfh_1617443128.jpeg"
        alt="mars-img"
      />
      <LargeCard
        title="Launch Vehicles"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Feugiat vivamus at augue eget arcu dictum varius duis at. Senectus et netus et malesuada fames ac. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Tempus imperdiet nulla malesuada pellentesque. Velit scelerisque in dictum non consectetur a erat nam at. Urna cursus eget nunc scelerisque. Lacus vestibulum sed arcu non odio. Feugiat nisl pretium fusce id velit ut tortor pretium."
        hasRoute={true}
        route="/launch-vehicles"
        src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jwfa6idwrsflicfh_1617443128.jpeg"
        alt="mars-img"
      />
      <LargeCard
        title="News"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Feugiat vivamus at augue eget arcu dictum varius duis at. Senectus et netus et malesuada fames ac. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Tempus imperdiet nulla malesuada pellentesque. Velit scelerisque in dictum non consectetur a erat nam at. Urna cursus eget nunc scelerisque. Lacus vestibulum sed arcu non odio. Feugiat nisl pretium fusce id velit ut tortor pretium."
        hasRoute={true}
        route="/news"
        src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jwfa6idwrsflicfh_1617443128.jpeg"
        alt="mars-img"
      />
      <LargeCard
        title="History"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et. Feugiat vivamus at augue eget arcu dictum varius duis at. Senectus et netus et malesuada fames ac. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Aliquam eleifend mi in nulla posuere sollicitudin aliquam. Tempus imperdiet nulla malesuada pellentesque. Velit scelerisque in dictum non consectetur a erat nam at. Urna cursus eget nunc scelerisque. Lacus vestibulum sed arcu non odio. Feugiat nisl pretium fusce id velit ut tortor pretium."
        hasRoute={true}
        route="/history"
        src="https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jwfa6idwrsflicfh_1617443128.jpeg"
        alt="mars-img"
      />
    </div>
  );
}
export default Home;
