import "@/styles/globals.css";
import type { AppProps } from "next/app";


import { useRouter } from "next/router";

import Layout from "@/components/layout/layout";
import SettingsLayout from "@/components/layout/settingsLayout";
import AdminLayout from "@/components/layout/adminLayout";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.pathname;

  let LayoutComponent = Layout;
  if (path.startsWith("/settings")) {
    LayoutComponent = SettingsLayout;
  } else if (path.startsWith("/admin")) {
    LayoutComponent = AdminLayout;
  }

  return (
    <LayoutComponent>
      <Component {...pageProps} />
    </LayoutComponent>
  );
}
