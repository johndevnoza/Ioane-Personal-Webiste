import filteredData from "lib/filteredData";
import { useEffect, useState } from "react";
import apiClient from "services/axiosConfig";

const RandomGifComponent = () => {
  const { activeNavLink, activeElement } = filteredData();

  const [gif, setGif] = useState(null);

  useEffect(() => {
    const fetchRandomGif = async () => {
      if (activeNavLink) {
        const queryParam = activeElement.name || activeNavLink.title;
        apiClient
          .get(`/search?q=${queryParam}&limit=1&offset=0`)
          .then((response) => {
            const gifData = response.data.data[0];
            setGif(gifData);
          })
          .catch((error) => console.error("Error fetching data:", error));
      }
    };
    const timer = setTimeout(fetchRandomGif, 1000);
    return () => clearTimeout(timer);
  }, [activeNavLink, activeElement]);

  if (!gif) return <div>Loading...</div>;

  return (
    <div className="h-full w-full border-2 border-black bg-black/45">
      {gif ? (
        <div
          className="h-full w-full bg-cover bg-center"
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
