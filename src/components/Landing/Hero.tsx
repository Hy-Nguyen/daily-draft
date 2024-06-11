import Crown from "../../Icons/Crown";

export default function Hero() {
	return (
		<header
			id='hero'
			className='bg-hero flex h-[400px] w-full flex-col justify-evenly rounded-3xl p-8 uppercase'
		>
			<h1 className='text-4xl font-semibold'>
				Player matchups
			</h1>
			<h2 className='text-2xl'>
				pick{" "}
				<span className='text-[#52BE70]'>
					3-10
				</span>{" "}
				duels
			</h2>
			<div className='flex space-x-2'>
				<Crown />
				<h3 className='text-sm font-light'>
					And win up to{" "}
					<span className='mr-1 font-semibold text-[#52BE70]'>
						{" "}
						500x
					</span>
					your stake
				</h3>
			</div>
			<div className='flex h-[40px] w-[175px] items-center justify-center rounded-[8px] bg-[#52BE70]'>
				Connect Wallet
			</div>
		</header>
	);
}
