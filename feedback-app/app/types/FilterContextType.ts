import ProductRequest from "./Feedback.interface";

export type FilterContextType = {
    filterId: string;
    setFilterId: React.Dispatch<React.SetStateAction<string>>;
    feedbackList: ProductRequest[];
};