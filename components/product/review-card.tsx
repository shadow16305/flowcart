import { CgProfile } from "react-icons/cg";

const ReviewCard = () => {
  return (
    <div className="flex flex-col gap-y-3 rounded-2xl bg-white py-5 pl-4 pr-8 text-black lg:min-w-48 2xl:min-w-64">
      <CgProfile size={44} />
      <h4 className="text-xl font-semibold tracking-widest">Title</h4>
      <p className="max-w-[240px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        laoreet augue enim, eget convallis magna condimentum vitae. Mauris
        luctus libero sodales velit dapibus, ac feugiat est congue.
      </p>
    </div>
  );
};

export default ReviewCard;
