import { useParams } from "react-router-dom";
import NavBar from "../../NavBar";
import EditDraftHero from "./EditDraftHero";

export default function EditDraftPage() {
	const { id } = useParams();

	return (
		<>
			<NavBar />
			<h1 className='bg-lobby w-full text-center text-4xl uppercase  text-white'>
				{id}
			</h1>
			<main className='bg-lobby flex min-h-screen w-screen justify-center text-[#5A5C6F]'>
				<div
					id='container'
					className='mt-[5vh] flex h-full w-10/12 space-x-4'
				>
					<EditDraftHero
						title='UEFA EURO 2024'
						date='May 16, 2024'
						team='15'
						prizePool='1.5'
						buyIn='.5'
					/>
				</div>
			</main>
		</>
	);
}
