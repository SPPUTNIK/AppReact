import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js';

import { Doughnut } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);


function DounutChart(){
    const data = {
        labels: [],
        datasets: [{
            label: 'User1',
            data: [10, 22, 54],
            backgroundColor: ['#00A3FF', '#0CA593', '#501AE9'],
            borderColor: ['#00A3FF', '#0CA593', '#501AE9']
        }]
    }

    const options = {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins: {
            legend: {
                display: false,
            },
        },

    }
    return (
        <Doughnut data={data} options={options}/>
    );
}

export default DounutChart;