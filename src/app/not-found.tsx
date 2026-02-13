import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-deep-space">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="text-8xl font-bold text-electric-green/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-pure-white mb-4">
          Page Not Found
        </h1>
        <p className="text-base text-cool-gray mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link href="/">
            <Button variant="primary" size="lg">
              Go Home
            </Button>
          </Link>
          <Link href="/demo">
            <Button variant="secondary" size="lg">
              Book a Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
