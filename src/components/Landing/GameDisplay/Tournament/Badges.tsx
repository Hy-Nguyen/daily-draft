export function GreenBadge({
	time,
}: {
	time: string;
}) {
	return (
		<div
			className='flex h-[35px] w-fit items-center justify-center rounded-[6px] bg-[#52BE70]/35 px-4'
			style={{
				boxShadow: "0px 0px 12px 0px #52BE7038",
			}}
		>
			<p className='text-[12px] text-[#52BE70]'>
				{time}
			</p>
		</div>
	);
}
export function YellowBadge({
	text = "Guaranteed",
}: {
	text?: string;
}) {
	return (
		<div
			className='ml-3 flex h-[35px] w-fit items-center justify-center rounded-[6px] bg-[#FFC42E54] px-4'
			style={{
				boxShadow: "0px 0px 12px 0px #FFC42E38",
			}}
		>
			<p className='text-[12px] text-[#FFC42E]'>
				{text}
			</p>
		</div>
	);
}
