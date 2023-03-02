import type { Actions, PageServerLoad } from './$types';

let fin
export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    fin = data.get('searchWord');
  }
} satisfies Actions;

export const load = (async ({ fetch, params, url }) => {
  const searchWord = url.searchParams.get('searchWord');
  let word = searchWord ? searchWord : fin
	const response = await fetch(`https://api.discogs.com/database/search?&per_page=20&q=${word}&key=NYyyHmoHXqYejncQFnaA&secret=RWWzBdFPsseyctCuMYzUttimvlHpBVqM`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "User-agent": "Park Fountain Music App /0.1 +http://adb.park-fountain.com" 
    }
  });
	const content = await response.json();
  console.log(content)
	return { content };
}) satisfies PageServerLoad;