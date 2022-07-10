import {useMemo} from "react";

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => { //первым параметром передаём коллбэк
        if(sort) {
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts;
      }, [sort, posts])

      return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const sortedAndSearchedPosts = useMemo(() => { //первым параметром передаём коллбэк, вторым массив зависимости
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts]) //поисковая строка и отсортированный массив

    return sortedAndSearchedPosts;
}

export default usePosts;