import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  className?: string;
  style?: React.CSSProperties;
  onPrevious: () => void;
  disablePrevious?: boolean;
  onNext: () => void;
  disableNext?: boolean;
};

export default function Pagination({
  className,
  style,
  onPrevious,
  disablePrevious = false,
  onNext,
  disableNext = false,
}: PaginationProps) {
  return (
    <div className={clsx("flex items-center gap-2", className)} style={style}>
      <button
        className="border p-2 hover:bg-gray-100/50 transition-all delay-75 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
        disabled={disablePrevious}
        onClick={() => {
          if (!disablePrevious) {
            onPrevious();
          }
        }}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        className="border p-2 hover:bg-gray-100/50 transition-all delay-75 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed"
        disabled={disableNext}
        onClick={() => {
          if (!disableNext) {
            onNext();
          }
        }}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
