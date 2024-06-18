import AddPlayer from "../AddPlayer";
import PositionLabel from "./PositionLabel";

export default function Field() {
	return (
		<div
			id='field'
			className='relative my-6 flex h-fit w-fit items-center justify-center'
		>
			<img
				src='/field/field.png'
				alt='field'
				className='rounded-[10px] bg-[#111217]'
			/>

			<div
				id='goalkeeper'
				className='absolute left-1/2 top-[10%] flex h-[50px] w-[50px] -translate-x-1/2 transform flex-col items-center justify-start space-y-3'
			>
				<AddPlayer />
				<PositionLabel position='Goal Keeper' />
			</div>
			<div
				id='goalkeeper'
				className='absolute left-1/2 top-[30%] flex h-[50px] w-[50px] -translate-x-1/2 transform flex-col items-center justify-start space-y-3'
			>
				<div className='flex flex-row space-x-5'>
					<AddPlayer />
					<AddPlayer />
					<AddPlayer />
					<AddPlayer />
					<AddPlayer />
				</div>
				<PositionLabel position='defender' />
			</div>
			<div
				id='midfielder'
				className='absolute left-1/2 top-[50%] flex h-[50px] w-[50px] -translate-x-1/2 transform flex-col items-center justify-start space-y-3'
			>
				<div className='flex flex-row space-x-5'>
					<AddPlayer />
					<AddPlayer />
					<AddPlayer />
					<AddPlayer />
					<AddPlayer />
				</div>
				<PositionLabel position='midfielder' />
			</div>
			<div
				id='forward'
				className='absolute left-1/2 top-[70%] flex h-[50px] w-[50px] -translate-x-1/2 transform flex-col items-center justify-start space-y-3'
			>
				<div className='flex flex-row space-x-5'>
					<AddPlayer />
					<AddPlayer />
					<AddPlayer />
				</div>
				<PositionLabel position='forward' />
			</div>
		</div>
	);
}
