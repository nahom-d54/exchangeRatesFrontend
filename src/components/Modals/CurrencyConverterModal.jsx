import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../features/modal/modalslice";

const CurrencyConverter = () => {
  const isModalOpen = useSelector(
    (state) => state.modal.modals["currencyConverter"]
  );
  const dispatch = useDispatch();

  const handleConvertCurrency = () => {
    // Implement conversion logic here
  };

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => dispatch(toggleModal("currencyConverter"))}
        title="Currency Converter"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Amount
            </label>
            <input
              type="number"
              id="convertAmount"
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                From
              </label>
              <select
                id="convertFrom"
                className="w-full px-4 py-2 border rounded-lg"
              >
                {/* Populate options dynamically */}
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                To
              </label>
              <select
                id="convertTo"
                className="w-full px-4 py-2 border rounded-lg"
              >
                {/* Populate options dynamically */}
              </select>
            </div>
          </div>
          <div
            id="convertResult"
            className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg text-center text-lg font-bold"
          >
            Result will appear here
          </div>
          <button
            onClick={handleConvertCurrency}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Convert
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default CurrencyConverter;
