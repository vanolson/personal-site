import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

// Vite's import.meta.glob pulls in all markdown files
const mdPath = (filename: string) => `/src/pages/${filename}.md`;
// The text here must be a literal
const pages = import.meta.glob('/src/pages/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

function MarkdownPage() {
  const { slug } = useParams();

  // If slug is undefined, we redirect to home
  const fileName = mdPath(slug ?? 'home');

  // If we don't have a page for that, load the error page
  const content = (pages[fileName] ?? pages[mdPath('404')]) as string;

  return <ReactMarkdown rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>;
}

export default MarkdownPage;
