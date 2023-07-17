import { ReviewData } from "../assets/data";

const ReviewCard: React.FC<ReviewData> = ({ comment, user }) => {
  return (
    <div className="py-[32px] px-[20px] rounded-hard bg-candy-100 grid gap-y-[18px] bg-reg-100">
      <div className="flex gap-x-[4px] justify-start items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M19.9478 7.17987C19.8169 6.77841 19.4577 6.49327 19.0327 6.45531L13.2602 5.9357L10.9776 0.639404C10.8093 0.251254 10.426 0 10.0001 0C9.5742 0 9.19089 0.251254 9.02258 0.640312L6.73996 5.9357L0.966512 6.45531C0.542308 6.49418 0.184023 6.77841 0.0523364 7.17987C-0.0793501 7.58133 0.0422653 8.02167 0.363165 8.29925L4.72652 12.0927L3.43987 17.7112C3.34572 18.1243 3.50747 18.5513 3.85324 18.7991C4.03909 18.9322 4.25654 19 4.47581 19C4.66487 19 4.85241 18.9495 5.02072 18.8496L10.0001 15.8995L14.9776 18.8496C15.3419 19.0669 15.801 19.047 16.146 18.7991C16.4919 18.5506 16.6535 18.1234 16.5594 17.7112L15.2727 12.0927L19.6361 8.3C19.957 8.02167 20.0795 7.58209 19.9478 7.17987Z"
              fill="#FEC430"
            />
          </svg>
        ))}
      </div>
      <div className="flex gap-x-[15px] items-center justify-start">
        <div className="w-[48px] h-[48px] overflow-hidden rounded-full">
          <img src={user.avatar} className="w-full h-full" alt={user.name} />
        </div>
        <h3 className="heading-3 text-umbra-700">{user.name}</h3>
      </div>
      <p className="font-body text-umbra-500">{comment}</p>
    </div>
  );
};

export default ReviewCard;
