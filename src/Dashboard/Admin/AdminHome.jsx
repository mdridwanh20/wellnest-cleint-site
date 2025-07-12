import React from 'react';
import { NavLink } from 'react-router';
import {
  HiOutlineDocumentText,
  HiOutlineUsers,
  HiOutlineClipboardCheck,
  HiOutlineCollection,
} from 'react-icons/hi';
import useAdmin from '../../Hook/useAdmin';
import useAllUser from '../../Hook/useAllUser';
import useAddItem from '../../Hook/useAddItem';

export default function AdminHome() {
  const { userData } = useAllUser();
  const { addItem } = useAddItem();

  const navLinks = [
    {
      to: '/dashboard/add-item',
      icon: <HiOutlineDocumentText size={20} />,
      label: 'Add Item',
    },
    {
      to: '/dashboard/manage-item',
      icon: <HiOutlineCollection size={20} />,
      label: `Manage Items: (${addItem?.length || 0})`,
    },
    {
      to: '/dashboard/manage-booking',
      icon: <HiOutlineClipboardCheck size={20} />,
      label: 'Manage Booking',
    },
    {
      to: '/dashboard/all-user',
      icon: <HiOutlineUsers size={20} />,
      label: `All Users: (${userData?.length || 0})`,
    },
  ];

  return (
    <nav className="flex dashboardRoute flex-col border-0 border-r-1 border-gray-300 pt-4 w-full sm:w-64 bg-white h-full">
      {navLinks.map(({ to, icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className="relative group flex items-center gap-3 py-3 px-4 text-sm sm:text-base rounded text-gray-700 hover:bg-gray-100"
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
