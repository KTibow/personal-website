// See https://kit.svelte.dev/docs/types#app
import type { SvelteComponent } from 'svelte';

declare global {
	namespace App {
		// Interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}

		type MdsvexFile = {
			default: SvelteComponent;
			metadata: BlogPost & Record<string, string>;
		};

		type MdsvexResolver = () => Promise<MdsvexFile>;

		type BlogPost = {
			author: string;
			component: SvelteComponent;
			date: string;
			description: string;
			published: boolean;
			slug: string;
			title: string;
			updated: string;
		};
	}

	module '*as=optimize' {
		const out: unknown;
		export default out;
	}
}
