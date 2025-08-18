"use client";

import { ProductCreate } from "@/components/admin/products/create";
import { ProductEdit } from "@/components/admin/products/edit";
import { ProductsList } from "@/components/admin/products/list";
import { authProvider } from "@/lib/auth-provider";
import dynamic from "next/dynamic";

const AdminPanel = dynamic(
  () =>
    import("react-admin").then((mod) => {
      const { Admin, Resource, defaultTheme } = mod;
      const jsonServerProvider = require("ra-data-json-server").default;

      const dataProvider = jsonServerProvider("/api");

      // Force light theme only
      const lightTheme = {
        ...defaultTheme,
        palette: {
          ...defaultTheme.palette,
          mode: "light" as "light",
        },
      };

      return () => (
        <Admin
          authProvider={authProvider}
          dataProvider={dataProvider}
          title="MT Prime Admin"
          theme={lightTheme}
          darkTheme={null} // Disable dark theme
        >
          <Resource
            name="products"
            list={ProductsList}
            create={ProductCreate}
            edit={ProductEdit}
          />
        </Admin>
      );
    }),
  { ssr: false }
);

export default function AdminPage() {
  return <AdminPanel />;
}
