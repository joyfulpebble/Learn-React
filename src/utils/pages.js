export function getPageCount(totalPages, limit) {
  return Math.ceil( totalPages / limit) ;
}