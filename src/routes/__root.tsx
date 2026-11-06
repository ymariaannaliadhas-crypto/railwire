import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

import appCss from "../styles.css?url";
import { reportAppError } from "../lib/error-reporting";
// 1. ADDED THE HEADER IMPORT HERE
import { Header } from "../components/railwire/Header";
import { Footer } from "../components/railwire/Sections";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">
          {t("common.notFound.title", { defaultValue: "404" })}
        </h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t("common.notFound.subtitle", { defaultValue: "Page not found" })}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("common.notFound.desc", {
            defaultValue: "The page you're looking for doesn't exist or has been moved.",
          })}
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("common.notFound.goHome", { defaultValue: "Go home" })}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const { t } = useTranslation();
  console.error(error);
  const router = useRouter();

  useEffect(() => {
    reportAppError(error, {
      boundary: "tanstack_root_error_component",
    });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("common.error.title", { defaultValue: "This page didn't load" })}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("common.error.desc", {
            defaultValue:
              "Something went wrong on our end. You can try refreshing or head back home.",
          })}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("common.error.tryAgain", { defaultValue: "Try again" })}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("common.error.goHome", { defaultValue: "Go home" })}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RailWire Broadband" },
      {
        name: "description",
        content: "RailWire fiber broadband by RailTel Corporation of India.",
      },
      { property: "og:title", content: "RailWire Broadband" },
      {
        property: "og:description",
        content: "RailWire fiber broadband by RailTel Corporation of India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Roboto:wght@400;500;700&display=swap",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang={i18n.language.startsWith("hi") ? "hi" : "en"}>
      <head>
        <HeadContent />
      </head>
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
      {/* 2. THE HEADER IS RENDERED HERE FOR ALL PAGES */}
      <Header />

      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
