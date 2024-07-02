import Crown from '../../Icons/Crown';

interface UserProfileViewProps {
  username: string;
  contestsJoined: number;
  contestsWon: number;
  pfp: string;
  startDate: string;
  transactions: {
    transactionId: string;
    date: string;
    amount: number;
    type: string;
    status: boolean;
  }[];
}

export default function UserProfileView({ user }: { user: UserProfileViewProps }) {
  let formattedStartDate = dateFormatter(user.startDate);
  return (
    <div className="flex w-1/5 flex-col items-center justify-start gap-4 p-2">
      <div className="flex w-full items-center justify-center rounded-[8px] border border-[#52BE70] bg-[#52BE70]/15 p-2">
        <h1 className="w-fit font-light text-[#52BE70]">Member since: {formattedStartDate}</h1>
      </div>
      <div className="aspect-square w-full overflow-hidden rounded-[8px] border border-white/15 bg-[#52BE70]/20">
        <img src={user.pfp} alt={user.username} className="aspect-square w-full" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-draft text-lg font-semibold">Username</h1>
        <h1 className="text-base">{user.username}</h1>
      </div>
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-draft text-lg font-semibold">Contests Joined</h1>
        <h1 className="text-base text-[#52BE70]">{user.contestsJoined}</h1>
      </div>
      <div className="flex w-full flex-col gap-1">
        <h1 className="text-draft flex items-center gap-4 text-lg font-semibold">
          Contests Won {<Crown className="rotate-[30deg]" />}
        </h1>
        <h1 className="text-base text-[#52BE70]">{user.contestsWon}</h1>
      </div>
    </div>
  );
}

const dateFormatter = (input: string) => {
  let date = new Date(input);
  let month = date.toLocaleString('default', { month: 'long' });
  let day = date.getDate();
  let year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};
