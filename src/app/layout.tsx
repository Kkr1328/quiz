import type { Metadata } from 'next';
import { Istok_Web } from 'next/font/google';
import './globals.css';
import Wrapper from '@/wrapper';

const istok_web = Istok_Web({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-istok-web',
});

export const metadata: Metadata = {
	title: 'Identity of SIRIRAJ',
	description: "Quiz to indicate your SIRIRAJ's identity",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				id="__next"
				suppressHydrationWarning={true}
				className={`${istok_web.variable} font-sans`}
			>
				<Wrapper>
					<div className="flex w-[100dvw] h-[100dvh] bg-white overflow-x-auto overflow-y-auto">
						{children}
					</div>
				</Wrapper>
			</body>
		</html>
	);
}
