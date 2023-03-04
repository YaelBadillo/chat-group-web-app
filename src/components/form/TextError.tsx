import { FC } from 'react'

interface TextErrorProps {
  textError: string
}

export const TextError: FC<TextErrorProps> = ({
  textError,
}: TextErrorProps) => {
  return <span className="text-xs text-red-600">{`* ${textError}`}</span>
}
