import Image from "next/image";
import React from "react";
import { IoBrowsersOutline, IoCalculatorOutline, IoFootball, IoHeartCircleOutline, IoLogoReact } from "react-icons/io5";
import { SidebarMenuItem } from './SidebarMenuItem';


const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Data Overview'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculatorOutline size={40} />,
    title: 'Counter',
    subTitle: 'Data Couter'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'Generacion estatica'
  },
  {
    path: '/dashboard/favorites',
    icon: <IoHeartCircleOutline size={40} />,
    title: 'Favoritos',
    subTitle: 'Mis pokemones favoritos'
  },
];


export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="mr-3" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c" width={50} height={50} alt="avatar" />

          </span>
          <span className="text-sm md:text-base font-bold">... A7 ...</span>
        </a>
      </div>

      
      <div id="nav" className="w-full px-6">

        {
          menuItems.map((item, index) => (
            <SidebarMenuItem key={index} path={item.path} icon={item.icon} title={item.title} subTitle={item.subTitle} />
          ))
        }

      </div>
    </div>
  );
};
