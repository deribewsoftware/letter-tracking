"use client";
import { motion } from 'framer-motion';
import { Line } from 'react-chartjs-2';
import CountUp from 'react-countup';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,   // Import PointElement
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { FaUserAlt, FaFileAlt, FaDollarSign } from 'react-icons/fa';
import DashboardLayout from '@/app/dashboard/layout';

// Registering required Chart.js components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,  // Register PointElement
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Document Flow',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: '#3490dc',
      backgroundColor: 'rgba(52, 144, 220, 0.2)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem: any) => `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
      },
    },
  },
};

export default function AdminDashboardComponent() {
  return (
   <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-surfaceDark p-6 rounded-lg shadow-lg flex items-center"
        >
          <FaUserAlt size={36} className="text-primary dark:text-accent mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Users</h3>
            <p className="text-3xl font-bold text-primary dark:text-accent">
              <CountUp end={1250} duration={2.5} />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white dark:bg-surfaceDark p-6 rounded-lg shadow-lg flex items-center"
        >
          <FaFileAlt size={36} className="text-primary dark:text-accent mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Documents</h3>
            <p className="text-3xl font-bold text-primary dark:text-accent">
              <CountUp end={3200} duration={2.5} />
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white dark:bg-surfaceDark p-6 rounded-lg shadow-lg flex items-center"
        >
          <FaDollarSign size={36} className="text-primary dark:text-accent mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">Revenue</h3>
            <p className="text-3xl font-bold text-primary dark:text-accent">
              <CountUp end={56000} duration={2.5} prefix="$" />
            </p>
          </div>
        </motion.div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-primary dark:text-accent">Document Flow</h2>
        <div className="bg-white dark:bg-surfaceDark p-6 rounded-lg shadow-lg mt-4">
          <Line data={data} options={options} />
        </div>
      </div>
      </>
  );
}
