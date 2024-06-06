import SOLIcon from "../../../ui/SOLIcon";
import  TeamIcon  from "../../../ui/TeamIcon";

export function Amount({
	amount,
}: {
	amount: number;
}) {
	return (
		<div className='flex h-[35px] items-center'>
			<SOLIcon />
			<p className='mx-2 text-[18px] font-medium text-white'>
				{amount}
			</p>
		</div>
	);
}
export function Teams({
	teams,
}: {
	teams: number;
}) {
	return (
		<div className='ml-2 flex h-[35px] items-center'>
			<TeamIcon fill='5A5D6F' />
			<p className='mx-2 text-[18px] font-medium text-white'>
				{teams} Teams
			</p>
		</div>
	);
}


