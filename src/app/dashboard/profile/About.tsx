"use client"

import Btn from "@/components/sections/Button";
import Loader from "@/components/sections/Loader";
import { useAppContext } from "@/i18/AppContext";
import { useI18n } from "@/i18/i18Context";
import { updateUser } from "@/service/user";
import { useState } from "react";
import Title from "./Title";

export default function About({ editable }) {
	const { user, setUser } = useAppContext()
	const { t } = useI18n()
	const [isEditing, setIsEditing] = useState(false)
	const [loading, setLoading] = useState(false)
	const [about, setAbout] = useState(user.about)

	const handleSave = async () => {
		setLoading(true)

		const newUser = await updateUser({ about }, user.id)

		setUser(newUser)
		setLoading(false)
		setIsEditing(false)
	}

	return (
		<>
			<Title
				editable={editable}
				className="m-0"
				onEdit={() => setIsEditing(true)}
				title={t.profile.about_me}
			/>
			<div className="mt-2.5 card px-6 text-sm">
				{isEditing ? <><textarea
					className="textarea"
					onChange={e => setAbout(e.target.value)}
					defaultValue={user.about}
					placeholder={t.profile.about_me} />
					<Btn
						type="submit"
						className="mt-6"
						onClick={handleSave}
						disabled={loading}
						variant="primary"
						size="lg"
					>
						{t.dashboard.save}
						{loading && <Loader className="ltr:ml-2 rtl:mr-2" />}
					</Btn>
				</>
					: user.about ?
						user.about?.length > 470 ? <>
							{user.about.slice(0, 470)}
							<button className="font-semibold">{t.profile.Plus}</button>
						</> :
							user.about :
						<p>{t['Nothing provided yet']}</p>}
			</div>
		</>)
}