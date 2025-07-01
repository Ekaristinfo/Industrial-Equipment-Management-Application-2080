import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiUser, FiTool } = FiIcons;

const MaintenanceSchedule = () => {
  const maintenances = [
    {
      id: 1,
      equipment: 'Presse Hydraulique #05',
      type: 'Maintenance Préventive',
      date: '2024-01-15',
      time: '09:00',
      technician: 'Jean Dupont',
      priority: 'high',
      status: 'scheduled'
    },
    {
      id: 2,
      equipment: 'Convoyeur B-12',
      type: 'Inspection',
      date: '2024-01-15',
      time: '14:30',
      technician: 'Marie Martin',
      priority: 'medium',
      status: 'in-progress'
    },
    {
      id: 3,
      equipment: 'Robot Assemblage R-03',
      type: 'Réparation',
      date: '2024-01-16',
      time: '08:00',
      technician: 'Pierre Moreau',
      priority: 'high',
      status: 'scheduled'
    },
    {
      id: 4,
      equipment: 'Compresseur C-15',
      type: 'Maintenance Préventive',
      date: '2024-01-16',
      time: '15:00',
      technician: 'Sophie Blanc',
      priority: 'low',
      status: 'scheduled'
    }
  ];

  const priorityColors = {
    high: 'bg-red-100 text-red-800',
    medium: 'bg-orange-100 text-orange-800',
    low: 'bg-green-100 text-green-800'
  };

  const statusColors = {
    scheduled: 'bg-blue-100 text-blue-800',
    'in-progress': 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Planning de Maintenance</h3>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Planifier
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-medium text-gray-600">Équipement</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Date/Heure</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Technicien</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Priorité</th>
              <th className="text-left py-3 px-4 font-medium text-gray-600">Statut</th>
            </tr>
          </thead>
          <tbody>
            {maintenances.map((maintenance, index) => (
              <motion.tr
                key={maintenance.id}
                className="border-b border-gray-100 hover:bg-gray-50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiTool} className="text-gray-400" />
                    <span className="font-medium">{maintenance.equipment}</span>
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-600">{maintenance.type}</td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <SafeIcon icon={FiCalendar} className="text-sm" />
                    <span>{maintenance.date}</span>
                    <SafeIcon icon={FiClock} className="text-sm ml-2" />
                    <span>{maintenance.time}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiUser} className="text-gray-400" />
                    <span>{maintenance.technician}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[maintenance.priority]}`}>
                    {maintenance.priority === 'high' ? 'Haute' : 
                     maintenance.priority === 'medium' ? 'Moyenne' : 'Basse'}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[maintenance.status]}`}>
                    {maintenance.status === 'scheduled' ? 'Planifié' : 
                     maintenance.status === 'in-progress' ? 'En cours' : 'Terminé'}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaintenanceSchedule;