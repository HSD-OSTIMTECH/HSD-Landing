import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="my-24 relative">

      <div className="absolute -top-16 left-4 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />
      <div className="absolute -bottom-16 right-16 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />

      <section className="max-w-7xl container mx-auto flex items-center justify-between">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-advent-pro font-semibold max-w-lg">Huawei Student Developers OSTIM Teknik Üniversitesi</h1>

        <div className="max-w-sm flex flex-col items-start gap-2">
          <p className="text-lg ">
            Topluluğumuzun etkinlikleri kaçırmamak için hemen giriş yap, sen de bu etkinliklerde yer al! Hemen aşağıdaki butondan giriş yapabilirsin.
          </p>

          <Button variant="primary">Giriş Yap</Button>

        </div>

      </section>


    </div>
  );
}
