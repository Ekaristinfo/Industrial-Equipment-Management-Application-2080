import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiHome, FiSettings, FiTool, FiClipboard, FiBarChart3, FiCpu } = FiIcons;

const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { path: '/', icon: FiHome, label: 'Tableau de bord' },
    { path: '/equipment', icon: FiCpu, label: 'Équipements' },
    { path: '/maintenance', icon: FiTool, label: 'Maintenance' },
    { path: '/reports', icon: FiBarChart3, label: 'Rapports' },
    { path: '/settings', icon: FiSettings, label: 'Paramètres' },
  ];

  return (
    <motion.div
      className="fixed left-0 top-0 h-full bg-white shadow-lg z-40"
      animate={{ width: isOpen ? 256 : 64 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiCpu} className="text-white text-lg" />
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-xl font-bold text-gray-800">EquipManager</h1>
            </motion.div>
          )}
        </div>
      </div>

      <nav className="mt-6">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-4 py-3 mx-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`
            }
          >
            <SafeIcon icon={item.icon} className="text-xl" />
            {isOpen && (
              <motion.span
                className="ml-3 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {item.label}
              </motion.span>
            )}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;