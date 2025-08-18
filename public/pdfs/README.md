# PDF Documents Setup

This folder contains the PDF documents that can be accessed via QR codes on the website.

## How to Add Your PDFs

1. Place your PDF files in this folder (`/public/pdfs/`)
2. Update the file names in `/lib/pdf-config.ts` to match your actual PDF names
3. Update the titles and descriptions in the configuration

## Current Configuration

The system is currently configured for these documents:

- **Document ID: doc1**

  - Expected filename: `catalog.pdf`
  - Title: "Product Catalog"
  - Description: "Complete product catalog and pricing information"

- **Document ID: doc2**
  - Expected filename: `manual.pdf`
  - Title: "User Manual"
  - Description: "Comprehensive user guide and instructions"

## To Add Your PDFs

1. Rename your PDF files to match the expected filenames (`catalog.pdf` and `manual.pdf`)
2. Copy them to this folder
3. Or update the configuration in `/lib/pdf-config.ts` to match your actual filenames

## QR Code Access

Once the PDFs are in place, the QR codes on the main page will automatically link to:

- `https://yoursite.com/pdf/doc1` (for catalog.pdf)
- `https://yoursite.com/pdf/doc2` (for manual.pdf)

## Testing

You can test the PDF viewer by visiting:

- `http://localhost:3000/pdf/doc1`
- `http://localhost:3000/pdf/doc2`

Make sure to start the development server with `pnpm dev` first.
