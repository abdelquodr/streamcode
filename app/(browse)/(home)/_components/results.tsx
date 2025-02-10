import { getStreams } from "@/lib/feed-service";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

import { ResultCard, ResultCardSkeleton } from "./result-card";

export const Results = async () => {
  const data = await getStreams();

  console.log("=== data from stream", data);

  return (
    <div>
      {data.length === 0 && (
        <>
          <h2 className="text-lg font-semibold mb-4">No Stream Found</h2>
          <Image
            className="text-center mx-auto"
            width={100}
            height={100}
            src="/img/not-found-search.png"
            alt="not found"
          />
        </>
      )}
      <>
        <h2 className="text-lg font-semibold mb-4">
          Streams we think you&apos;ll like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
          {data.map((result) => (
            <ResultCard key={result.id} data={result} />
          ))}
        </div>
      </>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
