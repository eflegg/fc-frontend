const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
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


export async function getHomeData(){
  const data = await fetchAPI(
    `query HeroQuery {
      page(id: "14", idType: DATABASE_ID){
        homeHero {
          heroTextEnglish
          heroTextFrench
          leadMagnetFrench
          leadMagnetEnglish
          buttonTextEnglish
          buttonTextFrench
          hireUsEnglish
          hireUsFrench
        }
        homeAbout {
          aboutTitleEnglish
          aboutTitleFrench
          aboutTextEnglish
          aboutTextFrench
        }
        homeServices {
          homeServiceIntro {
            textEnglish
            textFrench
            titleEnglish
            titleFrench
          }
          
            singleServices {
              altEnglish
              altFrench
              descriptionEnglish
              descriptionFrench
              image {
                uri
                sourceUrl
              }
              titleEnglish
              titleFrench
            }
          
        }
       
      }
    }
    `,
  
  )
  return data.page
  
}
export async function getCaseStudies(){
  const data = await fetchAPI (`
  query CaseStudiesQuery {
    caseStudies {
      edges {
        node {
          title
          content
          slug
          uri
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  }`,
  
  )
  return data?.caseStudies
}

export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data?.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}
export async function getAllCaseStudiesWithSlug() {
  const data = await fetchAPI(`
    {
      caseStudies {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.caseStudies
}

export async function getStudy(slug){
  const data = await fetchAPI(`
  fragment PostFields on CaseStudy {
    title
    slug
    uri
    caseStudy {
      hero {
        clientWebsiteLink
        websiteTitle
      }
      images {
        mobileMockup {
          altText
          sourceUrl
        }
        multisizeMockup {
          altText
          sourceUrl
        }
        tabletMockup {
          altText
          sourceUrl
        }
        graphic {
          altText
          sourceUrl
        }
        logo {
          altText
          sourceUrl
        }
        desktopMockup {
          altText
          sourceUrl
        }
      }
      theProcess {
        build
        launch
        vision
      }
      theWork {
        clientDescription
        keywordDescription
        keywords {
          keyword
        }
        theChallenge
        typeOfWork
      }
    }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
  query PostBySlug($id: ID!, $idType: CaseStudyIdType!) {
  
    caseStudy(id: $id, idType: $idType) {
         ...PostFields
       }
 }
  `,
  {
    variables: {
      id: slug,
      idType: 'SLUG',
    },
  }
  )
  return data?.caseStudy
}



export async function getAllPostsForHome(preview) {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            title
            excerpt
            slug
            date
            content
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
              }
            }
          }
        }
      }
    }
  `,
    {
      variables: {
        onlyEnabled: !preview,
        preview,
      },
    }
  )

  return data?.posts
}



export async function getPostAndMorePosts(slug, preview, previewData) {
  const postPreview = preview && previewData?.post
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug))
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug
  const isDraft = isSamePost && postPreview?.status === 'draft'
  const isRevision = isSamePost && postPreview?.status === 'publish'
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on Post {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        ...PostFields
        content
        ${
          // Only some of the fields of a revision are considered as there are some inconsistencies
          isRevision
            ? `
        revisions(first: 1, where: { orderby: { field: MODIFIED, order: DESC } }) {
          edges {
            node {
              title
              excerpt
              content
              author {
                node {
                  ...AuthorFields
                }
              }
            }
          }
        }
        `
            : ''
        }
      }
      posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
    {
      variables: {
        id: isDraft ? postPreview.id : slug,
        idType: isDraft ? 'DATABASE_ID' : 'SLUG',
      },
    }
  )

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node

    if (revision) Object.assign(data.post, revision)
    delete data.post.revisions
  }

  data
  // Filter out the main post
  // data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug)
  // // If there are still 3 posts, remove the last one
  // if (data.posts.edges.length > 2) data.posts.edges.pop()

  return data
}


export async function getStudyAndMoreStudies(slug, preview, previewData) {
 
  const data = await fetchAPI(
    `
    fragment AuthorFields on User {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
    fragment PostFields on caseStudy {
      title
      excerpt
      slug
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          ...AuthorFields
        }
      }
      categories {
        edges {
          node {
            name
          }
        }
      }
      tags {
        edges {
          node {
            name
          }
        }
      }
    }
    query PostBySlug($id: ID!, $idType: CaseStudyIdType!) {
      caseStudy(id: $id, idType: $idType) {
        ...PostFields
        content
      }
      caseStudies(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
        edges {
          node {
            ...PostFields
          }
        }
      }
    }
  `,
   
  )

  return data
}




// <NextProject className={`${slide? "slide-up" : "" } next-project`}>
// {nextPost.node.slug && nextPost.node.featuredImage.node.sourceUrl && (

//   <Link onClick={(e)=> handleClick(e, nextPost.node.slug)} className="next-link" href={`/work/${nextPost.node.slug}`}>
 
//     <figure className="next-study">
//       <img src={nextPost.node.featuredImage.node.sourceUrl} alt={nextPost.node.featuredImage.node.altText ? nextPost.node.featuredImage.node.altText: "Decorative image for next case study" } />
//     </figure>

//   </Link>
// )}
// </NextProject>