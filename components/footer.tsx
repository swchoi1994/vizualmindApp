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
          <Link href="" target="_blank">
            <SiDiscord size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link href="https://www.linkedin.com/in/swchoi1994/" target="_blank">
            <SiLinkedin size={18} />
          </Link>
        </Button>
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50"
        >
          <Link
            href="https://www.youtube.com/channel/UCy5eShgViF69uDf7XdxmA3g"
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
          <Link href="https://www.tiktok.com/@swchoi94?lang=en" target="_blank">
            <SiTiktok size={18} />
          </Link>
        </Button>
      </div>
    </footer>
  )
}

export default Footer
