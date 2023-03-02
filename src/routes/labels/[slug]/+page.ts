import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
 
export const load = (async ({ fetch, params }) => {
  const id = params.slug
  // console.log('Fetching labels...');
	const response = await fetch(`https://api.discogs.com/labels/${id}?token=OQJMbcHJQoZoYhGJiqlgIAbsngtevyWQuRvAStLN`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Park Fountain Music App /0.1 +http://adb.park-fountain.com" 
    }
  });
	const content = await response.json();
  // console.log(content)
	return { content, id };
}) satisfies PageLoad;
