import Button from '@/components/ui/button';
const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-950 px-4">
      <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-8 text-center flex flex-col items-center gap-4">
        <div className="text-4xl mb-2">🚧</div>
        <h1 className="text-white font-advent-pro text-xl font-bold mb-2">Uygulama Aktif Geliştiriliyor</h1>
        <p className="text-neutral-400 font-poppins text-base mb-4">
          Bu sayfa veya uygulama henüz tamamlanmadı. Tüm kodları Github üzerinden inceleyebilir ve katkı sunabilirsin.
        </p>
            <div className="flex flex-row gap-3 w-full mt-2">
              <a
                href="https://github.com/HSD-OSTIMTECH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary font-semibold hover:bg-primary/20 transition-colors w-1/2 justify-center"
              >
                Github'da İncele
                <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 10h10M15 10l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <Button as="link" href="/" variant="primary" className="w-1/2">
                Ana sayfaya dön
              </Button>
            </div>
      </div>
    </div>
  );
}

export default NotFound;