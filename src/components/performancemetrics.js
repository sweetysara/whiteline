import React, { useEffect, useRef } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './PerformanceMetrics.css';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale);

function PerformanceMetrics() {
    const chartRef = useRef(null);

    const data = {
        labels: ['SUV', 'MPV', 'Sedan', 'Ford'],
        datasets: [
            {
                label: 'Revenue',
                data: [12000, 8000, 15000, 6000],
                backgroundColor: ['#a4d65e', '#4b682a', '#79b242', '#233a18'],
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                beginAtZero: true,
            },
        },
    };

    useEffect(() => {
        return () => {
            // Clean up the chart instance on unmount
            if (chartRef.current) {
                chartRef.current.chartInstance.destroy();
            }
        };
    }, []);

    return (
        <div className="performance-metrics">
            <div className="legend">
                <h2>CAR <br /> REVENEW <br /> PERFORMANCE <br /></h2>
                <ul>
                    <li><span className="color-box" style={{ backgroundColor: '#a4d65e' }}></span> SUV</li>
                    <li><span className="color-box" style={{ backgroundColor: '#4b682a' }}></span> MPV</li>
                    <li><span className="color-box" style={{ backgroundColor: '#79b242' }}></span> Sedan</li>
                    <li><span className="color-box" style={{ backgroundColor: '#233a18' }}></span> Ford</li>
                </ul>
            </div>
            <div className="chart-container">
                <Bar ref={chartRef} data={data} options={options} />
            </div>
        </div>
    );
}

export default PerformanceMetrics;
