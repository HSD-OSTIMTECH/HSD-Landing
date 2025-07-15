import React from 'react';
import AdminSidebar from './adminSidebar';

type AdminLayoutProps = React.PropsWithChildren<{}>;

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-8 w-full px-16 py-12">
      <AdminSidebar />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
};

export default AdminLayout;