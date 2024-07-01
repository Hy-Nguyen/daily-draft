import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import ModalMatchDetails from './ModalMatchDetails';
import DetailsArrow from './DetailArrow';

export default function ViewDetails() {
  // Modal Functions
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <div className="ml-4 flex items-center justify-center hover:cursor-pointer" onClick={onOpen}>
        <h1 className="mr-4 font-light text-[#A7ADB9]">View Details</h1>
        <DetailsArrow />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        backdrop="blur"
        classNames={{
          base: 'bg-[#121318] rounded-[8px]',
          closeButton: 'hover:bg-inherit hover:text-white text-4xl text-[#515954] transition-all',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center text-3xl text-white">
                Tournament Duration
              </ModalHeader>
              <ModalBody className="flex items-center text-[#A7ADB9]">
                <div
                  id="container"
                  className="flex w-10/12 flex-col items-center justify-center overflow-hidden rounded-[5px]"
                >
                  <ModalMatchDetails />
                  <ModalMatchDetails />
                  <ModalMatchDetails />
                </div>
              </ModalBody>
              {/* left footer to act as spacer */}
              <ModalFooter />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
