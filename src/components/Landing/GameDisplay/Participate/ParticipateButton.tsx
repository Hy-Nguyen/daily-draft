import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { useCallback, useState } from 'react';
import Crown from '../../../../Icons/Crown';
import ParticipateTabs from './ParticipateTabs';
import OverviewBody from './Overview';
import FixturesBody from './Fixtures';
import EntriesBody from './Entries';
import PrizesBody from './Prizes';

export default function Participate() {
  // modal functions
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [tab, setTab] = useState('Overview');

  const handleTabChange = useCallback((newTab: string) => {
    if (newTab === 'Overview') {
      return <OverviewBody />;
    } else if (newTab === 'Fixtures') {
      return <FixturesBody />;
    } else if (newTab === 'Entries') {
      return <EntriesBody />;
    } else {
      return <PrizesBody />;
    }
  }, []);
  return (
    <div id="button" className="my-2 w-full xl:col-span-1 xl:my-0">
      <motion.button
        className="relative flex h-[35px] w-full items-center rounded-[6px] bg-[#52BE70]"
        whileHover={{
          scale: 1.05,
          boxShadow: '0px 0px 18px 0px #52BE70',
        }}
        onClick={onOpen}
      >
        <p className="w-full text-center text-[16px] font-semibold text-[#141414]">participate</p>
        <div className="absolute -right-2 -top-2 rotate-[30deg]">
          <Crown />
        </div>
      </motion.button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="3xl"
        backdrop="blur"
        placement="center"
        classNames={{
          base: 'bg-[#121318] rounded-[8px]',
          closeButton: 'hover:bg-inherit hover:text-white text-4xl text-[#515954] transition-all',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <div className="flex w-full flex-col items-center px-4 xl:px-6">
              <ModalHeader className="flex w-full grid-cols-5 flex-col items-center justify-center gap-2 text-white xl:grid">
                <div className="col-span-4 grid w-full grid-cols-4">
                  <div className="flex items-center justify-start xl:justify-center">
                    <img src="/Lobby/MADRID.png" alt="madrid" className="w-1/2" />
                  </div>
                  <div className="col-span-3 flex flex-col items-start justify-center">
                    <h1 className="text-[16px] font-semibold">Tournament name</h1>
                    <h1 className="text-[14px] font-normal text-[#52BE70]">Game Week 01</h1>
                  </div>
                </div>
                <motion.button
                  className="relative col-span-1 my-2 flex h-fit w-full items-center rounded-[6px] bg-[#52BE70] px-3 py-1 xl:w-fit"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0px 0px 18px 0px #52BE70',
                  }}
                >
                  <p className="w-full text-center text-[16px] font-semibold text-[#141414]">participate</p>
                  <div className="absolute -right-2 -top-2 rotate-[30deg]">
                    <Crown />
                  </div>
                </motion.button>
              </ModalHeader>
              <ModalBody className="grid w-full grid-cols-4">
                <ParticipateTabs text="Overview" activeTab={tab} setTab={setTab} />
                <ParticipateTabs text="Fixtures" activeTab={tab} setTab={setTab} />
                <ParticipateTabs text="Entries" activeTab={tab} setTab={setTab} />
                <ParticipateTabs text="Prizes" activeTab={tab} setTab={setTab} />
              </ModalBody>

              <hr className="my-4 h-[1px] w-full border-white/10 xl:my-10" />
              <ModalBody className="flex w-full items-center text-[#A7ADB9]">{handleTabChange(tab)}</ModalBody>
              {/* footer to act as spacer */}
              <ModalFooter />
            </div>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
