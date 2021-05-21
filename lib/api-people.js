const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }


	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getPeopleList(){
  const data = await fetchAPI(`
  query MyQuery {
    people {
      edges {
        node {
          id
          slug
          title
          featuredImage {
            node {
              altText
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
        }
      }
    }
  }  
  `)
  return data?.people
}

export async function getPeopleListBySlug(id) {
  const data = await fetchAPI(`
  query MyQuery($id: ID!) {
    person(id: $id, idType: SLUG) {
      content
      id
      slug
      title
      featuredImage {
        node {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
    }
  }`
  , {
    variables: {
      "id": id,
    }
  })
  return data?.person;
}