import ButtonPrimary from "../ui/button-primary";
import ButtonSecondary from "../ui/button-secondary";

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
    <>
      <div
        onClick={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50"
      />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4">
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write a review..."
          className="w-full rounded-md border px-3 py-2 focus:outline-none"
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
    </>
  );
};

export default ReviewModal;
