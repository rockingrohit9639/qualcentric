import { User } from "@/types/user";
import clsx from "clsx";
import Modal from "../modal";
import dayjs from "dayjs";

type UserCardProps = {
  className?: string;
  style?: React.CSSProperties;
  data: User;
};

export default function UserCard({ className, style, data }: UserCardProps) {
  return (
    <Modal
      heading={`${data.name.title} ${data.name.first} ${data.name.last}`}
      trigger={
        <div
          className={clsx(
            "w-full min-h-[384px] border rounded-md bg-white/50 flex items-center justify-center gap-4 flex-col p-4 cursor-pointer",
            className
          )}
          style={style}
        >
          <img
            src={data.picture.large}
            alt={data.name.first}
            className="rounded-full"
          />

          <div className="text-xl font-medium text-center break-words">
            {`${data.name.title} ${data.name.first} ${data.name.last}`}
          </div>

          <div className="text-sm text-gray-500 text-center break-words">
            {data.email}
          </div>
        </div>
      }
    >
      <div className="w-full grid md:grid-cols-2 gap-4">
        <img
          src={data.picture.large}
          alt={data.name.first}
          className="w-full"
        />

        <div>
          <div className="flex items-center gap-2">
            <div>Full Name :</div>
            <div className="font-medium break-words">
              {`${data.name.title} ${data.name.first} ${data.name.last}`}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>Email :</div>
            <div className="font-medium break-words">{data.email}</div>
          </div>

          <div className="flex items-center gap-2">
            <div>DOB :</div>
            <div className="font-medium break-words">
              {dayjs(data.dob.date).format("DD-MMMM-YYYY")}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>Phone Number :</div>
            <div className="font-medium break-words">{data.phone}</div>
          </div>

          <div className="w-full h-[1px] bg-gray-100 my-4"></div>

          <div className="flex items-center gap-2">
            <div>Street :</div>
            <div className="font-medium break-words">
              {`${data.location.street.number} ${data.location.street.name}`}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div>City :</div>
            <div className="font-medium break-words">{data.location.city}</div>
          </div>

          <div className="flex items-center gap-2">
            <div>State :</div>
            <div className="font-medium break-words">{data.location.state}</div>
          </div>

          <div className="flex items-center gap-2">
            <div>Postal Code :</div>
            <div className="font-medium break-words">
              {data.location.postcode}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
