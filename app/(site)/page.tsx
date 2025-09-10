import MediumCard from "@/components/shared/mediumCard";
import TeamSlider from "@/components/teamSlider";

// ui components
import Calendar from "@/components/ui/calendar";
import Button from "@/components/ui/button";

export default function Home() {
  return (
    <div className="my-24">
      <section className="max-w-7xl container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative px-4">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-advent-pro font-semibold max-w-lg text-left">
          Huawei Student Developers OSTIM Teknik Üniversitesi
        </h1>

        <div className="max-w-sm w-full flex flex-col items-start gap-2 mt-0">
          <p className="text-lg ">
            Topluluğumuzun etkinlikleri kaçırmamak için hemen giriş yap, sen de
            bu etkinliklerde yer al! Hemen aşağıdaki butondan giriş
            yapabilirsin.
          </p>

          <Button variant="primary">Giriş Yap</Button>
        </div>

        <div className="absolute -top-16 left-4 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />
        <div className="absolute -bottom-24 right-16 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />
      </section>

      <section className="flex items-center gap-3 my-24">
        <TeamSlider />
      </section>

      <section className="max-w-7xl container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 my-24 px-4">
        <div className="flex flex-col items-start gap-4 w-full md:w-1/2">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-advent-pro font-semibold max-w-lg">
            Deprem Bilinci
          </h2>
          <p className="text-lg ">
            Türkiye’de öğrencilerin, öğretmenlerin, ebeveynlerin ve çocukların
            (4 kategori) deprem hakkında bilinçlenmesi için oluşturulmuş web
            sitesi
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <Button variant="primary" href="/projects/deprem-bilinci">
              Projeyi İncele
            </Button>
            <Button variant="outline" href="/projects/deprem-bilinci">
              Bütün Projeleri Gör
            </Button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src="/images/mockap.png"
            alt="mockap for index page"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </section>

      <section className="max-w-7xl container mx-auto flex flex-col items-end my-48 px-4">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-advent-pro font-semibold max-w-lg text-right">
          Son Medium Yazılarımız
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <MediumCard />
          <MediumCard />
          <MediumCard />
          <MediumCard />
        </div>
      </section>

      <section className="max-w-7xl container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 my-24 px-4">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Calendar />
        </div>

        <div className="flex flex-col items-start gap-4 w-full md:w-1/2 sm:max-w-lg md:max-w-2xl">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-advent-pro font-semibold max-w-lg">
            HSD Hackathon
          </h2>
          <p className="text-lg ">
            HSD Hackathon, Huawei Student Developers OSTİM Teknik Üniversitesi
            tarafından düzenlenen ve öğrencilerin yaratıcı projeler
            geliştirmesini teşvik eden bir etkinliktir. Bu hackathon,
            katılımcılara yenilikçi fikirlerini hayata geçirme fırsatı sunar.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <Button variant="primary" href="/events/hsd-hackathon">
              Etkinliği İncele
            </Button>
            <Button variant="outline" href="/events">
              Bütün Etkinlikleri Gör
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
