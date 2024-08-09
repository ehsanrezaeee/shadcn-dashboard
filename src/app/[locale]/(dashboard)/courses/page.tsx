"use client"

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';
import { Text } from '@/components/general/text';

// icon
import { Home2, CloudPlus, Add } from "iconsax-react"

// Dynamically import the ReactApexChart component to avoid SSR issues
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const SplineAreaChart: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      toolbar: {
        show: false,
        tools: {
          selection: false
        }
      },
      selection: {
        enabled: false
      },
      type: 'area',
      height: 300,
      width: '100%',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '2024-01-01T00:00:00.000Z',
        '2024-02-01T00:00:00.000Z',
        '2024-03-01T00:00:00.000Z',
        '2024-04-01T00:00:00.000Z',
        '2024-05-01T00:00:00.000Z',
        '2024-06-01T00:00:00.000Z',
        '2024-07-01T00:00:00.000Z',
        '2024-08-01T00:00:00.000Z',
        '2024-09-01T00:00:00.000Z',
        '2024-10-01T00:00:00.000Z',
        '2024-11-01T00:00:00.000Z',
        '2024-12-01T00:00:00.000Z',
      ],
      labels: {
        formatter: function (value) {
          const date = new Date(value);
          return date.toLocaleDateString('en-US', { month: 'short' });
        }
      },
      title: {
        text: 'Month',
        offsetY: 5
      }
    },
    yaxis: {
      title: {
        text: 'Best Selling Courses',
      },
      labels: {
        formatter: function (value) {
          return value.toFixed(0); // To avoid decimal values in y-axis
        }
      }
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    colors: ['#1E90FF', '#00BFFF'], // Customize area colors
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
    },
  });

  const [chartSeries, setChartSeries] = useState([
    {
      name: 'Figma Masterclass',
      data: [400, 450, 480, 520, 600, 700, 800, 750, 900, 950, 970, 1000],
    },
    {
      name: 'Advanced Prototyping',
      data: [300, 320, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800],
    },
    {
      name: 'Framer Academy',
      data: [200, 220, 230, 250, 300, 350, 400, 450, 500, 550, 600, 650],
    }
  ]);

  return (
    <div className='flex flex-col items-center justify-center !p-6 w-[644px] h-[370px] rounded-[12px] border border-solid border-[#EAECF0]'>
      <Text variant='Bold' size='Text md' className='text-[#101828] w-full items-start justify-start'>Sales Report</Text>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height={300}
        width={574}
      />
    </div>
  );
};

const DonutChart: React.FC = () => {
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      type: 'donut',
    },
    labels: ['Figma Masterclass', 'Advanced Prototyping', 'Framer Academy', 'Freelancing 101', 'AI for Design'],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 370,
    },
    colors: ['#1E90FF', '#00BFFF', '#FF6347', '#FFA500', '#FFD700'], // Customize donut colors
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: '40%',
          background: 'transparent',
          labels: {
            show: false,
          },
        },
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 400,
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
  });

  const [chartSeries, setChartSeries] = useState<number[]>([44, 55, 41, 17, 23]);

  return (
    <div className='flex flex-col items-start justify-center !p-6 w-[428px] h-[370px] rounded-[12px] border border-solid border-[#EAECF0] gap-y-6'>
      <Text variant='Bold' size='Text md' className='text-[#101828] w-full items-start justify-start'>Sales breakdown</Text>
      <ReactApexChart
        options={chartOptions}
        series={chartSeries}
        type="donut"
        width={400}
      />
      <div className='w-full flex items-center justify-end'>
        <button className='px-[14px] py-[10px] rounded-[8px] border border-solid border-[#D0D5DD]'>
          <Text variant='Semibold' size='Text sm' className='text-[#344054]'>View full report</Text>
        </button>
      </div>
    </div>
  );
};

import { Breadcrumb } from 'antd';
import Table from '@/components/general/table';
import { ChevronRightFilled } from '@fluentui/react-icons';
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';

