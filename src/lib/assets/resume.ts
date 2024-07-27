import type { Job } from "./Job";

const resume: Job[] = [
	{
		id: 0,
		company: 'DealerOn',
		companyId: 'dealerOn',
		role: 'Junior Web Designer',
		startDate: 'February 2018',
		endDate: 'January 2019',
		description:
			'Design and develop mock-ups for custom homepages and various other pages.Served as a mentor to newer Web Designers and helped to track growth and areas for improvement. Co-managed the internal ticket queue to assign out work as it came in or push back when requirements were unclear.',
		technologyUsed: ['html', 'css', 'bootstrap', 'javascript', 'jquery']
	},
	{
		id: 1,
		company: 'SAIC',
		companyId: 'saic',
		role: 'Web Developer',
		startDate: 'January 2019',
		endDate: 'April 2020',
		description:
			"Contributed to the development of internal APIs that would serve critical data to the Akamai Firewall for external ingestion that would feed CORE3. Built the official Medal of Honor websites for two recipients (Bellavia & Williams). Overhauled STAND-TO!, the official site for relaying OCPA's strategic communications objectives. Performed various other updates to varying degrees of complexity for a variety of other microsites that are hosted alongside Army.mil.",
		technologyUsed: [
			'html',
			'scss',
			'javascript',
			'typescript',
			'jquery',
			'angular',
			'php',
			'laravel',
			'jekyll',
			'docker',
			'aws'
		]
	},
	{
		id: 2,
		company: 'Booz Allen Hamilton',
		companyId: 'bah',
		role: 'Software Developer',
		startDate: 'April 2020',
		endDate: 'January 2022',
		description:
			"Served as a 'T' shaped developer, providing support to both the Front-End and Back-End as the team built out the next iteration of Dibnet. Built a massive, multi-step form that was used to triage real time Cyber Incidents as they are happening and contributed to the API development that would support this feature. Spearheaded the planning, design, development, and testing of NASA's Rideshare Portal while also interfacing with the client to gather requirements and ensure that key targets were met.",
		technologyUsed: [
			'html',
			'css',
			'scss',
			'javascript',
			'typescript',
			'angular',
			'java',
			'springboot',
			'postgres',
			'docker',
			'aws'
		]
	},
	{
		id: 3,
		company: 'Brightspot',
		companyId: 'brightspot',
		role: 'Senior Software Engineer',
		startDate: 'January 2022',
		endDate: null,
		description:
			'Overhauled Front End User Authentication for Google REWS, switching between internal Google tools to provide authentication that is only stored in Session data, instead of in the DB. Refactored and granularized the Notification system for Google Mission Control, to allow users to specify on a multitude of levels the types of notifications they would receive, and the depth of information provided therein. Served as the Front-End Subject Matter Expert for Google Mission Control and provided expert insight into feasibility of requests and delivery of desired features. Provided 24/7 support across the Brightspot organization where I was able to provide prompt support to users on an international scale when responding to outages, assisting with production deployments, or ensuring site stability when system redundancy was unstable.',
		technologyUsed: [
			'html',
			'handlebars',
			'css',
			'less',
			'javascript',
			'jquery',
			'java',
			'sql',
			'gcp',
			'aws',
			'docker',
			'kubernetes'
		]
	}
];

export default resume;
