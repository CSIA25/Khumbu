import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion, Variants } from "framer-motion";

// --- Your local images from the assets folder ---
import member1 from "@/assets/conrad-anker-action.jpg";
import member2 from "@/assets/2.jpg";
import member3 from "@/assets/3.jpg";
import member4 from "@/assets/4.jpg";
import member5 from "@/assets/5.jpeg";
import member6 from "@/assets/6.jpeg";
import member7 from "@/assets/7.jpeg";
import member8 from "@/assets/kunga.jpg";
import member9 from "@/assets/bgg.jpg";

// --- Data is now separated for highlighting ---
const conradAnker = {
  name: "Conrad Anker",
  title: "Advisory Board",
  image: member1,
};

const otherTeamMembers = [
  { name: "Phunuru Sherpa", title: "Chairperson", image: member2 },
  { name: "D. Y. Sherpa", title: "Advisory Board", image: member3 },
  { name: "Cheppal Sherpa", title: "Vice Chairperson", image: member4 },
  { name: "Amrit Ale", title: "Advisory Board", image: member5 },
  { name: "L. N. Sherpa", title: "Secretary", image: member6 },
  { name: "L. N. Sherpa", title: "Advisory Board", image: member7 },
  { name: "Kunga Gyaju", title: "Co-Secretary", image: member8 },
  { name: "P. Gyalzen", title: "Treasurer", image: member9 },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delay: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const TeamPage = () => {
  return (
    <div className="bg-slate-50">
      <Header />
      <main className="pt-20">
        <section className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl font-heading font-black text-foreground">
                Our Team
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                Guided by a world-class team of local leaders and international experts who are the bedrock of our mission.
              </p>
            </motion.div>

            {/* --- NEW CSS Grid Layout --- */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Highlighted Conrad Anker Card */}
              <motion.div
                className="group relative sm:col-span-2 sm:row-span-2 overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5"
                variants={itemVariants}
              >
                <img
                  src={conradAnker.image}
                  alt={`Portrait of ${conradAnker.name}`}
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-1/2 w-auto -translate-x-1/2 whitespace-nowrap opacity-0 transform translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="flex items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <span className="rounded-l-full bg-[#0B2A63] px-4 py-2 text-sm font-semibold text-white">
                      {conradAnker.name}
                    </span>
                    <span className="rounded-r-full px-4 py-2 text-sm text-gray-600">
                      {conradAnker.title}
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Other Team Members */}
              {otherTeamMembers.map((member) => (
                <motion.div
                  key={member.name}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1.5"
                  variants={itemVariants}
                >
                  <img
                    src={member.image}
                    alt={`Portrait of ${member.name}`}
                    className="h-full w-full object-cover"
                  />
                   <div className="absolute bottom-6 left-1/2 w-auto -translate-x-1/2 whitespace-nowrap opacity-0 transform translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0">
                      <div className="flex items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 group-hover:scale-105">
                        <span className="rounded-l-full bg-[#0B2A63] px-4 py-2 text-sm font-semibold text-white">
                          {member.name}
                        </span>
                        <span className="rounded-r-full px-4 py-2 text-sm text-gray-600">
                          {member.title}
                        </span>
                      </div>
                    </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;