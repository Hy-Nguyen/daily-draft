export function TournamentImage() {
	return (
		<div
			id='image'
			className='flex h-3/5 w-3/5 items-center justify-center rounded-full bg-[#131619] py-2'
		>
			<img
				src='/Lobby/Madrid.png'
				alt='Team one'
				className='h-1/2 w-1/2 object-cover'
			/>
		</div>
	);
}
export function TournamentImageRight() {
	return (
		<div
			id='image'
			className='z-10 -ml-6 flex h-3/5 w-3/5 items-center justify-center rounded-full bg-[#131619] py-2'
		>
			<img
				src='/Lobby/Madrid.png'
				alt='Team Two'
				className='h-1/2 w-1/2 object-cover'
			/>
		</div>
	);
}
