import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4"><span className="gold-rule" />Page not found</div>
        <h1 className="font-display text-6xl text-primary">404</h1>
        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Return home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-primary">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Something went wrong on our end.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-primary">Try again</button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oxford Venture Inc. — Premium Academic Mentorship & University Pathways" },
      { name: "description", content: "Personalized academic mentorship, university pathway planning, tutoring, and STEAM programs for ambitious students. Trusted by families across Canada, the U.S., and the U.K." },
      { property: "og:title", content: "Oxford Venture Inc. — Premium Academic Mentorship & University Pathways" },
      { property: "og:description", content: "Personalized academic mentorship, university pathway planning, tutoring, and STEAM programs for ambitious students. Trusted by families across Canada, the U.S., and the U.K." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Oxford Venture Inc. — Premium Academic Mentorship & University Pathways" },
      { name: "twitter:description", content: "Personalized academic mentorship, university pathway planning, tutoring, and STEAM programs for ambitious students. Trusted by families across Canada, the U.S., and the U.K." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/bCCMipaZMMgU3uzBQ48gKBgft2r2/social-images/social-1779586197980-Screenshot_316.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/bCCMipaZMMgU3uzBQ48gKBgft2r2/social-images/social-1779586197980-Screenshot_316.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
