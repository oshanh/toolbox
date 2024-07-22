import React from 'react';
import './css/App.css'
import Logo from './Tools/ImgToPdfConverter/imgtopdf.png';
import bmiLogo from './Tools/BMICalculator/img/Icon.png';
import ToolKitLogo from './ToolBoxlogo.png';
import Home from './home.png';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Toolbox from './components/ToolBox';
import Tool from './components/Tool';

import ToolPage3 from './components/ToolPage3';
import ImageToPdf from './Tools/ImgToPdfConverter/imgtopdf';
import BMI from './Tools/BMICalculator/BMI';
import FacebookVideoDownloader from './Tools/FacebookVideoDownloader/FacebookVideoDownloader';
import TicTacToe from './Tools/Tic-tac-toe/Board';

import { Helmet } from 'react-helmet';

const App = () => {
  const tools = [
    { name: 'Image To PDF Converter', icon: Logo, path: '/imgtopdf' },
    { name: 'BMI Calculator', icon: bmiLogo, path: '/bmi' },
    { name: 'FB Video Downloader', icon: 'https://via.placeholder.com/50', path: '/fbvideodownloader' },
    { name: 'Tic-Tac-toe', icon: 'https://via.placeholder.com/50', path: '/tic-tac-toe' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 1', icon: 'https://via.placeholder.com/50', path: '/tool1' },
    { name: 'Tool 2', icon: 'https://via.placeholder.com/50', path: '/tool2' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },
    { name: 'Tool 3', icon: 'https://via.placeholder.com/50', path: '/tool3' },

    // Add more tools as needed
  ];
  return (
  <Router>
  <div className="flex flex-col min-h-screen">
    <Helmet>
      <title>Web Tool Kit</title>
      <link rel="icon" type="image/png" href='favicon.ico' />
    </Helmet>
    <div className="App flex-grow">
      <Link to='/'>
        <img src={Home} style={{ width: '50px', height: '50px' }} alt='img' />
      </Link>
      <Routes>
        <Route path="/" element={
          <Toolbox>
            {tools.map((tool, index) => (
              <Tool key={index} name={tool.name} icon={tool.icon} path={tool.path} />
              
            ))}
          </Toolbox>
        } />
        <Route path="/imgtopdf" element={<ImageToPdf />} />
        <Route path="/bmi" element={<BMI />} />
        <Route path="/fbvideodownloader" element={<FacebookVideoDownloader />} />
        <Route path="/tic-tac-toe" element={<TicTacToe/>} />
        {/* Add more routes as needed */}
      </Routes>
    </div>
    <footer className="bg-red-950 text-white p-4 mt-auto">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={ToolKitLogo} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tool Kit</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Oshan™</a>. All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</Router>
);
};

export default App;
