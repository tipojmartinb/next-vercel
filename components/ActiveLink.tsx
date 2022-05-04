import { useRouter } from 'next/router';
import Link from 'next/link'
import { CSSProperties, FC } from 'react';

const style: CSSProperties ={
    color:'#0070f3',
    textDecoration:'underline',
}

interface Props{
    text:string;
    href:string;
}

export const ActiveLink:FC<Props> = (props) => {
    const router = useRouter()
    const {asPath} = router;
    const {text,href}=props
    return (
    <Link href={href}>
        <a style={asPath ===href ? style:undefined}>{text}</a>
    </Link>
    )
}
