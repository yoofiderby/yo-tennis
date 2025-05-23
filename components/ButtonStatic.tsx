import Link from 'next/link'

interface ButtonStaticProps {
 buttonText: string
 buttonUrl: string
}

const ButtonStatic = ({ buttonText, buttonUrl }: ButtonStaticProps) => {
 return (
  <Link href={buttonUrl}>
   <button className="py-4 px-7 font-semibold text-sm leading-5 font-sans rounded-l-lg rounded-tr-3xl rounded-br-lg uppercase hover:bg-orange-600 hover:text-white bg-white text-foundation-midnight-blue">
    {buttonText}
   </button>
  </Link>
 )
}

export default ButtonStatic
