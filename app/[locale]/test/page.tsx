import { useTranslations } from 'next-intl';

export default function TestPage() {
  const t = useTranslations();
  
  return (
    <div>
      <h1>Test Page</h1>
      <p>Current language test</p>
    </div>
  );
}
