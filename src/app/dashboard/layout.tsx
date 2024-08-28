import DashboardLayoutComponent from '@/components/dashboard/layout/layout'

import React, { ReactNode } from 'react'

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return ( <DashboardLayoutComponent>{children}</DashboardLayoutComponent>
  )
}

export default DashboardLayout