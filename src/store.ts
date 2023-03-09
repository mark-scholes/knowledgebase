import category from "@/schemas/category";
import { groq } from "next-sanity";
import { create  } from "zustand";


interface ChatStore {
    category: string
    categoryQuery: ReturnType<typeof groq>
    setCategory: (category: string) => void
  }
interface CategoryStore {
    categories: string[],
    addCategory: (categories:string) => void
}
interface ChatTypeStore {
    chatType: string;
    setChatType: (newType: string) => void;
  }

  export const useChatTypeStore = create<ChatTypeStore>((set) => ({
    chatType: '',
    setChatType: (newType: string) => set({ chatType: newType }),
  }));

  //store value to keep track of the chatTypes. This will be needed to update UI when more chatType categories are added from the sanity end. 
  export const useCategoryStore = create<CategoryStore>((set) => ({
    categories: [],
    addCategory: (category: string) => {
      set((state) => ({
        categories: [category, ...state.categories],
      }))  
    },
  }));

//alows the option to have a groq built in the global state if that's the route I decide to go down.  
export const useChatStore = create<ChatStore>((set) => ({
    category: '',
    categoryQuery: groq`*[_type == "chatMessage"]`,
    setCategory: (category) => {
      set((state) => ({
        ...state,
        category,
        categoryQuery: groq`*[_type == "chatMessage" && references(*[_type == "chatType" && title == "${category}"]._id)]`,
      }))
    },
  }))