import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isAuthenticated = !!user?.id;
  const path = req.nextUrl.pathname;

  console.log(
    "Middleware running. Authenticated:",
    isAuthenticated,
    "Path:",
    path
  );

  // 🔒 Redirect users trying to access protected routes without logging in
  const protectedRoutes = ["/dashboard", "/nannies"];
  if (
    !isAuthenticated &&
    protectedRoutes.some((route) => path.startsWith(route))
  ) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 🚫 Prevent logged-in users from accessing login/register pages
  if (
    isAuthenticated &&
    (path.startsWith("/login") || path.startsWith("/register"))
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return res;
}

// 🛡️ Apply middleware to relevant routes
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/nannies/:path*",
    "/login",
    "/register/:path*",
  ],
};
