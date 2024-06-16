import { audioManagment } from "audioContext";
import { skillsData } from "lib/TestDataParts";
import filteredData from "lib/filteredData";
import { useEffect, useState } from "react";
import { scrollManagment } from "scrollManagment";
import apiClient from "services/axiosConfig";

const RandomGifComponent = () => {
  const { activeNavLink, activeElement, queryParam } = filteredData();
  const [gif, setGif] = useState(null);
  const scrollInside = scrollManagment((state) => state.scrollInside);

  useEffect(() => {
    const fetchRandomGif = async () => {
      apiClient
        .get(`/search?q=${queryParam}&limit=1&offset=0`)
        .then((response) => {
          const gifData = response.data.data[0];
          setGif(gifData);
        })
        .catch((error) => console.error("Error fetching data:", error));
    };
    const timer = setTimeout(fetchRandomGif, 1000);
    return () => clearTimeout(timer);
  }, [activeNavLink, activeElement, scrollInside]);

  if (!gif) return <div>Loading...</div>;

  return (
    <div className="h-full w-full border-2 border-black bg-black/45">
      {gif ? (
        <div
          className="h-full w-full bg-cover bg-center opacity-80"
          style={{ backgroundImage: `url(${gif.images.downsized.url})` }}
        >
          <img
            className="hidden"
            src={gif.images.downsized.url}
            alt={gif.title}
            loading="lazy"
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomGifComponent;
