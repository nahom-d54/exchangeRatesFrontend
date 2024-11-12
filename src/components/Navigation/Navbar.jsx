import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faCalculator,
  faFilter,
  faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../features/modal/modalslice";

const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  const dispatch = useDispatch();

  return (
    <>
      <nav className="fixed w-full z-50 gradient-bg">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FontAwesomeIcon
                icon={faMoneyBillTransfer}
                className="text-white text-3xl animate-float"
              />

              <h1 className="text-2xl font-bold text-white">Exchango</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => dispatch(toggleModal("currencyConverter"))}
                className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
              >
                <FontAwesomeIcon icon={faCalculator} className="mr-2" />
                Calculator
              </button>
              <button
                onClick={() => dispatch(toggleModal("filters"))}
                className="text-white hover:bg-white/10 px-4 py-2 rounded-lg transition-all"
              >
                <FontAwesomeIcon icon={faFilter} className="mr-2" />
                Filters
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-white/10 transition-all"
              >
                <FontAwesomeIcon
                  icon={isDarkMode ? faSun : faMoon}
                  className={isDarkMode ? "text-yellow-300" : "text-white"}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
