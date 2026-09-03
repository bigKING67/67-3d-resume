import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export default function WorkMarkdown({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        img: ({ node, ...props }) => {
          void node
          return <img {...props} loading="lazy" decoding="async" />
        },
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
