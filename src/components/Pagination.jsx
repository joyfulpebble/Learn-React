import React from 'react';

const Pagination = ({pages, page, setPage}) => {
  return (
      <div className={'pagination__wrapper'}>
        {
          pages.map(p =>
              <button
                  onClick={() => setPage(p)}
                  key={p}
                  className={page === p ? 'page page__current' : 'page'}>{p}</button>
          )}
      </div>
  );
};

export default Pagination;