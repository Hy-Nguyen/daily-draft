
export function DurationTimer({ time }: { time: string }) {
	return (
		<div className='flex h-[35px] w-fit items-center justify-center rounded-[6px] border-2 border-[#A7ADB9] bg-transparent px-3'>
			<h1 className='text-[12px] font-semibold text-[#A7ADB9]'>
				{time}
			</h1>
		</div>
	);
}

export function Duration2({
	text,
	alert,
}: {
	text: string;
	alert: number;
}) {
	return (
		<div className='relative ml-3 flex h-[35px] w-fit items-center justify-center rounded-[6px] border-2 border-[#A7ADB9] bg-transparent px-3'>
			<h1 className='text-[12px] font-semibold text-[#A7ADB9]'>
				{text}
			</h1>
			<div
				className='absolute -right-2 -top-2 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#52BE70]'
				style={{
					boxShadow: "0px 0px 8px 0px #52BE70",
				}}
			>
				<p className='text-[12px] font-light text-[#121418]'>
					{alert}
				</p>
			</div>
		</div>
	);
}