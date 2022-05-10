// Components
import { useEffect, useState } from "react";
// Custom Components
import NavBar from "../Components/NavBar";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Home page</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}
export default Home;
