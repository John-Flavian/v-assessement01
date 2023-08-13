import { FiDownloadCloud, FiArrowDown, FiCheck } from "react-icons/fi";
import { contentCell1, contentCell2, headerCell1, headerCell2} from "../styles";


const BillingsTable = () => {
  return (
    <div className="overflow-x-auto">
      <div className="table w-[800px] lg:w-full border-solid border rounded-lg">
        <div className="table-row-group">
          <div className="table-row px-3">
            <div className={`${headerCell2} pl-8`}>
              <div className="flex gap-x-2 items-end">
                <input type="checkbox" className="w-5 h-5" />
                <span>Invoice</span>
                <FiArrowDown className="w-4 h-4" />
              </div>
            </div>
            <div className={headerCell1}>
              <span>Amount</span>
            </div>
            <div className={headerCell1}>
              <span>Date</span>
            </div>
            <div className={headerCell1}>
              <span>Status</span>
            </div>
            <div className={headerCell2}>
              <span>Users on Plan</span>
            </div>
            <div className={headerCell1}></div>
          </div>
        </div>

        <div className="table-row-group text-sm">
          <div className="table-row bg-white">
            <div className={`${contentCell2} font-semibold pl-8`}>
              <div className="flex gap-x-2 items-end">
                <input type="checkbox" className="w-5 h-5" />
                <span>Basic Plan - Dec 2022</span>
              </div>
            </div>
            <div className={contentCell1}>
              <span>USD $1.00</span>
            </div>
            <div className={contentCell1}>
              <span>Dec 1, 2022</span>
            </div>
            <div className={contentCell1}>
              <div className="flex gap-x-1 rounded-full py-1 px-2 bg-green-300 w-4/6 text-green-700">
                <FiCheck />
                <span className="text-xs">Paid</span>
              </div>
            </div>
            <div className={contentCell2}>
              <span>Users on Plan</span>
            </div>
            <div className={`${contentCell1} pr-1`}>
              <FiDownloadCloud className="text-2xl text-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingsTable;
