import PercentageChange from '@/components/general/percentage-change'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Activity, CreditCard, DollarSign, Users } from 'lucide-react'
import React from 'react'
import { HiDotsVertical } from 'react-icons/hi'

const DynamicCourse = () => {
  return (
    <div className="col-span-12 flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <HiDotsVertical className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className='flex w-full items-center justify-between'>
                <div className="text-2xl font-bold">$4,231</div>
                <PercentageChange value={23} />
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <HiDotsVertical className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className='flex w-full items-center justify-between'>
                <div className="text-2xl font-bold">+2350</div>
                <PercentageChange value={8} />
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <HiDotsVertical className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className='flex w-full items-center justify-between'>
                <div className="text-2xl font-bold">+12,234</div>
                <PercentageChange value={8} />
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <HiDotsVertical className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className='flex w-full items-center justify-between'>
                <div className="text-2xl font-bold">+573</div>
                <PercentageChange value={-2} />
              </div>
            </CardContent>
          </Card>
        </div>
        
      </main>
    </div>
  )
}

export default DynamicCourse
