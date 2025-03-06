"use client";

import { supabase } from "@/lib/supabase";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const code = searchParams.get("code");


	useEffect(() => {
		const handleAuth = async () => {
			const { data: { session } } = await supabase.auth.getSession()

			if (!session?.user) {
				router.replace("/login");
				return;
			}

			const { data: user, error } = await supabase
				.from("users")
				.select("*")
				.eq("email", session.user.email)
				.single();

			if (!user || error) {
				await supabase.auth.signOut()

				router.push(`/register`);
			} else {
				router.push("/login");
			}
		};

		if (code) {
			handleAuth();
		}
	}, [code, router]);

	return <></>;
}
