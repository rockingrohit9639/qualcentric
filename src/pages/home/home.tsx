import Page from "@/components/page";
import Pagination from "@/components/pagination";
import UserCard from "@/components/user-card";
import { useGetUsersQuery } from "@/features/api";
import { matchSorter } from "match-sorter";
import { useMemo, useState } from "react";

export default function Home() {
  const [query] = useState("");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const { data, isFetching, error, refetch } = useGetUsersQuery({
    page,
    results: perPage,
  });

  const usersToRender = useMemo(() => {
    if (!data?.results?.length) {
      return [];
    }

    return matchSorter(data.results, query, {
      keys: ["name.first", "name.last", "email"],
    });
  }, [data?.results, query]);

  const scrollToTop = () => {
    const scrollToTopElement = document.getElementById("scroll-to-top");
    scrollToTopElement?.scrollIntoView({ behavior: "smooth" });
  };

  if (isFetching) {
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
    <Page>
      <div id="scroll-to-top"></div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {usersToRender.map((user) => (
          <UserCard key={user.id.value} data={user} />
        ))}
      </div>

      <div className="flex items-center justify-center bg-white my-4 rounded py-4 shadow-sm gap-4">
        <Pagination
          onPrevious={() => {
            setPage((prev) => Math.max(prev - 1, 1));
            scrollToTop();
          }}
          disablePrevious={page === 1}
          onNext={() => {
            setPage((prev) => prev + 1);
            scrollToTop();
          }}
        />
        <div>1 - {perPage}</div>

        <input
          type="number"
          className="border px-4 w-20"
          value={perPage}
          onChange={(e) => {
            setPerPage(Math.min(e.target.valueAsNumber, 50));
          }}
        />
      </div>
    </Page>
  );
}
