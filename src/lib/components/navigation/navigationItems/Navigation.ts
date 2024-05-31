export interface NavItem {
	id: number;
	title: string;
	href: string;
}

export const navigation: NavItem[] = [
	{ id: 0, title: 'About', href: '/about' },
	{ id: 1, title: 'Resume', href: '/resume' },
	{ id: 2, title: 'Projects', href: '/projects' }
];
