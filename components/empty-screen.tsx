import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const exampleMessages = [
  {
    heading: "What's new with Qualcomm ARM chips?",
    message: "What's new with Qualcomm ARM chips?"
  },
  {
    heading: 'Tell me about the latest iPhone',
    message: 'Tell me about the latest iPhone'
  },
  {
    heading: 'What is happening right now in California?',
    message: 'What is happening right now in California?'
  },
  {
    heading: 'How did Elon Musk become so successful?',
    message: 'How did Elon Musk become so successful?'
  },
  {
    heading: 'iOS vs Android',
    message: 'iOS vs Android'
  }
]
export function EmptyScreen({
  submitMessage,
  className
}: {
  submitMessage: (message: string) => void
  className?: string
}) {
  return (
    <div className={`mx-auto w-full transition-all ${className}`}>
      <div className="bg-background p-2">
        <div className="mt-4 flex flex-col items-start space-y-2 mb-4">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              name={message.message}
              onClick={async () => {
                submitMessage(message.message)
              }}
            >
              <ArrowRight size={16} className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
