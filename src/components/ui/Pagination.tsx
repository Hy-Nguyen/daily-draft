import { motion } from 'framer-motion';
import LeftArrow from '../../Icons/LeftArrow';
import RightArrow from '../../Icons/RightArrow';
import DoubleLeftArrow from '../../Icons/DoubleLeftArrow';
import DoubleRightArrow from '../../Icons/DoubleRightArrow';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  const getPageNumbers = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, 3];
    }

    if (currentPage >= totalPages - 1) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [currentPage - 1, currentPage, currentPage + 1];
  };

  const pageNumbers = getPageNumbers();

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="absolute bottom-4 flex w-full items-center justify-center space-x-3">
      <motion.button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="border-draft flex aspect-square w-[40px] items-center justify-center bg-[#121318]"
        whileHover={
          currentPage === 1
            ? {}
            : {
                boxShadow: '0px 0px 4px #ffffff',
              }
        }
      >
        <DoubleLeftArrow />
      </motion.button>
      <motion.button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="border-draft flex aspect-square w-[40px] items-center justify-center bg-[#121318]"
        whileHover={
          currentPage === 1
            ? {}
            : {
                boxShadow: '0px 0px 4px #ffffff',
              }
        }
      >
        <LeftArrow />
      </motion.button>

      {pageNumbers.map((pageNumber) => (
        <motion.button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`flex aspect-square w-[40px] items-center justify-center rounded-[4px] ${
            pageNumber === currentPage
              ? 'border border-[#52BE70] bg-[#52BE70]/30 text-[#52BE70]'
              : 'border-draft text-draft bg-[#1B1D28]'
          }`}
          whileHover={{
            boxShadow: '0px 0px 4px #52BE70',
          }}
        >
          {pageNumber}
        </motion.button>
      ))}
      <motion.button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="border-draft flex aspect-square w-[40px] items-center justify-center bg-[#121318]"
        whileHover={
          currentPage === totalPages
            ? {}
            : {
                boxShadow: '0px 0px 4px #ffffff',
              }
        }
      >
        <RightArrow />
      </motion.button>
      <motion.button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="border-draft flex aspect-square w-[40px] items-center justify-center bg-[#121318]"
        whileHover={
          currentPage === totalPages
            ? {}
            : {
                boxShadow: '0px 0px 4px #ffffff',
              }
        }
      >
        <DoubleRightArrow />
      </motion.button>
    </div>
  );
}
