import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertTriangle, FiAlertCircle, FiInfo, FiClock } = FiIcons;

const AlertsPanel = () => {
  const alerts = [
    {
      id: 1,
      type: 'critical',
      icon: FiAlertTriangle,
      title: 'Presse Hydraulique #12',
      message: 'Surchauffe détectée',
      time: '5 min',
      color: 'red'
    },
    {
      id: 2,
      type: 'warning',
      icon: FiAlertCircle,
      title: 'Convoyeur A-03',
      message: 'Maintenance due',
      time: '1h',
      color: 'orange'
    },
    {
      id: 3,
      type: 'info',
      icon: FiInfo,
      title: 'Robot Soudage R-15',
      message: 'Calibrage terminé',
      time: '2h',
      color: 'blue'
    },
    {
      id: 4,
      type: 'warning',
      icon: FiClock,
      title: 'Compresseur C-08',
      message: 'Inspection programmée',
      time: '4h',
      color: 'orange'
    }
  ];

  const colorClasses = {
    red: 'bg-red-50 border-red-200 text-red-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  const iconColors = {
    red: 'text-red-500',
    orange: 'text-orange-500',
    blue: 'text-blue-500'
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Alertes Récentes</h3>
        <span className="text-sm text-gray-500">Temps réel</span>
      </div>

      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            className={`p-3 rounded-lg border ${colorClasses[alert.color]}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-start space-x-3">
              <SafeIcon 
                icon={alert.icon} 
                className={`text-lg mt-0.5 ${iconColors[alert.color]}`} 
              />
              <div className="flex-1">
                <p className="font-medium text-sm">{alert.title}</p>
                <p className="text-xs opacity-75">{alert.message}</p>
              </div>
              <span className="text-xs opacity-75">{alert.time}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
        Voir toutes les alertes →
      </button>
    </div>
  );
};

export default AlertsPanel;