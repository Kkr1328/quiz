'use client';

import { useEffect, useState } from 'react';

export default function Home() {
	const [yourResult, setYourResult] = useState<string>('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setYourResult(localStorage.getItem('yourResult') ?? '');
		}
	}, []);

	return (
		<div className="flex flex-col w-full h-full gap-64 justify-center items-center">
			<div className="flex flex-col gap-16 justify-center items-center">
				<p className="font-istok break-words text-center text-green text-p2">
					Your SIRIRAJ's identity is
				</p>
				<div className="flex w-[140px] h-[140px] rounded-[70px] bg-green drop-shadow-xl justify-center items-center">
					<p className="font-istok break-words text-center text-white text-h1">
						{yourResult}
					</p>
				</div>
			</div>
			<div className="w-full py-8 bg-green drop-shadow-lg">
				<p className="font-istok break-words text-center text-white text-p2">
					Let's share this to your IG 🎉
				</p>
			</div>
		</div>
	);
}
