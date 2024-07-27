import type { Job } from '$lib/assets/Job';
import resume from '$lib/assets/resume';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	//const resume = resume.

	const jobs: Job[] = resume;

	return { jobs };
};
