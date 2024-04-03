import ReactPaginate from "react-paginate";

export const Paginate = ({ pages, setPageNum }) => {
  const handlePageClick = (event) => {
    const newOffset = event.selected + 1;
    setPageNum(newOffset);
  };
  return (
    <ReactPaginate
      nextLabel=">"
      onPageChange={handlePageClick}
      breakLabel=".."
      pageCount={pages}
      previousLabel="<"
      pageRangeDisplayed={0}
      renderOnZeroPageCount={null}
      containerClassName="flex space-x-4 justify-center text-xl p-4 font-semibold w-fit mx-auto text-white/60"
      activeLinkClassName="text-accent"
      previousLinkClassName="hover:text-accent"
      nextLinkClassName="hover:text-accent"
      disableInitialCallback="true"
      initialPage={1}
    />
  );
};
