export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        bgColor: string;
        expense: boolean;
        categoryId: number;
    }
}