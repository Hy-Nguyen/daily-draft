import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@nextui-org/react';
import ModalMatchDetails from './ModalMatchDetails';
import DetailsArrow from './DetailArrow';

export default function ViewDetails() {
  // Modal Functions
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const detailsArray = [
    {
      team1: {
        name: 'Europe',
        image: '/Lobby/EURO.png',
      },
      team2: {
        name: 'Madrid',
        image: '/Lobby/MADRID.png',
      },
      date: '04/24/2024',
      time: '00:00',
    },
    {
      team1: {
        name: 'Madrid1',
        image: '/Lobby/MADRID.png',
      },
      team2: {
        name: 'Europe1',
        image: '/Lobby/EURO.png',
      },

      date: '04/24/2024',
      time: '00:00',
    },
    {
      team1: {
        name: 'Europe2',
        image: '/Lobby/EURO.png',
      },
      team2: {
        name: 'Madrid2',
        image: '/Lobby/MADRID.png',
      },
      date: '04/24/2024',
      time: '00:00',
    },
  ];
  return (
    <>
      <div className="ml-4 flex items-center justify-center" onClick={onOpen}>
        <h1 className="mr-4 font-light text-[#A7ADB9] underline-offset-4 transition-all hover:cursor-pointer hover:underline">
          Details
        </h1>
        <DetailsArrow />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="2xl"
        backdrop="blur"
        placement="center"
        classNames={{
          base: 'bg-[#121318] rounded-[8px]',
          closeButton: 'hover:bg-inherit hover:text-white text-4xl text-[#515954] transition-all',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col items-center justify-center gap-1 text-center text-3xl text-white">
                <h1 className="w-2/3 xl:w-full">Tournament Duration</h1>
              </ModalHeader>
              <ModalBody className="flex items-center text-[#A7ADB9]">
                <div
                  id="container"
                  className="flex w-full flex-col items-center justify-center overflow-hidden rounded-[5px]"
                >
                  {detailsArray.map((detail, index) => (
                    <ModalMatchDetails key={index} {...detail} />
                  ))}
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
