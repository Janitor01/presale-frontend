'use client'

import { FC } from 'react'
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { Card, CardContent } from '@/components/ui/card'

export const Tokenomics: FC = () => {

  
  const data = {
    datasets: [
      {
        data: [25, 30, 12.7, 7.3, 25],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
    labels: ['Liquidity', 'Presale', 'Presale 2', 'Airdrops', 'NFT Farming'],
  }

  const options = {
    plugins: {
      legend: {
        position: 'bottom' as const, // Ensures TypeScript recognizes this as a specific string value
        align: 'center' as const, // Same as above
      },
    },
    animation: {
      animateRotate: true, // Enable rotation animation
      animateScale: true   // Enable scaling animation from the center
    }
  }

  return (
    <>
      <div className="flex max-w-[22rem] grow flex-col gap-4">
        <br />
        <Card>
          <h2 className="mt-4 text-center font-mono text-gray-400">Tokenomics</h2>
          <CardContent className="pb-3 pt-6" style={{ height: 337 }}>
            <Doughnut data={data} options={options} />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Tokenomics
