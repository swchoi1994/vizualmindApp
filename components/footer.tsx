import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiYoutube, SiLinkedin, SiTiktok } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://discord.gg/gMxa7ezt4X" target="_blank">
            <SiDiscord size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link
            href="https://www.linkedin.com/company/vizualmind/"
            target="_blank"
          >
            <SiLinkedin size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link
            href="https://www.youtube.com/watch?v=CBYhVcO4WgI&list=PL11qn6zM2Y3bMZdChxEqHKaCaKUjwItGL"
            target="_blank"
          >
            <SiYoutube size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.tiktok.com/" target="_blank">
            <SiTiktok size={18} />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
