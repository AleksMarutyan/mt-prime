// in src/posts.jsx
import { useLocale } from "next-intl";
import { List, DataTable, DeleteButton } from "react-admin";

export const ProductsList = () => {
  const locale = useLocale().toUpperCase();
  return (
    <List>
      <DataTable>
        <DataTable.Col
          source="name"
          render={({ names }) => {
            return names[locale] || names.EN || "";
          }}
        />
        <DataTable.Col source="price" />
        <DataTable.Col source="category" />
        <DataTable.Col
          source="actions"
          render={(record) => (
            <DeleteButton
              confirmTitle="Delete Product"
              record={{ ...record, id: record.id || "" }}
              confirmContent="Are you sure you want to delete this product?"
            />
          )}
        />
      </DataTable>
    </List>
  );
};
