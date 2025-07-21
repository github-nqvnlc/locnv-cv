import { FullScreen } from "@/components/full-screen"
import { ExperienceTimeline } from "./containers/experience-timeline"

export const metadata = {
  title: "Experience | Kinh Dev",
  description:
    "Explore the professional journey of Kinh Dev - frontend developer with experience in modern JavaScript frameworks.",
  openGraph: {
    title: "Experience | Kinh Dev",
    description:
      "Frontend Developer with hands-on experience in React, Next.js, and modern UI/UX design.",
    url: "https://kinhdev.id.vn/experience",
    siteName: "Kinh Dev",
    images: [
      // {
      //   url: "https://kinhdev.id.vn/images/seo/experience-og-image.png",
      //   width: 1200,
      //   height: 630,
      //   alt: "Kinh Dev Experience Page",
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Kinh Dev",
    description:
      "Check out Kinh Dev's past work and achievements in frontend development.",
    //   images: ["https://kinhdev.id.vn/images/seo/experience-og-image.png"],
  },
  alternates: {
    canonical: "https://kinhdev.id.vn/experience",
  },
}

export default function Page() {
  return (
    <div>
      <FullScreen>
        <ExperienceTimeline />
      </FullScreen>
    </div>
  )
}
