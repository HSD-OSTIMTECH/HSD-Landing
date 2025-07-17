import React from 'react';
import SettingsSidebar from './settingsSidebar';

type SettingsLayoutProps = React.PropsWithChildren<{}>;

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full max-w-7xl mx-auto py-6 sm:py-10 lg:py-12 px-2 sm:px-4">
      <SettingsSidebar />
      <main className="flex-1 min-w-0 mt-16 sm:mt-0">{children}</main>
    </div>
  );
};

export default SettingsLayout;