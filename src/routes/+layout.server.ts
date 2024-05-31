import { navigation } from '$lib/components/navigation/navigationItems/Navigation';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		navigationItems: navigation.map((item) => ({
			id: item.id,
			title: item.title,
			href: item.href
		}))
	};
};
