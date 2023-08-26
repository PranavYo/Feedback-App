interface Comment {
    id: number;
    content: string;
    user: {
        image: string;
        name: string;
        username: string;
    };
    replies?: Comment[];
}

export default interface ProductRequest {
    id: number;
    title: string;
    category: string;
    upvotes: number;
    status: string;
    description: string;
    comments?: Comment[];
}