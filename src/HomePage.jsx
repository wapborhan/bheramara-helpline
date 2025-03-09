import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.location.href = "http://kushtiacity.web.app";
  }, []);

  return <p>Loading...</p>;
};

export default HomePage;
