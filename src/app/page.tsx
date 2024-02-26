'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('yourResult', '');
		}
	}, []);

	return (
		<div className="flex flex-col w-full h-full gap-32 justify-center items-center">
			<div className="max-w-[400px]">
				<Image
					priority
					width="0"
					height="0"
					sizes="100vw"
					className="w-full h-auto"
					src="/questions.svg"
					alt="Questions picture"
				/>
			</div>
			<div className="flex flex-col w-[70vw] max-w-[400px] mb-40 p-32 pb-72 bg-white rounded-lg drop-shadow-xl items-center">
				<p className="font-istok break-words text-center text-green text-h1">
					Identity of SIRIRAJ
				</p>
				<Button
					variant="contained"
					onClick={() => router.push('/quiz')}
					className="normal-case absolute -bottom-40 min-h-[80px] px-32 bg-green hover:bg-dark_green rounded-lg drop-shadow-lg"
				>
					<p className="font-istok break-words text-center text-white text-p2">
						เริ่มทำแบบทดสอบเลย
					</p>
				</Button>
			</div>
		</div>
	);
}
