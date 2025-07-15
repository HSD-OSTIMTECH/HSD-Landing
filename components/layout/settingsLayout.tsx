import React from 'react';
import SettingsSidebar from './settingsSidebar';

type SettingsLayoutProps = React.PropsWithChildren<{}>;

const SettingsLayout: React.FC<SettingsLayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-8 w-full max-w-7xl mx-auto py-12">
      <SettingsSidebar />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
};

export default SettingsLayout;