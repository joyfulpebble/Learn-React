import { useEffect, useRef } from "react";

export function useObserver(ref, canLoad, isLoading, callback) {
  let observer = useRef();
  
  useEffect(() => {   
    if( isLoading ) return;
    const last = ref.current;
    
    let cb = function(entries, observer) {
      if(entries[0].isIntersecting && canLoad){
        callback()
      }
    }
    
    observer = new IntersectionObserver(cb);
    if( last ) observer.observe(last);
    return () => {
      if( last ) observer.unobserve(last);
    }
  }, [isLoading])
}