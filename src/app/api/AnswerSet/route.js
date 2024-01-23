import AnswerSet from '../../(model)/AnswerSet';
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		const body = await req.json();
		await AnswerSet.create(body.answer_set);

		return NextResponse.json({ message: 'AnswerSet Created' }, { status: 201 });
	} catch (error) {
		return NextResponse.json({ message: 'Error' }, { status: 500 });
	}
}
