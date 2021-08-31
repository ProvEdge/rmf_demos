/* eslint-disable jsx-a11y/anchor-is-valid */
import { right } from '@popperjs/core'
import { url } from 'inspector'
import React from 'react'
// import {KTSVG,toAbsoluteUrl} from '../../../helpers'

type Props = {
  className: string
  color: string
  title: string
  description: string
  progress: string
  iconName: string
}
// <div class="card bgi-no-repeat card-xl-stretch mb-xl-8" style="background-position: right top; background-size: 30%; background-image: url(&quot;/metronic8/react/demo1/media/svg/shapes/abstract-4.svg&quot;);"><div class="card-body"><a href="#" class="card-title fw-bolder text-muted text-hover-primary fs-4">Meeting Schedule</a><div class="fw-bolder text-primary my-6">3:30PM - 4:20PM</div><p class="text-dark-75 fw-bold fs-5 m-0">Create a headline that is informative<br>and will capture readers</p></div></div>
const StatisticsWidget6: React.FC<Props> = ({className, color, title, description, progress, iconName}) => {
  return (
    <div className={`card ${className}`} >
      {/* begin::Body */}
      <div className='card-body my-3'>
          <a href='#' className={`card-title fw-bolder text-${color} fs-5 mb-3 d-block`}>
          {description}
          </a>
          <span><img width="70px" style={{position: 'absolute', right:'10px', top:'10px', fill:'lightblue'}} src={`/media/svg/status/${iconName}.svg`}></img></span>
        

        <div className='py-1'>
          <span className='text-dark fs-1 fw-bolder me-2'>{progress}</span>

          <span className='fw-bold text-muted fs-7'>{title}</span>
        </div>
        
        <div className={`progress h-7px bg-secondary bg-opacity-50 mt-7`}>
          <div
            className={`progress-bar bg-${color}`}
            role='progressbar'
            style={{width: progress}}
          />
        </div>
      </div>
      {/* end:: Body */}
    </div>
  )
}

export {StatisticsWidget6}
