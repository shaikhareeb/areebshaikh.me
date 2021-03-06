import ExperienceCard from "../Components/ExperienceCard";
import compass from "../Images/compass.png";
import { motion } from "framer-motion";

const Experience = ({ theme }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ type: "tween", duration: 0.7 }}
		>
			<h1 className="font-mono text-2xl mt-8 mb-4">Experience</h1>
			<div className="grid grid-cols-1 gap-y-4">
				<ExperienceCard
					image={compass}
					text="Full-Stack Developer Intern @ Compass"
					text2="May 2021 - August 2021"
					date="May 2021 - August 2021 | Toronto, ON"
					body={
						<>
							<li>
								Spearheaded full stack development of a B2B SaaS platform used
								by thousands of students at multiple Canadian universities
							</li>
							<li>
								Developed REST APIs and the front-end implementation of various
								new features and UI/UX updates
							</li>
							<li>
								Implemented the functionality to automatically populate the
								database via CSV, significantly improving efficiency by
								eliminating countless hours of tedious manual labor
							</li>
							<li>
								Technologies utilized include React, Django, PostgreSQL,
								JavaScript, HTML/SCSS
							</li>
						</>
					}
					theme={theme}
				/>
			</div>
		</motion.div>
	);
};

export default Experience;
