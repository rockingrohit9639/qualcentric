import { User } from "@/types/user";
import clsx from "clsx";

type UserCardProps = {
  className?: string;
  style?: React.CSSProperties;
  data: User;
};

export default function UserCard({ className, style, data }: UserCardProps) {
  return (
    <div
      className={clsx(
        "w-full min-h-[384px] border rounded-md bg-white/50 flex items-center justify-center gap-4 backdrop-blur-sm flex-col",
        className
      )}
      style={style}
    >
      <img
        src={data.picture.large}
        alt={data.name.first}
        className="rounded-full"
      />

      <div className="text-xl font-medium">
        {data.name.title} {data.name.first} {data.name.last}
      </div>

      <div className="text-sm text-gray-500">{data.email}</div>
    </div>
  );
}
