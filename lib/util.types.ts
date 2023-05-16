export interface i_physical_size {
	Width: number;
	Height: number;
	Length: number;
};

export interface i_workingschedule {
	Monday: string;
	Tuesday: string;
	Wednesday: string;
	Thursday: string;
	Friday: string;
	Saturday: string;
	Sunday: string;
};

export interface i_generic_RefDesc_Response {
	Ref: string;
	Description: string;
};