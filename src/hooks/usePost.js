import {useMemo} from "react";

export function useSortedPosts(posts, sort) {
  const sortedPosts = useMemo(() => {
    console.log('ok')
    if (sort){
      return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts
}

export function usePost(posts, sort, query){
  const sortedPosts = useSortedPosts(posts, sort)

  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
  }, [query, sortedPosts])

  return searchedAndSortedPosts;
}