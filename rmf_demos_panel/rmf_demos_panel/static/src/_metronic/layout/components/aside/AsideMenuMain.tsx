/* eslint-disable react/jsx-no-target-blank */
import React from "react";
// import {useIntl} from 'react-intl'
import { KTSVG } from "../../../helpers";
import { AsideMenuItemWithSub } from "./AsideMenuItemWithSub";
import { AsideMenuItem } from "./AsideMenuItem";

export function AsideMenuMain() {
  // const intl = useIntl()

  return (
    <>
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Robotics
          </span>
        </div>
      </div>

      <AsideMenuItem
        to="/fleet"
        icon="/media/icons/duotone/General/Binocular.svg"
        title="Fleet Management"
        // title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon="bi-app-indicator"
      />
      <AsideMenuItem
        to="/robots"
        icon="/media/icons/duotone/Map/Direction1.svg"
        title="Robot Management"
        // title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon="bi-app-indicator"
      />
      {/* <AsideMenuItemWithSub to='/crafted/pages/profile' title='Visualiztion' hasBullet={true}>
          <AsideMenuItem to='/crafted/pages/profile/overview' title='AR/VR' hasBullet={true} />
          <AsideMenuItem
            to='/crafted/pages/profile/connections'
            title='Metrics/Counter'
            hasBullet={true}
          />
        </AsideMenuItemWithSub> */}
      {/* <AsideMenuItem
          to='/crafted/pages/profile/overview'
          title='Robot Management'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/pages/profile/overview'
          title='Tele-Operation'
          hasBullet={true}
        />
        <AsideMenuItem
          to='/crafted/pages/profile/overview'
          title='Task Management'
          hasBullet={true}
        />
      </AsideMenuItemWithSub> */}

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Cloud
          </span>
        </div>
      </div>
      <AsideMenuItem
        to="/clusters"
        title="Federation Management"
        fontIcon="bi-archive"
        icon="/media/icons/duotone/Code/Compiling.svg"
      ></AsideMenuItem>

      <AsideMenuItemWithSub
        to="/error"
        title="Cluster Management"
        fontIcon="bi-sticky"
        icon="/media/icons/duotone/Layout/Layout-polygon.svg"
      >
        <AsideMenuItem to="/overview" title="Overview" hasBullet={false} />
        <AsideMenuItem to="/nodes" title="Nodes" hasBullet={false} />
        <AsideMenuItem to="/namespaces" title="Namespaces" hasBullet={false} />

        <AsideMenuItemWithSub
          to="/error/500"
          title="Workloads"
          hasBullet={false}
        >
          <AsideMenuItem
            to="/deployments"
            title="Deployments"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/stateful-sets"
            title="Stateful Sets"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/daemon-sets"
            title="Daemon Sets"
            hasBullet={true}
          />
          <AsideMenuItem to="/pods" title="Pods" hasBullet={true} />
          <AsideMenuItem to="/jobs" title="Jobs" hasBullet={true} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub to="/error/500" title="Storage" hasBullet={false}>
          <AsideMenuItem
            to="/storage-classes"
            title="Storage Classes"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/persistent-volumes"
            title="Persistent Volumes"
            hasBullet={true}
          />
          <AsideMenuItem
            to="/persistent-volume-claims"
            title="Persistent Volume Claims"
            hasBullet={true}
          />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
          to="/error/500"
          title="Networking"
          hasBullet={false}
        >
          <AsideMenuItem to="/services" title="Services" hasBullet={false} />
          <AsideMenuItem to="/ingresses" title="Ingresses" hasBullet={false} />
        </AsideMenuItemWithSub>

        <AsideMenuItemWithSub
          to="/error/500"
          title="Configuration"
          hasBullet={false}
        >
          <AsideMenuItem
            to="/config-maps"
            title="ConfigMaps"
            hasBullet={false}
          />
          <AsideMenuItem to="/secrets" title="Secrets" hasBullet={false} />
        </AsideMenuItemWithSub>
        <AsideMenuItemWithSub
          to="/error/500"
          title="Monitoring"
          hasBullet={false}
        >
          <AsideMenuItem to="/logs" title="Logs" hasBullet={false} />
          <AsideMenuItem to="/events" title="Events" hasBullet={false} />
        </AsideMenuItemWithSub>
      </AsideMenuItemWithSub>

      <AsideMenuItemWithSub
        to="/apps/chat"
        title="Application LCM"
        fontIcon="bi-chat-left"
        icon="/media/icons/duotone/General/Duplicate.svg"
      >
        <AsideMenuItem to="/ci-cd" title="CI/CD" hasBullet={true} />
      </AsideMenuItemWithSub>
      {/* <div className='menu-item'>
        <div className='menu-content'>
          <div className='separator mx-1 my-4'></div>
        </div>
      </div> */}
      {/* <div className='menu-item'>
        <a
          target='_blank'
          className='menu-link'
          href={process.env.REACT_APP_PREVIEW_DOCS_URL + '/docs/changelog'}
        >
          <span className='menu-icon'>
            <KTSVG path='/media/icons/duotone/Devices/Diagnostics.svg' className='svg-icon-2' />
          </span>
          <span className='menu-title'>FCAPS Management</span>
        </a>
      </div> */}
      {/* <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotone/Layout/Layout-4-blocks.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='/crafted/widgets/lists' title='Lists' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/statistics' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/charts' title='Charts' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/mixed' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/tables' title='Tables' hasBullet={true} />
        <AsideMenuItem to='/crafted/widgets/feeds' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub> */}
    </>
  );
}
