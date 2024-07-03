import { keepPreviousData, useQuery } from "@tanstack/react-query";
import filteredData from "lib/filteredData";
import apiClient from "services/axiosConfig";
import useDebounce from "hooks/useDebaunce";
import { scrollManagment } from "scrollManagment";
import PoweredByGyphy from "./PoweredByGyphy";

const RandomGifComponent = () => {
  const powerOn = scrollManagment((state) => state.powerOn);

  const { queryParam } = filteredData();
  const debouncedSearchTerm = useDebounce(queryParam, 700);

  const { data: gif, isPending } = useQuery({
    queryKey: ["gifs_query", debouncedSearchTerm],
    queryFn: async () => {
      try {
        const response = await apiClient.get(
          `/search?q=${debouncedSearchTerm}&limit=1&offset=0`,
        );
        if (response.data && response.data.data.length > 0) {
          return response.data.data[0];
        } else {
          return null;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    },
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 15,
  });

  if (isPending)
    return (
      <div className="flex h-full w-full items-center justify-center border-2 border-black bg-black/45">
        <img
          src={"/LoadingGiff.gif"}
          alt="Loading..."
          loading="lazy"
          className="size-full"
        />
      </div>
    );

  return (
    <div className="relative h-full w-full overflow-hidden border-2 border-black bg-black/45 outline outline-navhighlight">
    <PoweredByGyphy/>
      <div className="absolute -left-24 bottom-10 size-[50%] rotate-45 scale-x-150 scale-y-[500%] bg-gradient-to-r from-white mix-blend-overlay" />
      {!powerOn
        ? null
        : gif && (
            <div
              className="h-full w-full bg-cover bg-center opacity-60 shadow-inner shadow-black saturate-50"
              style={{ backgroundImage: `url(${gif.images.downsized.url})` }}
            >
              <img
                className="hidden"
                src={gif.images.downsized.url}
                alt={gif.title}
                loading="lazy"
              />
            </div>
          )}
      {!gif && powerOn && (
        <img
          src={"/images/reachedMaximumLimitGiff.gif"}
          alt="Loading..."
          loading="lazy"
          className="absolute top-[35%] size-max md:scale-[200%]"
        />
      )}
    </div>
  );
};

export default RandomGifComponent;
