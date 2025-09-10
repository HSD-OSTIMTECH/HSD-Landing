
import React, { useState } from 'react';
import Button from '@/components/ui/button';
import CoreTeamCard from '@/components/shared/coreTeamCard';
import SelectBox from '@/components/ui/selectBox';

const About = () => {
    // SelectBox örnek verileri
    const [department, setDepartment] = useState('all');
    const [social, setSocial] = useState('all');
    const departmentOptions = [
        { label: 'Tümü', value: 'all' },
        { label: 'Departman Başkanları', value: 'baskan' },
        { label: 'Yazılım', value: 'yazilim' },
        { label: 'Tasarım', value: 'tasarim' },
    ];
    const socialOptions = [
        { label: 'Tümü', value: 'all' },
        { label: 'Sosyal Medya Departmanı', value: 'sosyal' },
        { label: 'Etkinlik', value: 'etkinlik' },
    ];

    return (
        <section className='my-24 max-w-7xl container mx-auto flex flex-col items-start gap-12 px-2 sm:px-4'>
            {/* Hero Section */}
            <section className="max-w-7xl container mx-auto flex flex-col md:flex-row items-center justify-between relative gap-4 w-full">
                <h1 className="text-5xl md:text-7xl font-advent-pro font-semibold text-left w-full md:w-auto">
                    Biz Kimiz, Ne Yapıyoruz?
                </h1>

                <div className="max-w-2xl w-full flex flex-col items-start gap-2 md:mt-0">
                    <p className="text-2xl">
                        Biz OSTİM Teknik Üniversitesinde kurulmuş olan bir topluluğuz. Çeşitli etkinlikler ve projeler yapıyoruz. Sende üye olmak ister misin?
                    </p>

                    <Button variant="primary">Hemen Üye Ol</Button>
                </div>

                <div className="absolute -top-16 left-4 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />
                <div className="absolute -bottom-24 right-16 w-24 h-24 bg-primary rounded-full -z-10 blur-3xl" />
            </section>
            {/* Team Section */}
            <section className="w-full flex flex-col gap-8 my-36">
                <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
                    <h2 className="text-3xl sm:text-4xl font-advent-pro font-bold text-white text-center md:text-left w-full md:w-auto">Ekibimizle Tanış!</h2>
                    <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0 items-center justify-center md:justify-end">
                        <SelectBox options={departmentOptions} value={department} onChange={setDepartment} />
                        <SelectBox options={socialOptions} value={social} onChange={setSocial} />
                    </div>
                </div>
                <div className="w-full flex flex-wrap justify-center md:justify-between gap-8">
                    {/* Örnek 3 kart */}
                    <CoreTeamCard />
                    <CoreTeamCard />
                    <CoreTeamCard />
                    <CoreTeamCard />
                </div>
            </section>
            {/* HSD Section */}
            <section className="max-w-7xl container mx-auto flex flex-col-reverse md:flex-row items-center justify-between relative gap-8 md:gap-0 my-24 w-full">
                <div className="max-w-2xl w-full flex flex-col items-start gap-2 mt-8 md:mt-0">
                    <p className="text-lg">
                        HUAWEI Student Developers (HSD), öncü teknolojilere tutku duyan üniversite öğrencileri için küresel bir programdır. Geliştirici olarak büyümek isteyen tüm lisans ve lisansüstü öğrenciler başvuruda bulunabilir. HSD, öğrencilere zenginleştirici eğitim kursları ve etkinlikler aracılığıyla dinamik bir akranlar arası öğrenme ortamında bilgi birikimlerini genişletme fırsatı sunar.
                    </p>

                    <Button as='link' href='https://developer.huawei.com/consumer/en/programs/hsd/' variant="primary">Detaylar</Button>
                </div>

                <div className="absolute -bottom-24 right-1/2 w-64 h-64 bg-primary/20 rounded-full -z-20 blur-3xl" />

                <h1 className="text-right text-3xl sm:text-5xl md:text-7xl font-advent-pro font-semibold max-w-lg w-full md:w-auto">
                    HSD Nedir, Biz Neyin Parçasıyız?
                </h1>
            </section>
        </section>
    );
}

export default About