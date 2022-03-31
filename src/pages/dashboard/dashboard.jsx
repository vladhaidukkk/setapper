import React from 'react';
import { Header } from 'components/layout';
import Container from 'components/common/container';

function Dashboard() {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-auto bg-white dark:bg-stone-800">
        <Container>
          <h1 className="text-black dark:text-white">Dashboard</h1>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
