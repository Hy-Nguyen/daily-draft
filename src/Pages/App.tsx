import NavBar from '../components/NavBar';

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import SolanaWalletProvider from '../components/wallet/Providers';

import Drafts from './Drafts';
import Leaderboards from './Leaderboards';
import User from './User';
import Hero from '../components/Landing/Hero';
import LobbyTable from '../components/Landing/LobbyTable';
import EditDraftPage from '../components/MyDrafts/EditDrafts/EditDraftPage';

import { Buffer } from 'buffer';
window.Buffer = Buffer;

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <HomePage />
        </Layout>
      ),
    },
    {
      path: 'drafts',
      element: (
        <Layout>
          <Drafts />
        </Layout>
      ),
    },
    {
      path: 'drafts/:id',
      element: (
        <Layout>
          <EditDraftPage />
        </Layout>
      ),
    },
    {
      path: '/leaderboard',

      element: (
        <Layout>
          <Leaderboards />
        </Layout>
      ),
    },
    {
      path: '/user',
      element: (
        <Layout>
          <User />
        </Layout>
      ),
    },
  ]);
  return (
    <SolanaWalletProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </SolanaWalletProvider>
  );
};

export default App;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

function HomePage() {
  return (
    <>
      <main className="bg-lobby flex min-h-screen w-screen justify-center text-white">
        <div id="container" className="mt-[5vh] h-full w-10/12 max-w-[2000px]">
          <Hero />
          <hr className="my-10 opacity-10" />
          <LobbyTable />
        </div>
      </main>
    </>
  );
}