const packages = [
  {
    name: "Lucian Obrien",
    package_id: "1286593",
    status: "In progress (12)",
  },
  {
    name: "Lucian Obrien",
    package_id: "1286593",
    status: "In progress (12)",
  },
  {
    name: "Lucian Obrien",
    package_id: "1286593",
    status: "In progress (12)",
  },
]

const columns = [
  {
    label: (
      <Text variant="Medium" size='Text sm' color="text-Action-Light-Active">
        Name
      </Text>
    ),
    key: "name",
    render: (name: string) => (
      <Text variant="Medium" size='Text sm' className="text-Text-Light-Primary">
        {name}
      </Text>
    ),
    skeleton: <Skeleton className="w-28 h-4 rounded-full" />,
  },
  {
    label: (
      <Text variant="Medium" size='Text sm' color="text-Action-Light-Active">
        Price
      </Text>
    ),
    key: "package_id",
    render: (package_id: string) => (
      <Text variant="Regular" size='Text sm' className="text-Text-Light-Primary">
        ${package_id}
      </Text>
    ),
    skeleton: <Skeleton className="w-36 h-4 rounded-full" />,
  },
  {
    label: (
      <Text variant="Medium" size='Text sm' color="text-Action-Light-Active">
        Status
      </Text>
    ),
    key: "status",
    render: (status: string) => { status },
    skeleton: <Skeleton className="w-16 h-6 rounded-full" />,
  },
  {
    label: "",
    key: "action",
    render: (onUserClick: any) => (
      <div className="px-[15px] flex items-center justify-between bg-GREY-200 h-[30px] rounded-[10px]">
        <Text variant="Medium" size='Text sm' className="text-Text-Light-Primary">Detail</Text>
        <ChevronRightFilled onClick={onUserClick} fontSize={16} className="text-Text-Light-Primary" />
      </div>
    ),
    skeleton: <Skeleton className="w-5 h-5 rounded-full" />,
  },
]

const CoursePage = () => {
  return (
    <div className='col-span-12 h-full flex flex-col items-start gap-y-8'>
      <div className='w-full flex'>
        <Breadcrumb
          items={[
            {
              href: '',
              title: <Home2
                color="#667085"
                size="20"
              />,
            },
            {
              href: '',
              title: (
                <div className='h-[28px] px-2 rounded-[6px] flex items-center justify-center bg-[#F9FAFB]'>
                  <Text variant='Semibold' size='Text sm' className='text-[#344054]'>Courses</Text>
                </div>
              ),
            }
          ]}
        />
      </div>
      <div className='w-full flex items-center justify-between'>
        <div className='flex flex-col gap-y-1'>
          <Text variant='Semibold' size='Display sm' className='text-[#101828]'>Courses</Text>
          <Text variant='Regular' size='Text md' className='text-[#475467]'>Add, manage or remove your courses.</Text>
        </div>
        <div className='flex items-center gap-x-3'>
          <div className='h-10 px-[14px] rounded-[8px] flex items-center justify-center gap-x-[6px] border border-solid border-[#D0D5DD]'>
            <CloudPlus
              variant='Outline' color='#344054' size={20}
            />
            <Text variant='Semibold' size='Text sm' className='text-[#344054] mt-1'>Export</Text>
          </div>
          <div className='h-10 px-[14px] rounded-[8px] flex items-center justify-center gap-x-[6px] border border-solid border-transparent bg-[#2060B8]'>
            <Add
              variant='Outline' color='#FFFFFF' size={20}
            />
            <Text variant='Semibold' size='Text sm' className='text-[#FFFFFF] mt-1'>Add New Course</Text>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-between gap-x-4'>
        <SplineAreaChart />
        <DonutChart />
      </div>

      <div
        className={`w-full h-[280px] rounded-[10px] flex border border-solid border-GREY-Glass-20 ${!packages.length ? "gap-y-3 flex-col items-center justify-center" : ""}`}
      >
        <Table columns={columns} data={packages} onUserClick={() => { }} />
      </div>
    </div>
  );
};

export default CoursePage;
