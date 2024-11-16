import Link from "next/link";
import { Button } from "@/components/ui/button";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl mb-8">Oops! The page you are looking for does not exist.</p>
      <Link href="/" passHref>
        <Button>
          Return to Home
        </Button>
      </Link>
    </div>
  )
}

export default NotFoundPage;