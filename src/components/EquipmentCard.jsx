import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMapPin, FiCalendar, FiTool, FiMoreVertical, FiActivity } = FiIcons;

const EquipmentCard = ({ equipment, viewMode }) => {
  const statusColors = {
    operational: 'bg-green-100 text-green-800 border-green-200',
    maintenance: 'bg-orange-100 text-orange-800 border-orange-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    offline: 'bg-red-100 text-red-800 border-red-200'
  };

  const statusLabels = {
    operational: 'En fonctionnement',
    maintenance: 'En maintenance',
    warning: 'Attention',
    offline: 'Hors service'
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <SafeIcon icon={FiTool} className="text-blue-600 text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{equipment.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{equipment.type}</span>
                <div className="flex items-center space-x-1">
                  <SafeIcon icon={FiMapPin} className="text-xs" />
                  <span>{equipment.location}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[equipment.status]}`}>
              {statusLabels[equipment.status]}
            </span>
            <div className="text-right text-sm">
              <p className="text-gray-600">Efficacité</p>
              <p className="font-semibold">{equipment.efficiency}%</p>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <SafeIcon icon={FiMoreVertical} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all"
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <SafeIcon icon={FiTool} className="text-blue-600 text-xl" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{equipment.name}</h3>
            <p className="text-sm text-gray-500">{equipment.type}</p>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <SafeIcon icon={FiMoreVertical} className="text-gray-400" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${statusColors[equipment.status]}`}>
            {statusLabels[equipment.status]}
          </span>
          <div className="flex items-center space-x-1 text-sm text-gray-500">
            <SafeIcon icon={FiMapPin} className="text-xs" />
            <span>{equipment.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-gray-600">
            <SafeIcon icon={FiActivity} className="text-xs" />
            <span>Efficacité</span>
          </div>
          <span className="font-semibold">{equipment.efficiency}%</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-gray-600">
            <SafeIcon icon={FiCalendar} className="text-xs" />
            <span>Prochaine maintenance</span>
          </div>
          <span className="text-gray-800">{equipment.nextMaintenance}</span>
        </div>

        {/* Performance Metrics */}
        <div className="pt-3 border-t border-gray-100">
          <div className="grid grid-cols-2 gap-4 text-sm">
            {equipment.temperature && (
              <div>
                <p className="text-gray-500">Température</p>
                <p className="font-medium">{equipment.temperature}°C</p>
              </div>
            )}
            {equipment.pressure && (
              <div>
                <p className="text-gray-500">Pression</p>
                <p className="font-medium">{equipment.pressure} bar</p>
              </div>
            )}
            {equipment.cycles && (
              <div>
                <p className="text-gray-500">Cycles</p>
                <p className="font-medium">{equipment.cycles}</p>
              </div>
            )}
            {equipment.speed !== undefined && (
              <div>
                <p className="text-gray-500">Vitesse</p>
                <p className="font-medium">{equipment.speed} m/min</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EquipmentCard;