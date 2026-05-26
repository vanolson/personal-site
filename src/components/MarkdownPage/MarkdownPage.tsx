import { useLocation } from 'react-router';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeExternalLinks from 'rehype-external-links';

// Vite's import.meta.glob pulls in all markdown files
// The text here must be a literal
const pages = import.meta.glob('/src/pages/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const homePage = '/home';
const errorPath = '/404';

// const pagesLazy = import.meta.glob('/src/pages/**/*.md', {
//   query: '?raw',
//   import: 'default',
//   eager: false,
// });

function MarkdownPage() {
  const mdPath = (filename: string) => `/src/pages${filename}.md`;
  // const { slug } = useParams();
  const { pathname } = useLocation();
  console.log('location is:', pathname);
  // console.log('slug is:', slug)

  // If slug is the base, we redirect to home
  // const fileName = mdPath(pathname.substring(1) ?? 'home');
  const fileName = mdPath(pathname == '/' ? homePage : pathname);

  // If we don't have a page for that, load the error page
  console.log('pages:', pages, pages[fileName]);
  const content = (pages[fileName] ?? pages[mdPath(errorPath)]) as string;

  // console.log('the pages', pagesLazy);
  // console.log('function run', pagesLazy[fileName]().then(a => {return(a)}))

  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw, [rehypeExternalLinks, { target: '_blank' }]]}>
      {content}
    </ReactMarkdown>
  );
}

export default MarkdownPage;
