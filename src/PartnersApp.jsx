import { useEffect } from 'react';

export default function PartnersApp() {
  useEffect(() => {
    window.location.replace('/tekkiblaze-partners.html');
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-canvas">
      <div className="text-center">
        <div className="text-sm text-text-mid">Redirecting to partners page…</div>
      </div>
    </div>
  );
}
