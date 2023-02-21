import { create  } from "zustand";

export const useStore = create<{
    chatTypesDisplayed: string;
    //only allow null until I have decided on the user object structure. 
    user: string | null;
}>((set) => ({
    chatTypesDisplayed: "",
    user: null,
}));