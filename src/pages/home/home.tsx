import { useGetUsersQuery } from "@/features/api";
import { useState } from "react";

export default function Home() {
  const [page] = useState(1);
  const [results] = useState(10);
  const { data, isLoading } = useGetUsersQuery({
    page,
    results,
  });

  console.log(data, isLoading);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Home Page</h1>
    </div>
  );
}
