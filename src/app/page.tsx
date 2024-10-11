import About from '@/components/about';
import Contact from '@/components/contact';
import Header from '@/components/header'
import Projects from '@/components/projects';
import Services from '@/components/services';
import Wedo from '@/components/wedo';
import React from 'react'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
    
     <About/>
     <Services/>
     <Projects/>
     <Wedo/>
     <Contact/>
    </main>
  );
}