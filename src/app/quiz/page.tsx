'use client';

import { defaultQuestion, questionsSet } from '@/const';
import NavigateBeforeRoundedIcon from '@mui/icons-material/NavigateBeforeRounded';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
	const router = useRouter();

	const [questionsNumber, setQuestionsNumber] = useState<number>(1);
	const [questionsId, setQuestionsId] = useState<number>(10);
	const [answer, setAnswer] = useState<{ [id: number]: number }>({});

	const question =
		questionsSet.find((question) => question.id === questionsId) ??
		defaultQuestion;

	const handlePreviousQuestion = () => {
		if (questionsId > 10 && questionsNumber > 1) {
			setQuestionsNumber(questionsNumber - 1);
			switch (questionsId) {
				case 41:
				case 42:
					setQuestionsId(40);
					break;
				case 50:
					answer[40] === 0 ? setQuestionsId(41) : setQuestionsId(42);
					break;
				case 51:
					setQuestionsId(50);
					break;
				case 52:
					answer[50] === 0 ? setQuestionsId(51) : setQuestionsId(50);
					break;
				case 53:
					setQuestionsId(52);
					break;
				case 60:
					setQuestionsId(53);
					break;
				default:
					setQuestionsId(questionsId - 10);
			}
		}
	};

	const handleNextQuestion = (newAnswer?: number) => {
		if (questionsId < 60 && questionsNumber < 10) {
			setQuestionsNumber(questionsNumber + 1);
			if (newAnswer !== undefined) {
				if (questionsId === 40 && newAnswer !== answer[40]) {
					const updateAnswer = Object.fromEntries(
						Object.entries(answer).filter(
							([key]) => ![41, 42].includes(Number(key))
						)
					);
					setAnswer({
						...updateAnswer,
						[questionsId as number]: newAnswer,
					});
				} else if (questionsId === 50 && newAnswer !== answer[50]) {
					const updateAnswer = Object.fromEntries(
						Object.entries(answer).filter(
							([key]) => ![51, 52, 53].includes(Number(key))
						)
					);
					setAnswer({
						...updateAnswer,
						[questionsId as number]: newAnswer,
					});
				} else {
					setAnswer({ ...answer, [questionsId]: newAnswer });
				}
			}
			switch (questionsId) {
				case 40:
					newAnswer === 0 ? setQuestionsId(41) : setQuestionsId(42);
					break;
				case 41:
				case 42:
					setQuestionsId(50);
					break;
				case 50:
					newAnswer === 0 ? setQuestionsId(51) : setQuestionsId(52);
					break;
				case 51:
					setQuestionsId(52);
					break;
				case 52:
					setQuestionsId(53);
					break;
				case 53:
					setQuestionsId(60);
					break;
				default:
					setQuestionsId(questionsId + 10);
			}
		}
		if (questionsId === 60) {
			goToSummary({ ...answer, [60]: newAnswer });
		}
	};

	const goToSummary = async (answerSet: any) => {
		const studyScore =
			answerSet[10] ?? 0 + answerSet[20] ?? 0 + answerSet[30] ?? 0;
		const activityScore = answerSet[41] ?? 0 + answerSet[42] ?? 0;
		const livingScore =
			answerSet[51] ?? 0 + answerSet[52] ?? 0 + answerSet[53] ?? 0;
		const studyResults = ['S', 'I', 'R', 'A', 'J', 'M'][studyScore];
		const activityResults = ['S', 'I'][activityScore];
		const livingResults = ['S', 'I', 'R', 'A', 'J', 'M', 'A'][livingScore];
		if (typeof window !== 'undefined') {
			localStorage.setItem(
				'yourResult',
				`${studyResults} ${activityResults} ${livingResults}`
			);
		}
		fetch(process.env.NEXT_PUBLIC_API_URL ?? '', {
			method: 'POST',
			body: JSON.stringify(answerSet),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		router.push('/summary');
		return;
	};

	return (
		<div className="flex flex-col w-full h-full py-32 gap-32 items-center">
			<div className="flex flex-row w-full max-w-[400px] justify-center items-center">
				<Button
					disableRipple
					className="normal-case flex flex-row justify-center items-center text-green disabled:text-grey"
					disabled={questionsId <= 10}
					onClick={handlePreviousQuestion}
				>
					{questionsId > 10 && (
						<>
							<NavigateBeforeRoundedIcon />
							<p className="font-istok break-words text-center text-h2">Back</p>
						</>
					)}
				</Button>

				<div className="grow" />
				<p className="font-istok break-words text-center text-green text-p2">
					{`Questions ${questionsNumber}`}
				</p>
				<div className="grow" />
				<Button
					disableRipple
					className="normal-case flex flex-row justify-center items-center text-green disabled:text-grey"
					disabled={questionsId >= 60 || answer[questionsId] === undefined}
					onClick={() => handleNextQuestion()}
				>
					{questionsId < 60 && (
						<>
							<p className="font-istok break-words text-center text-h2">Next</p>
							<NavigateNextRoundedIcon />
						</>
					)}
				</Button>
			</div>
			<div className="flex flex-col w-[80vw] max-w-[400px] gap-32">
				<div className="flex min-h-[20vh] py-32 px-16 rounded-lg bg-green drop-shadow-lg justify-center items-center">
					<p className="font-istok break-words text-center text-white text-p1">
						{question.content}
					</p>
				</div>
				<div className="flex flex-col gap-12 pb-16">
					{question.choices.map((choice, index) => (
						<button
							key={index}
							onClick={() => handleNextQuestion(index)}
							className={`p-12 rounded-md border-2 border-green ${
								answer[question.id] === index
									? 'bg-light_green drop-shadow-md'
									: 'bg-white'
							}`}
						>
							<p className="font-istok break-words text-center text-green text-p2">
								{choice}
							</p>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
