'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		localStorage.setItem('yourResult', '');
	}, [localStorage]);

	return (
		<div className="flex flex-col w-full h-full gap-32 justify-center items-center">
			<Image
				priority
				width="0"
				height="0"
				sizes="100vw"
				className="w-full h-auto"
				src="/questions.svg"
				alt="Questions picture"
			/>
			<div className="flex flex-col w-[70vw] mb-40 p-32 pb-72 bg-white rounded-lg drop-shadow-xl items-center">
				<p className="font-istok break-words text-center text-green text-h1">
					Identity of SIRIRAJ
				</p>
				<Button
					variant="contained"
					onClick={() => router.push('/quiz')}
					className="normal-case absolute -bottom-40 h-80 px-32 bg-green hover:bg-dark_green rounded-lg drop-shadow-lg"
				>
					<p className="font-istok break-words text-center text-white text-p2">
						Take quizzes
					</p>
				</Button>
			</div>
		</div>
	);
}
