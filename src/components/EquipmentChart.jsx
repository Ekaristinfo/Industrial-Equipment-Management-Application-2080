import React from 'react';
import ReactECharts from 'echarts-for-react';

const EquipmentChart = () => {
  const option = {
    title: {
      text: 'État des Équipements',
      left: 'left',
      textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1f2937'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center'
    },
    series: [
      {
        name: 'Équipements',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 142, name: 'En Fonctionnement', itemStyle: { color: '#10b981' } },
          { value: 8, name: 'Maintenance', itemStyle: { color: '#f59e0b' } },
          { value: 4, name: 'Hors Service', itemStyle: { color: '#ef4444' } },
          { value: 2, name: 'En Attente', itemStyle: { color: '#6b7280' } }
        ]
      }
    ]
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <ReactECharts option={option} style={{ height: '300px' }} />
    </div>
  );
};

export default EquipmentChart;