export interface IThought {
	readonly id?: number;
	readonly userName?: string;
	readonly dateAdded?: Date;
	readonly dateModified?: Date;
	title: string;
	content: string;
	color: string;
}