import { NavLink } from 'react-router-dom';
import { WalletMultiButton } from './wallet';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import UserIcon from '../Icons/UserIcon';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`${isOpen ? 'bg-white' : ''} flex h-[80px] w-full max-w-[100vw] justify-center bg-[#121318] text-white`}
      >
        {/* Desktop Nav */}
        <div className="mx-auto w-full px-6 sm:px-16">
          <div className="flex h-full justify-between">
            <div className="flex h-full w-full justify-between space-x-7">
              <div className="flex h-full items-center justify-center">
                <NavLink to="/">
                  <img src="/Nav/NavLogoCombo.png" alt="Daily Draft Logo" className="hidden h-[44px] lg:block" />
                  <img src="/Nav/NavLogoSmall.png" alt="Daily Draft Logo" className="block h-[32px] lg:hidden" />
                </NavLink>
              </div>
              <div className="hidden h-full w-2/5 items-center space-x-10 lg:flex [&>*]:flex [&>*]:h-full [&>*]:w-1/3 [&>*]:items-center [&>*]:justify-center [&>*]:border-t-4 [&>*]:font-semibold">
                <NavLink
                  to={'/'}
                  className={({ isActive }) => {
                    return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
                  }}
                >
                  LOBBY
                </NavLink>
                <NavLink
                  to={'/drafts'}
                  className={({ isActive }) => {
                    return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
                  }}
                >
                  MY DRAFTS
                </NavLink>
                <NavLink
                  to={'/leaderboard'}
                  className={({ isActive }) => {
                    return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
                  }}
                >
                  LEADERBOARDS
                </NavLink>
              </div>
              <div className="hidden items-center space-x-1 lg:flex lg:justify-center lg:gap-6">
                <WalletMultiButton />
                <motion.a
                  href="/user"
                  className="aspect-square w-fit rounded-[5px] bg-[#52BE70] p-2.5"
                  whileHover={{
                    scale: 1.1,
                    background: '#34A152',
                  }}
                >
                  <UserIcon />
                </motion.a>
              </div>
            </div>
            <div className="flex items-center lg:hidden">
              <button className="mobile-menu-button z-[60] outline-none" onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="size-10 text-white transition-all"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex min-h-[100dvh] max-w-[100vw] origin-top flex-col items-start justify-between overflow-scroll bg-[#121318] pb-[120px] pt-4 text-white lg:hidden"
              initial={{ y: '-100vh' }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                y: '-100vh',
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <NavLink to="/" className="flex h-1/4 w-full items-end justify-center">
                <img src="/Nav/NavLogoCombo.png" alt="Daily Draft Logo" className="h-[44px]" />
              </NavLink>

              <div className="flex h-3/4 w-full flex-col items-center justify-center gap-4">
                <NavLink
                  to={'/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => {
                    return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
                  }}
                >
                  LOBBY
                </NavLink>
                <NavLink
                  to={'/drafts'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => {
                    return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
                  }}
                >
                  MY DRAFTS
                </NavLink>
                <NavLink
                  to={'/leaderboard'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => {
                    return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
                  }}
                >
                  LEADERBOARDS
                </NavLink>

                <NavLink
                  to={'/user'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => {
                    return isActive ? 'border-[#52BE70]' : 'border-[#121318] text-[#525252]';
                  }}
                >
                  PROFILE
                </NavLink>
                <WalletMultiButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="flex h-[50px] w-full max-w-[100vw] items-center justify-center bg-[#52BE70]">
        <Carousel className="w-3/4 md:w-1/2">
          <CarouselContent className="[&>*]:text-center [&>*]:text-[14px] [&>*]:font-semibold [&>*]:text-white">
            <CarouselItem
              className="hover:cursor-pointer"
              onClick={() => window.open('https://x.com/intent/follow?screen_name=dailydraftcom', '_blank')}
            >
              FOLLOW US ON TWITTER FOR $50
            </CarouselItem>
            <CarouselItem
              className="hover:cursor-pointer"
              onClick={() => window.open('https://x.com/intent/follow?screen_name=dailydraftcom', '_blank')}
            >
              FOLLOW US ON TWITTER FOR $100
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
