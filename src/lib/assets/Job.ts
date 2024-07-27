export interface Job {
	id: number;
	company: string;
	companyId: string;
	role: string;
	startDate: string;
	endDate: string | null;
	description: string;
	technologyUsed: string[];
}
