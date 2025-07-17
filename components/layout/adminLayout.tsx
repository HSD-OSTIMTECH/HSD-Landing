import React from 'react';
import AdminSidebar from './adminSidebar';

type AdminLayoutProps = React.PropsWithChildren<{}>;


const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      {/* Mobilde uyarı, desktopta panel */}
      <div className="px-5 lg:hidden w-full min-h-screen flex items-center justify-center bg-neutral-950">
        <div className="text-center p-8 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-lg">
          <div className="text-3xl mb-2">⚠️</div>
          <div className="text-white font-semibold text-lg mb-1">Lütfen masaüstü bir cihazdan giriş yapın</div>
          <div className="text-neutral-400 text-sm">Admin paneline sadece masaüstü cihazlardan erişebilirsiniz.</div>
        </div>
      </div>
      <div className="hidden lg:flex gap-8 w-full px-16 py-12">
        <AdminSidebar />
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </>
  );
};

export default AdminLayout;