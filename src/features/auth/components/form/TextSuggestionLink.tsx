import { FC } from 'react'

import { Link } from 'react-router-dom'

interface TextSuggestionLinkProps {
  to: string
  children: string
}

export const TextSuggestionLink: FC<TextSuggestionLinkProps> = ({
  to,
  children,
}: TextSuggestionLinkProps) => {
  return (
    <span className="cursor-pointer text-button-primary hover:text-white">
      <Link to={to}>{children}</Link>
    </span>
  )
}
