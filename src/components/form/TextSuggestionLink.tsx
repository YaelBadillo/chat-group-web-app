import { FC } from 'react'

interface TextSuggestionLinkProps {
  children: string
}

export const TextSuggestionLink: FC<TextSuggestionLinkProps> = ({
  children,
}: TextSuggestionLinkProps) => {
  return (
    <span className="cursor-pointer text-button-primary hover:text-white">
      {children}
    </span>
  )
}
