'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface ResultData {
	result: string;
}

export const ResultContext = createContext<
	[ResultData, Dispatch<SetStateAction<ResultData>>]
>([{ result: '' }, () => {}]);

export default function Wrapper(props: { children: React.ReactNode }) {
	const [result, setResult] = useState<ResultData>({
		result: '',
	});

	return (
		<ResultContext.Provider value={[result, setResult]}>
			{props.children}
		</ResultContext.Provider>
	);
}
