import {
	GreenBadge,
	YellowBadge,
} from "../Landing/GameDisplay/Tournament/Badges";
import SOLIcon from "../ui/SOLIcon";
import EditDraft from "./EditDrafts/EditDraft";
import Entries from "./Entries";

export default function DraftItem() {
	return (
		<>
			<div className='mt-2 grid h-[56px] w-full grid-cols-12 items-center border-b border-white/10 text-white'>
				<div className='col-span-4 grid grid-cols-2'>
					<div className='flex flex-col'>
						<h1 className='text-xs text-[#5A5C6F]'>
							Cup
						</h1>
						<h1 className=''>Name</h1>
					</div>
					<div className='flex items-center'>
						<GreenBadge time='50M' />
						<YellowBadge />
					</div>
				</div>
				<div className='col-span-1 flex items-center space-x-2'>
					<SOLIcon />
					<h1>.5</h1>
				</div>
				<div className='col-span-1 flex items-center space-x-2'>
					<SOLIcon />
					<h1>1.5</h1>
				</div>
				<div className='col-span-2 flex items-center space-x-2'>
					<Entries entryNum={7} entryMax={10} />
				</div>
				<div className='col-span-2 flex w-full items-center whitespace-nowrap'>
					<h1>Apr 01, Sat 08:30 AM</h1>
				</div>
				<EditDraft />
			</div>
		</>
	);
}
