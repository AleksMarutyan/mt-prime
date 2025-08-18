import * as React from "react";
import {
  Edit,
  required,
  TextInput,
  NumberInput,
  SimpleForm,
  SelectInput,
} from "react-admin";
import { Product, ProductCategory } from "@/types/products";

export const ProductEdit = () => (
  <Edit<Product>>
    <SimpleForm>
      <TextInput
        source="names.EN"
        label="English Name"
        validate={[required()]}
        fullWidth
      />
      <TextInput
        source="names.IT"
        label="Italian Name"
        validate={[required()]}
        fullWidth
      />
      <TextInput
        source="names.FR"
        label="French Name"
        validate={[required()]}
        fullWidth
      />

      {/* Price */}
      <NumberInput source="price" validate={[required()]} />

      {/* Category */}
      <SelectInput
        source="category"
        choices={[{ id: ProductCategory.NO_CATEGORY, name: "No Category" }]}
        defaultValue={ProductCategory.NO_CATEGORY}
      />

      {/* Description fields */}
      <TextInput
        source="descriptions.EN"
        label="English Description"
        validate={[required()]}
        multiline
        rows={3}
        fullWidth
      />
      <TextInput
        source="descriptions.IT"
        label="Italian Description"
        multiline
        rows={3}
        fullWidth
        validate={[required()]}
      />
      <TextInput
        source="descriptions.FR"
        label="French Description"
        multiline
        rows={3}
        fullWidth
        validate={[required()]}
      />

      <TextInput
        source="imagesUrls[0]"
        label="Image URL 1"
        fullWidth
        validate={[required()]}
      />
      <TextInput
        source="imagesUrls[1]"
        label="Image URL 2"
        fullWidth
        validate={[required()]}
      />
      <TextInput
        source="imagesUrls[2]"
        label="Image URL 3"
        fullWidth
        validate={[required()]}
      />
    </SimpleForm>
  </Edit>
);
