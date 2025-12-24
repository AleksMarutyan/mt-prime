"use client";

import { ProductCreate } from "@/components/admin/products/create";
import { ProductEdit } from "@/components/admin/products/edit";
import { ProductsList } from "@/components/admin/products/list";
import { authProvider } from "@/lib/auth-provider";
import dynamic from "next/dynamic";

const AdminPanel = dynamic(
  async () => {
    const { Admin, Resource, defaultTheme } = await import("react-admin");
    const jsonServerProvider = (await import("ra-data-json-server")).default;

    const dataProvider = jsonServerProvider("/api");

    // Force light theme only
    const lightTheme = {
      ...defaultTheme,
      palette: {
        ...defaultTheme.palette,
        mode: "light" as const,
      },
    };

    const AdminComponent = () => (
      <Admin
        authProvider={authProvider}
        dataProvider={dataProvider}
        title="MT Prime Admin"
        theme={lightTheme}
        darkTheme={null}
      >
        <Resource
          name="products"
          list={ProductsList}
          create={ProductCreate}
          edit={ProductEdit}
        />
      </Admin>
    );

    return AdminComponent;
  },
  { ssr: false }
);

export default function AdminPage() {
  return <AdminPanel />;
}
