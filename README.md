# MT Prime - Next.js App with Prisma

A Next.js application with Prisma database and shadcn/ui components.

## Getting Started

```bash
# Install dependencies
pnpm install

# Setup database
pnpm run db:generate
pnpm run db:push

# Start development server
pnpm dev
```

## Adding shadcn/ui components

```bash
npx shadcn@latest add button
```

## Using components

```tsx
import { Button } from "@/components/ui/button";
```

## API Routes

- GET `/api/products` - Get all products
- POST `/api/products` - Create a product
- GET `/api/products/[id]` - Get single product
- PUT `/api/products/[id]` - Update product
- DELETE `/api/products/[id]` - Delete product
