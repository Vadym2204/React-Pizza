import ReactPaginate from 'react-paginate';
import './_pagination.scss'
import React, { FC } from 'react';

interface PaginationProps {
  currentPage: number;
  onChangePage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({currentPage, onChangePage}) => {
    return (
        <>         
          <ReactPaginate
            className='pagination'
            breakLabel="..."
            previousLabel="<"
            nextLabel=">"
            onPageChange={e => onChangePage(e.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage - 1}
            renderOnZeroPageCount={null}
          />
        </>
      );
}

export default Pagination