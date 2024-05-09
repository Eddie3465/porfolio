import React, { useContext } from 'react';
import WorkItem from '../components/WorkItem';
import { LanguageContext } from '../App';
import es from '../lang/es.json';
import en from '../lang/en.json';

const Experience = () => {
    const { language } = useContext(LanguageContext);
    const lang = language === 'es' ? es : en;
    const works = lang.works;

    return (
        <div className="py-8 sm:py-16 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-8">
                <div className="flex flex-col items-center">
                    <div className="w-full">
                        <div className="p-8 text-center">
                            <div className="mb-8">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-2">{lang.experience}</h1>
                                <div className="h-1 w-20 bg-cyan-400 mx-auto mb-4"></div>
                            </div>
                            <div className="text-left">
                                <h2 className="text-xl text-white font-semibold mb-16">{lang.languagesTechnologies}</h2>
                                <div>
                                    {works.map((work) => (
                                        <WorkItem key={work.id} title={work.title} items={work.items} details={work.details} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
