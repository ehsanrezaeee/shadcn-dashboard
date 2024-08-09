import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GetPaginatedDataFromQuery = ({
  key,
  url,
  isFeature,
  feature,
  dataForFeature,
  interval,
  page,
}: {
  key: string;
  url: string;
  isFeature: boolean;
  feature?: string;
  dataForFeature?: string;
  interval?: number;
  page: number;
}) => {
  const { data, refetch, isError, isFetching, isPending, isPlaceholderData } =
    useQuery({
      queryKey: [key, page],
      queryFn: () =>
        axios
          .get(
            `${process.env.NEXT_PUBLIC_BASE_URL_BACK_END}/${url}${
              isFeature ? "?" + feature + "=" + dataForFeature + "&" : "?"
            }${"page=" + page}`
          )
          .then((res) => {
            return res.data;
          }),
      refetchInterval: interval,
      placeholderData: keepPreviousData,
    });
  return { data, refetch, isError, isFetching, isPending, isPlaceholderData };
};
