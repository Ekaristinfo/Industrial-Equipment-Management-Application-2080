import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiDownload, FiCalendar, FiBarChart3, FiPieChart, FiTrendingUp } = FiIcons;

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');

  // Equipment Status Chart
  const equipmentStatusOption = {
    title: {
      text: 'État des Équipements',
      left: 'center',
      textStyle: { fontSize: 16, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    series: [
      {
        name: 'État',
        type: 'pie',
        radius: '60%',
        data: [
          { value: 142, name: 'En fonctionnement', itemStyle: { color: '#10b981' } },
          { value: 8, name: 'En maintenance', itemStyle: { color: '#f59e0b' } },
          { value: 4, name: 'Hors service', itemStyle: { color: '#ef4444' } },
          { value: 2, name: 'En attente', itemStyle: { color: '#6b7280' } }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };

  // Maintenance Trends Chart
  const maintenanceTrendsOption = {
    title: {
      text: 'Tendances de Maintenance',
      left: 'center',
      textStyle: { fontSize: 16, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Préventive', 'Corrective', 'Inspection'],
      bottom: 0
    },
    xAxis: {
      type: 'category',
      data: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: 'Préventive',
        type: 'line',
        data: [12, 15, 18, 14, 16, 20],
        itemStyle: { color: '#3b82f6' }
      },
      {
        name: 'Corrective',
        type: 'line',
        data: [8, 6, 10, 12, 9, 7],
        itemStyle: { color: '#ef4444' }
      },
      {
        name: 'Inspection',
        type: 'line',
        data: [5, 7, 6, 8, 9, 11],
        itemStyle: { color: '#10b981' }
      }
    ]
  };

  // Equipment Efficiency Chart
  const efficiencyOption = {
    title: {
      text: 'Efficacité des Équipements',
      left: 'center',
      textStyle: { fontSize: 16, fontWeight: 'bold' }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    xAxis: {
      type: 'category',
      data: ['Presse #12', 'Robot R-15', 'Convoyeur B-03', 'Compresseur C-08', 'Tour T-05'],
      axisLabel: {
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value}%'
      }
    },
    series: [
      {
        data: [95, 88, 92, 78, 85],
        type: 'bar',
        itemStyle: {
          color: function(params) {
            const colors = ['#10b981', '#3b82f6', '#10b981', '#f59e0b', '#6b7280'];
            return colors[params.dataIndex];
          }
        }
      }
    ]
  };

  const kpiData = [
    {
      title: 'Temps de Fonctionnement Moyen',
      value: '94.5%',
      change: '+2.3%',
      trend: 'up',
      icon: FiTrendingUp,
      color: 'green'
    },
    {
      title: 'MTBF (Temps Moyen Entre Pannes)',
      value: '245h',
      change: '+15h',
      trend: 'up',
      icon: FiBarChart3,
      color: 'blue'
    },
    {
      title: 'MTTR (Temps Moyen de Réparation)',
      value: '3.2h',
      change: '-0.5h',
      trend: 'down',
      icon: FiPieChart,
      color: 'orange'
    },
    {
      title: 'Coût de Maintenance',
      value: '€15,240',
      change: '-8%',
      trend: 'down',
      icon: FiCalendar,
      color: 'red'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Rapports et Analyses</h1>
        <div className="flex items-center space-x-4">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="week">Cette semaine</option>
            <option value="month">Ce mois</option>
            <option value="quarter">Ce trimestre</option>
            <option value="year">Cette année</option>
          </select>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <SafeIcon icon={FiDownload} />
            <span>Exporter</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${kpi.color}-100`}>
                <SafeIcon icon={kpi.icon} className={`text-${kpi.color}-600 text-xl`} />
              </div>
              <span className={`text-sm font-medium ${
                kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {kpi.change}
              </span>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{kpi.title}</h3>
            <p className="text-2xl font-bold text-gray-900">{kpi.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <ReactECharts option={equipmentStatusOption} style={{ height: '300px' }} />
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ReactECharts option={maintenanceTrendsOption} style={{ height: '300px' }} />
        </motion.div>
      </div>

      {/* Equipment Efficiency Chart */}
      <motion.div
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <ReactECharts option={efficiencyOption} style={{ height: '400px' }} />
      </motion.div>

      {/* Detailed Reports Table */}
      <motion.div
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Rapport Détaillé des Équipements</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Équipement</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Type</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Temps de Fonctionnement</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Pannes</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Maintenance</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Efficacité</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Presse Hydraulique #12', type: 'Presse', uptime: '95%', failures: 2, maintenance: 3, efficiency: '95%' },
                { name: 'Robot Soudage R-15', type: 'Robot', uptime: '88%', failures: 1, maintenance: 2, efficiency: '88%' },
                { name: 'Convoyeur B-03', type: 'Convoyeur', uptime: '92%', failures: 3, maintenance: 4, efficiency: '92%' },
                { name: 'Compresseur C-08', type: 'Compresseur', uptime: '78%', failures: 5, maintenance: 6, efficiency: '78%' }
              ].map((item, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">{item.name}</td>
                  <td className="py-3 px-4 text-gray-600">{item.type}</td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${
                      parseInt(item.uptime) >= 90 ? 'text-green-600' : 
                      parseInt(item.uptime) >= 80 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {item.uptime}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-600">{item.failures}</td>
                  <td className="py-3 px-4 text-gray-600">{item.maintenance}</td>
                  <td className="py-3 px-4">
                    <span className={`font-medium ${
                      parseInt(item.efficiency) >= 90 ? 'text-green-600' : 
                      parseInt(item.efficiency) >= 80 ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {item.efficiency}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;