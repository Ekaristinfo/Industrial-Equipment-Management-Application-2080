import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiPlus, FiCalendar, FiClock, FiUser, FiTool, FiFilter } = FiIcons;

const Maintenance = () => {
  const [activeTab, setActiveTab] = useState('scheduled');

  const maintenanceTasks = {
    scheduled: [
      {
        id: 1,
        equipment: 'Presse Hydraulique #05',
        type: 'Maintenance Préventive',
        priority: 'high',
        scheduledDate: '2024-01-15',
        scheduledTime: '09:00',
        technician: 'Jean Dupont',
        estimatedDuration: '2h',
        description: 'Vérification des joints et changement d\'huile'
      },
      {
        id: 2,
        equipment: 'Robot Assemblage R-03',
        type: 'Réparation',
        priority: 'high',
        scheduledDate: '2024-01-16',
        scheduledTime: '08:00',
        technician: 'Pierre Moreau',
        estimatedDuration: '4h',
        description: 'Remplacement du capteur de position'
      }
    ],
    inProgress: [
      {
        id: 3,
        equipment: 'Convoyeur B-12',
        type: 'Inspection',
        priority: 'medium',
        startedDate: '2024-01-15',
        startedTime: '14:30',
        technician: 'Marie Martin',
        estimatedDuration: '1h30',
        progress: 65,
        description: 'Inspection des roulements et courroies'
      }
    ],
    completed: [
      {
        id: 4,
        equipment: 'Compresseur C-15',
        type: 'Maintenance Préventive',
        priority: 'low',
        completedDate: '2024-01-14',
        completedTime: '16:00',
        technician: 'Sophie Blanc',
        duration: '1h45',
        description: 'Nettoyage des filtres et vérification pression',
        notes: 'Maintenance effectuée sans problème'
      }
    ]
  };

  const priorityColors = {
    high: 'bg-red-100 text-red-800 border-red-200',
    medium: 'bg-orange-100 text-orange-800 border-orange-200',
    low: 'bg-green-100 text-green-800 border-green-200'
  };

  const tabs = [
    { id: 'scheduled', label: 'Planifiées', count: maintenanceTasks.scheduled.length },
    { id: 'inProgress', label: 'En cours', count: maintenanceTasks.inProgress.length },
    { id: 'completed', label: 'Terminées', count: maintenanceTasks.completed.length }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Gestion de la Maintenance</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <SafeIcon icon={FiPlus} />
          <span>Programmer Maintenance</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        <div className="p-6">
          {/* Scheduled Maintenance */}
          {activeTab === 'scheduled' && (
            <div className="space-y-4">
              {maintenanceTasks.scheduled.map((task, index) => (
                <motion.div
                  key={task.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-800">{task.equipment}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${priorityColors[task.priority]}`}>
                          {task.priority === 'high' ? 'Haute' : task.priority === 'medium' ? 'Moyenne' : 'Basse'}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiTool} className="text-xs" />
                          <span>{task.type}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiCalendar} className="text-xs" />
                          <span>{task.scheduledDate}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiClock} className="text-xs" />
                          <span>{task.scheduledTime} ({task.estimatedDuration})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiUser} className="text-xs" />
                          <span>{task.technician}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors">
                        Démarrer
                      </button>
                      <button className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                        Modifier
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* In Progress Maintenance */}
          {activeTab === 'inProgress' && (
            <div className="space-y-4">
              {maintenanceTasks.inProgress.map((task, index) => (
                <motion.div
                  key={task.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-800">{task.equipment}</h3>
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          En cours
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-3">{task.description}</p>
                      
                      <div className="mb-3">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="text-gray-600">Progression</span>
                          <span className="font-medium">{task.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${task.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiTool} className="text-xs" />
                          <span>{task.type}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiCalendar} className="text-xs" />
                          <span>Démarré: {task.startedDate}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiClock} className="text-xs" />
                          <span>{task.startedTime} ({task.estimatedDuration})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiUser} className="text-xs" />
                          <span>{task.technician}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm hover:bg-green-200 transition-colors">
                        Terminer
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-700 rounded-lg text-sm hover:bg-red-200 transition-colors">
                        Suspendre
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Completed Maintenance */}
          {activeTab === 'completed' && (
            <div className="space-y-4">
              {maintenanceTasks.completed.map((task, index) => (
                <motion.div
                  key={task.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-800">{task.equipment}</h3>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          Terminée
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                      {task.notes && (
                        <p className="text-sm text-gray-500 mb-3 italic">Notes: {task.notes}</p>
                      )}
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiTool} className="text-xs" />
                          <span>{task.type}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiCalendar} className="text-xs" />
                          <span>Terminé: {task.completedDate}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiClock} className="text-xs" />
                          <span>{task.completedTime} (Durée: {task.duration})</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <SafeIcon icon={FiUser} className="text-xs" />
                          <span>{task.technician}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-lg text-sm hover:bg-blue-200 transition-colors">
                        Voir Rapport
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Maintenance;