import Head from 'next/head'

interface SEOProps {
  title: string;
  description?: string;
  shouldExcludeTitleSuffix?: boolean;
  shouldIndexPage?: boolean;
}

export default function SEO({
  title,
  description,
  shouldExcludeTitleSuffix = false,
  shouldIndexPage = true
} : SEOProps){
  const pageTitle = `${title} ${!shouldExcludeTitleSuffix ? "| JELLO" : ""}`

  return (
    <Head>
      <title>{pageTitle}</title>

      { description && <meta  name="description" content={description}/> }
      <meta name="image" content={`http://localhost:3000/logoJello.png`}/> 

      { !shouldIndexPage && <meta name="robots" content="noindex,nofollow"/> }
    </Head>
  )
}