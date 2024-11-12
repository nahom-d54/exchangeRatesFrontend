import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../features/modal/modalslice";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const FiltersModal = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state) => state.modal.modals["filters"]);
  const onApplyFilters = () => {
    // Implement filter logic here
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => dispatch(toggleModal("filters"))}
      >
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center px-4">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={() => dispatch(toggleModal("filters"))}
          ></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-lg max-w-md w-full p-6 z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Filters
              </h2>
              <button
                onClick={() => dispatch(toggleModal("filters"))}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="space-y-4"></div>
            <button
              onClick={onApplyFilters}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FiltersModal;
