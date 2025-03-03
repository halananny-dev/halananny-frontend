"use client";

import { getStaticData } from "@/service/static";
import { getUser } from "@/service/user";
import { createContext, useContext, useEffect, useState } from "react";
const AppContext = createContext<any>(null);

export function AppContextProvider({ children }: { children: React.ReactNode; }) {
	const [countries, setCountries] = useState<any>([])
	const [experienceWithKids, setExperienceWithKids] = useState<any>([])
	const [capabilities, setCapabilities] = useState<any>([])
	const [cities, setCities] = useState<any>([])
	const [user, setUser] = useState<any>(null)
	const [userId, setUserId] = useState<any>("9e856b13-5086-446f-87fa-6f0717a1e424")

	useEffect(() => {
		const init = async () => {
			const countries = await getStaticData('countries')
			setCountries(countries)

			const experience = await getStaticData('experience_with_kids')
			setExperienceWithKids(experience)

			const capabilities = await getStaticData('capabilities')
			setCapabilities(capabilities)

			const cities = await getStaticData('cities')
			setCities(cities)

			const user = await getUser()
			setUser(user)
		}

		init()
	}, []);

	return (
		<AppContext.Provider value={{
			countries,
			setCountries,
			experienceWithKids,
			setExperienceWithKids,
			capabilities,
			setCapabilities,
			cities,
			setCities,
			user,
			userId,
			setUserId
		}}>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	return useContext(AppContext);
}
