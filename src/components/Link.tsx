import NextLink from 'next/link';

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children}: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <p className='text-blue-600 hover:underline underline-offset-2'>{children}</p>
    </NextLink>
  )
}

export default Link