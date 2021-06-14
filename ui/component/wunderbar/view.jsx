// @flow
import * as ICONS from 'constants/icons';
import React from 'react';
import { useIsMobile } from 'effects/use-screensize';

const Button = React.lazy(() => import('component/button' /* webpackChunkName: "button" */));
const Icon = React.lazy(() => import('component/common/icon' /* webpackChunkName: "icon" */));
const WunderbarSuggestions = React.lazy(() => import('component/wunderbarSuggestions' /* webpackChunkName: "secondary" */));

type Props = {
  doOpenMobileSearch: () => void,
};

export default function WunderBar(props: Props) {
  const { doOpenMobileSearch } = props;
  const isMobile = useIsMobile();

  return isMobile ? (
    <React.Suspense fallback={null}>
      <Button icon={ICONS.SEARCH} className="wunderbar__mobile-search" onClick={() => doOpenMobileSearch()} />
    </React.Suspense>
  ) : (
    <React.Suspense
      fallback={
        <div className="wunderbar__wrapper wunderbar wunderbar__input" aria-disabled>
          <Icon icon={ICONS.SEARCH} aria-disabled />
        </div>
      }
    >
      <WunderbarSuggestions />
    </React.Suspense>
  );
}
