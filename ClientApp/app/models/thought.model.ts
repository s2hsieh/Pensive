export interface IThought {
	id?: number;
	userName?: string;
	dateAdded?: Date;
	dateModified?: Date;
	title: string;
	content: string;
	color: string;
}