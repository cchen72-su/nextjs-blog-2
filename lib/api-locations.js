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

export async function getLocationItems(){
  const data = await fetchAPI(`
  query MyQuery {
    locations {
      edges {
        node {
          content
          slug
          title
          id
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
  return data?.locations
}
{/*
//the same as above one 
export async function getLocationItemSlugs () {
  const data = await fetchAPI(`
    query MyQuery {
      locations {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  return data?.locations
}
*/}

export async function getLocationItemBySlug (id) {
  const data = await fetchAPI(`
  query MyQuery($id: ID!) {
    location(id: $id, idType: SLUG) {
      id
      title
      content
      featuredImage {
        node {
          altText
          mediaDetails {
            height
            width
          }
          sourceUrl
        }
      }
      menuTypes {
            edges {
              node {
                id
                name
                items {
                  edges {
                    node {
                      id
                      title
                      slug
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
            }
          }
    }
  }
  
  `, {
    variables: { 
        "id" : id,
    }
  })
  return data?.location
}