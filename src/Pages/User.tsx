import UserData from '../data/UserProfile.json';
import UserTransactionTable from '../components/User/UserTransactionTable';
import UserProfileView from '../components/User/UserProfileView';

export default function User() {
  let user = UserData;

  return (
    <>
      <main className="bg-lobby  flex min-h-screen w-screen justify-center text-white">
        <div className=" mt-[5vh] flex h-full min-h-[600px] w-10/12 max-w-[2000px] gap-20 bg-[#191A22] p-4">
          <UserProfileView user={user} />
          <UserTransactionTable transactions={user.transactions} />
        </div>
      </main>
    </>
  );
}
