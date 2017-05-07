export interface IThought {
	id?: number;
	userName?: string;
	dateAdded?: Date;
	dateModified?: Date;
	content: string;
	color: string;
	links?: IThought[];
}