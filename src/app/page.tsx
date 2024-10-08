import {
  ArrowRight,
  BookOpenText,
  Calendar,
  ExternalLink,
  LibraryBig,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="grid min-h-[calc(100svh-4rem)] place-items-center p-24">
      <div className="flex flex-col pb-[4rem]">
        <div className="mx-auto mb-12 max-w-2xl space-y-6 text-center">
          <h1 className="mb-2 text-5xl font-bold drop-shadow-lg">
            Shirobako Calendar
          </h1>
          <p className="text-xl drop-shadow">
            An interactive calendar for the chronology of{" "}
            <a
              className="inline-flex w-fit cursor-pointer items-center text-blue-500 transition-opacity hover:opacity-75"
              rel="noopener noreferrer"
              target="_blank"
              href="https://myanimelist.net/anime/25835/Shirobako/"
            >
              Shirobako
              <ExternalLink className="h-4" />
            </a>
            .
          </p>
        </div>
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <FeatureLink
            href="/about"
            title="About"
            description="About this website."
            Icon={BookOpenText}
          />
          <FeatureLink
            href="/calendar"
            title="Calendar"
            description="Check out the calendar!"
            Icon={Calendar}
          />
          <FeatureLink
            href="/calendar/general-timeframe"
            title="General Timeframe"
            description="Read up on the general timeframe Shirobako takes place in."
            Icon={LibraryBig}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureLink({
  href,
  title,
  description,
  Icon,
}: {
  href: string;
  title: string;
  description: string;
  Icon: typeof BookOpenText;
}) {
  return (
    <Link
      href={href}
      className="group overflow-hidden rounded-lg px-2 py-4 shadow-lg transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-900"
    >
      <Icon className="h-32 w-full p-2 text-gray-700 dark:text-gray-300" />
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
          <ArrowRight className="size-5" />
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
