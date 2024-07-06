import ButtonPrimary from "../../../../../components/ui/button-primary";
import ButtonSecondary from "../../../../../components/ui/button-secondary";

interface ReviewModalProps {
  newCommentText: string;
  setNewCommentText: (value: string) => void;
  handleAddComment: () => void;
  closeModal: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  newCommentText,
  setNewCommentText,
  handleAddComment,
  closeModal,
}) => {
  return (
    <div className="min-w-[91%] rounded-xl bg-white p-4 lg:min-w-0 lg:max-w-fit">
      <textarea
        value={newCommentText}
        onChange={(e) => setNewCommentText(e.target.value)}
        placeholder="Write a review..."
        className="w-full rounded-md border px-3 py-2 focus:border-amber-400 focus:outline-none focus:ring-0"
      />
      <div className="mt-4 flex gap-x-4">
        <button type="button" onClick={handleAddComment}>
          <ButtonPrimary>Add Review</ButtonPrimary>
        </button>
        <button type="button" onClick={closeModal}>
          <ButtonSecondary>Cancel</ButtonSecondary>
        </button>
      </div>
    </div>
  );
};

export default ReviewModal;
