import React from 'react'
import Link from 'next/link'

interface LikSidebarProps {
    href: string;
    Icon: React.ElementType;
    texto: string;
}

export const LinkSidebar: React.FC<LikSidebarProps> = ({href,Icon,texto}) => {
  return (
    <Link href={href} className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all">
        <Icon size={30}/>
        <span className="ml-3 text-xl">{texto}</span>
    </Link>
  )
}
