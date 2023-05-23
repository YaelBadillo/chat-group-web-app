import { FC, ReactNode } from 'react'

interface TextSuggestionProps {
  children: ReactNode
}

export const TextSuggestion: FC<TextSuggestionProps> = ({ children }) => {
  return <p className="mt-4 text-center text-sm text-gray-light">{children}</p>
}
