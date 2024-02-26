'use client';

import { useContext, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ResultContext } from '@/wrapper';

export default function Home() {
	const router = useRouter();
	const [result] = useContext(ResultContext);

	const [yourResult, setYourResult] = useState<string>(result.result);
	const pageRef = useRef<HTMLDivElement>(null);
	const [pageWidth, setPageWidth] = useState<number>(390);
	const [pageHeight, setPageHeight] = useState<number>(840);

	useEffect(() => {
		if (yourResult === '') {
			router.push('/');
		}

		const resizeObserver = new ResizeObserver(() => {
			setPageWidth(pageRef.current?.clientWidth as number);
			setPageHeight(pageRef.current?.clientHeight as number);
		});

		if (pageRef.current) resizeObserver.observe(pageRef.current);

		return () => {
			if (pageRef.current) resizeObserver.unobserve(pageRef.current);
		};
	}, []);

	const widthRatio = pageWidth / 390;
	const heightRatio = pageHeight / 840;
	const ratio = Math.min(widthRatio, heightRatio);

	return (
		<div
			ref={pageRef}
			className="relative flex flex-col w-full h-full gap-64 justify-center items-center"
		>
			<Image
				src="/stars.svg"
				width={140 * ratio}
				height={280 * ratio}
				className="absolute right-0"
				style={{ top: ((0.025 * pageHeight - 0.4083) * pageHeight) / 100 }}
				alt="Picture of the decoration"
			/>
			<Image
				src="/blue_thunder.svg"
				width={71.5 * ratio}
				height={119 * ratio}
				className="absolute left-0"
				style={{ top: ((0.0196 * pageHeight + 19.3779) * pageHeight) / 100 }}
				alt="Picture of the decoration"
			/>
			<Image
				src="/yellow_thunder.svg"
				width={70 * ratio}
				height={106 * ratio}
				className="absolute bottom-0"
				style={{ left: 0.2 * pageWidth }}
				alt="Picture of the decoration"
			/>
			<Image
				src="/blue_glitter.svg"
				width={120 * ratio}
				height={150 * ratio}
				className="absolute bottom-0 right-[20%]"
				alt="Picture of the decoration"
			/>
			<div className="flex flex-col gap-16 justify-center items-center z-0">
				<p className="font-istok break-words text-center text-green text-p2 drop-shadow-xl shadow-black">
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
			<Image
				src="/green_thunder.svg"
				width={93 * ratio}
				height={147 * ratio}
				className="absolute left-0"
				style={{ top: ((-0.02 * pageHeight + 83.2) * pageHeight) / 100 }}
				alt="Picture of the decoration"
			/>
			<Image
				src="/yellow_glitter.svg"
				width={69 * ratio}
				height={90 * ratio}
				className="absolute right-0"
				style={{ top: ((-0.02 * pageHeight + 83.2) * pageHeight) / 100 }}
				alt="Picture of the decoration"
			/>
			<Image
				src="/logo.svg"
				width={160 * ratio}
				height={160 * ratio}
				className="absolute"
				style={{
					top: ((0.007168458 * pageHeight - 2.679856115) * pageHeight) / 100,
				}}
				alt="Picture of the decoration"
			/>
		</div>
	);
}
