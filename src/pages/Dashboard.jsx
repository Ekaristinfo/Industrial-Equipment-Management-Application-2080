import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import StatsCard from '../components/StatsCard';
import EquipmentChart from '../components/EquipmentChart';
import MaintenanceSchedule from '../components/MaintenanceSchedule';
import AlertsPanel from '../components/AlertsPanel';

const { FiCpu, FiTool, FiAlertTriangle, FiCheckCircle, FiTrendingUp } = FiIcons;

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Équipements',
      value: '156',
      icon: FiCpu,
      color: 'blue',
      change: '+12%',
      trend: 'up'
    },
    {
      title: 'En Fonctionnement',
      value: '142',
      icon: FiCheckCircle,
      color: 'green',
      change: '+5%',
      trend: 'up'
    },
    {
      title: 'Maintenance Prévue',
      value: '8',
      icon: FiTool,
      color: 'orange',
      change: '-2%',
      trend: 'down'
    },
    {
      title: 'Alertes Actives',
      value: '6',
      icon: FiAlertTriangle,
      color: 'red',
      change: '+3%',
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de Bord</h1>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <SafeIcon icon={FiTrendingUp} />
          <span>Dernière mise à jour: il y a 2 minutes</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <StatsCard {...stat} />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Equipment Chart */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <EquipmentChart />
        </motion.div>

        {/* Alerts Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <AlertsPanel />
        </motion.div>
      </div>

      {/* Maintenance Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <MaintenanceSchedule />
      </motion.div>
    </div>
  );
};

export default Dashboard;