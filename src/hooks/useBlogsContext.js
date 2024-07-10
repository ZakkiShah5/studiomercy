import { BlogContext } from "../context/BlogContext";
import { useContext } from "react";

export const useBlogsContext = () => {
    const context = useContext(BlogContext)

    if(!context){
        throw Error('useWBlogContext bla bla bla...')
    }
    return context
}