import { Action } from '@ngrx/store';


export const DOCUMENT_INIT: string = 'DOCUMENT_INIT';
export const DOCUMENT_ADD : string = 'DOCUMENT_ADD';

export class Document {
	constructor(public id : string, public fileName : string, public hash : string) {

	}
}

export class DocumentInitAction implements Action {

	readonly type = DOCUMENT_INIT;

	constructor(public documents : Array<Document>) {

	}
}

export class DocumentAddAction implements Action {

	readonly type = DOCUMENT_ADD;

	constructor(public document : Document) {

	}
}

//////////////////////////////////////////

export interface docState {
	actionType : string;
	documents : Array<Document>;
}

export const initialState: docState = {
	actionType : DOCUMENT_ADD,
	documents : [],
};

export function documentReducer(state: docState = initialState, action) {
	switch (action.type) {

		case DOCUMENT_INIT:{
			return { actionType : DOCUMENT_INIT, documents : action.documents};
		}

		case DOCUMENT_ADD:{
			state.documents.unshift(action.document);
			console.log(state.documents);
			return { actionType : DOCUMENT_ADD, documents : state.documents};
		}

		default:
			return state;
	}
}