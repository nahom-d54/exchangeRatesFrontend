const Pagination = () => (
  <div className="mt-4 flex justify-between items-center" id="pagination">
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Previous
    </button>
    <div>
      <span className="text-gray-700 dark:text-gray-300 text-sm">
        Page 1 of 10
      </span>
    </div>
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="button"
    >
      Next
    </button>
  </div>
);

export default Pagination;
