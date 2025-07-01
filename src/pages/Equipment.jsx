import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import EquipmentCard from '../components/EquipmentCard';
import EquipmentModal from '../components/EquipmentModal';

const { FiPlus, FiFilter, FiGrid, FiList, FiSearch } = FiIcons;

const Equipment = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const equipments = [
    {
      id: 1,
      name: 'Presse Hydraulique #12',
      type: 'Presse',
      location: 'Atelier A',
      status: 'operational',
      lastMaintenance: '2024-01-10',
      nextMaintenance: '2024-02-10',
      efficiency: 95,
      temperature: 45,
      pressure: 150
    },
    {
      id: 2,
      name: 'Convoyeur B-03',
      type: 'Convoyeur',
      location: 'Ligne B',
      status: 'maintenance',
      lastMaintenance: '2024-01-05',
      nextMaintenance: '2024-01-15',
      efficiency: 0,
      speed: 0,
      load: 0
    },
    {
      id: 3,
      name: 'Robot Soudage R-15',
      type: 'Robot',
      location: 'Station 3',
      status: 'operational',
      lastMaintenance: '2024-01-08',
      nextMaintenance: '2024-03-08',
      efficiency: 88,
      cycles: 1250,
      precision: 99.8
    },
    {
      id: 4,
      name: 'Compresseur C-08',
      type: 'Compresseur',
      location: 'Salle des machines',
      status: 'warning',
      lastMaintenance: '2023-12-15',
      nextMaintenance: '2024-01-20',
      efficiency: 78,
      pressure: 8.5,
      temperature: 65
    }
  ];

  const filteredEquipments = equipments.filter(equipment => {
    const matchesSearch = equipment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         equipment.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || equipment.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Gestion des Équipements</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <SafeIcon icon={FiPlus} />
          <span>Ajouter Équipement</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4 flex-1">
            <div className="relative flex-1 max-w-md">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher un équipement..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full"
              />
            </div>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">Tous les statuts</option>
              <option value="operational">En fonctionnement</option>
              <option value="maintenance">En maintenance</option>
              <option value="warning">Attention</option>
              <option value="offline">Hors service</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <SafeIcon icon={FiGrid} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <SafeIcon icon={FiList} />
            </button>
          </div>
        </div>
      </div>

      {/* Equipment Grid/List */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
        {filteredEquipments.map((equipment, index) => (
          <motion.div
            key={equipment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <EquipmentCard equipment={equipment} viewMode={viewMode} />
          </motion.div>
        ))}
      </div>

      {filteredEquipments.length === 0 && (
        <div className="text-center py-12">
          <SafeIcon icon={FiSearch} className="text-gray-400 text-4xl mx-auto mb-4" />
          <p className="text-gray-500">Aucun équipement trouvé</p>
        </div>
      )}

      {showModal && (
        <EquipmentModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Equipment;