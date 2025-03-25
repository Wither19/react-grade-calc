export type BlockGrade = {
	block: number;
	name: string;
	honors?: boolean;
	ap?: boolean;
	grade: number | null;
};

export type InputEditable = {
	isEditable: boolean;
};

export type BlockInfo = BlockGrade & InputEditable;
