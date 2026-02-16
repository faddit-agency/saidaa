import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const newsData = {
    "1": {
        date: '2025. 2. 3.',
        category: 'AWARDS',
        title: 'Home.Earth Nærheden selected as a finalist for Best Residential Project at the MIPIM Awards',
        heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop',
        content: `To us, this recognition reflects the strength of working together across disciplines and shared ambitions. Together, we have developed and delivered 158 homes that are now fully built, leased, and in operation – proving that low-carbon housing can be both scalable and socially inclusive. Compared to a conventional DGNB Gold-certified development, Home.Earth Nærheden has achieved a significantly lower carbon footprint through careful material selection and innovative construction techniques.

The project is located in Nærheden, a new suburban development in Hedehusene, Denmark. It consists of three buildings that frame a shared courtyard, encouraging interaction between residents of different ages and backgrounds. The architecture is characterized by its use of natural materials, such as timber and clay, and its integration of biophilic design principles.

Winning a MIPIM Award would be a testament to the hard work and dedication of everyone involved in this project. We are proud to be part of a team that is pushing the boundaries of sustainable residential architecture.`
    },
    "2": {
        date: '2025. 2. 2.',
        category: 'RESEARCH',
        title: 'In the process: Shaping Augustenborg\'s next chapter',
        heroImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070&auto=format&fit=crop',
        content: `Augustenborg is one of Denmark's most coherent ducal towns – shaped by centuries of interplay between power, landscape, and architecture. The castle, the castle church, the palaces, the Baroque ensemble, and the parklands testify to a town that was once a European center, where city, nature, and representation were carefully choreographed.

Our current research project aims to revitalize Augustenborg's historical center while preserving its unique architectural heritage. We are exploring how new urban interventions can re-establish the connection between the town and its surrounding landscape, and how the historical buildings can be adapted for contemporary uses.

The study includes a detailed analysis of the town's urban fabric, as well as a range of proposals for new public spaces and community infrastructure. We are working closely with local stakeholders and heritage organizations to ensure that our proposals are both respectful of the past and responsive to the needs of the future.`
    },
    // Adding more if needed, but these serve as solid examples
};

const NewsDetail = () => {
    const { id } = useParams();
    const article = newsData[id] || newsData["1"];

    return (
        <div className="pb-24">
            {/* Back Button */}
            <div className="container mx-auto py-6">
                <Link to="/news" className="inline-flex items-center text-xs font-bold tracking-widest hover:text-green-600 transition-colors uppercase">
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Back to News
                </Link>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* Hero Image */}
                <div className="container mx-auto mb-16">
                    <div className="w-full aspect-[21/9] overflow-hidden bg-muted">
                        <img
                            src={article.heroImage}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="container mx-auto">
                    <div className="w-full">
                        <div className="flex items-center gap-4 text-[10px] font-black tracking-widest text-muted-foreground uppercase mb-6">
                            <span>{article.date}</span>
                            <span className="text-green-600">{article.category}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight leading-tight uppercase">
                            {article.title}
                        </h1>
                        <div className="text-sm text-muted-foreground leading-[1.8] space-y-8">
                            {article.content.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default NewsDetail;
