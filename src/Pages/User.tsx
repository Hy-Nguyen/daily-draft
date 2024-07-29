import UserData from '../data/UserProfile.json';
import UserTransactionTable from '../components/User/UserTransactionTable';
import UserProfileView from '../components/User/UserProfileView';

export default function User() {
  let user = UserData;

  return (
    <>
      <main className="bg-lobby flex min-h-screen w-screen justify-center text-white">
        <div className="mt-[5vh] flex h-full min-h-[600px] w-10/12 max-w-[2000px] flex-col gap-4 bg-[#191A22] p-4 xl:flex-row xl:gap-20">
          <UserProfileView user={user} />
          <UserTransactionTable transactions={user.transactions} />
        </div>
      </main>
    </>
  );
}
