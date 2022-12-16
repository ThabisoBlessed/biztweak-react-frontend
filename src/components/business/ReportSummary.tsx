import React from 'react'
import { ProfileMenu } from '../auth/ProfileMenu'
import { ReportSummaryModal } from './ReportSummaryModal'

export const ReportSummary = () => {
  return (
    <div>
         <div className="row w-full m-0 p-0">
        <div className="col-md-3 border-end">
          <ProfileMenu />
        </div>
        <div className="col-md-9 bg-white">
            <ReportSummaryModal />
        </div>
      </div>
    </div>
  )
}