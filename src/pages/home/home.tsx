import Page from "@/components/page";
import UserCard from "@/components/user-card";
import { useGetUsersQuery } from "@/features/api";
import { matchSorter } from "match-sorter";
import { useMemo, useState } from "react";

export default function Home() {
  const [query] = useState("");
  const [page] = useState(1);
  const [results] = useState(10);
  const { data, isLoading, error, refetch } = useGetUsersQuery({
    page,
    results,
  });

  const usersToRender = useMemo(() => {
    if (!data?.results?.length) {
      return [];
    }

    return matchSorter(data.results, query, {
      keys: ["name.first", "name.last", "email"],
    });
  }, [data?.results, query]);

  if (isLoading) {
    return (
      <Page className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 7 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-96 bg-gray-200 animate-pulse rounded-md"
          ></div>
        ))}
      </Page>
    );
  }

  if (error) {
    return (
      <Page className="flex items-center justify-center mt-0 flex-col gap-4">
        <p className="text-xl font-medium text-red-500">
          Something went wrong while fetching user details!
        </p>
        <button
          className="border px-8 py-2 text-lg rounded bg-blue-500 text-white"
          onClick={() => {
            refetch();
          }}
        >
          Retry
        </button>
      </Page>
    );
  }

  return (
    <Page className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {usersToRender.map((user) => (
        <UserCard key={user.id.value} data={user} />
      ))}
    </Page>
  );
}
