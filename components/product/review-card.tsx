import Image from "next/image";
import { CgProfile } from "react-icons/cg";

interface ReviewCardProps {
  text: string;
  firstName: string;
  lastName: string;
  photo: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  text,
  firstName,
  lastName,
  photo,
}) => {
  return (
    <div className="flex min-w-full flex-col gap-y-3 rounded-2xl bg-white py-5 pl-4 pr-8 text-black lg:min-w-48 2xl:min-w-64">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          {photo ? (
            <Image src={photo} alt={firstName} width={44} height={44} />
          ) : (
            <CgProfile size={44} />
          )}
          <span className="font-semibold">
            {firstName} {lastName}
          </span>
        </div>
      </div>
      <p className="max-w-[240px]">{text}</p>
    </div>
  );
};

export default ReviewCard;
