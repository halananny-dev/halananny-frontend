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

  const path = req.nextUrl.pathname;

  const protectedRoutes = ["/dashboard", "/nannies"];
  if (!user?.id && protectedRoutes.some((route) => path.startsWith(route))) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (user?.id) {
    const { data: userData } = await supabase
      .from("users")
      .select("*")
      .eq("email", user.email)
      .single();

    if (path === "/dashboard") {
      if (userData?.role === "user") {
        return NextResponse.redirect(new URL("/dashboard/nannies", req.url));
      } else {
        return NextResponse.redirect(new URL("/dashboard/profile", req.url));
      }
    }

    if (path.startsWith("/login") || path.startsWith("/register")) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  return res;
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/nannies/:path*",
    "/login",
    "/register/:path*",
  ],
};
