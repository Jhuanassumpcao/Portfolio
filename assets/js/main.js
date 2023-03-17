
function updateProfileInfo(profileData){
	const photo = document.getElementById('profile.photo')
	photo.src = profileData.photo
	photo.alt = profileData.name

	const name = document.getElementById('profile.name')
	name.innerText = profileData.name
	

	const job = document.getElementById('profile.job')
	job.innerText = profileData.job
	job.href = `${profileData.github}`

	const phone = document.getElementById('profile.phone')
	phone.innerText = profileData.phone
	phone.href = `tel:${profileData.phone}`

	const email = document.getElementById('profile.email')
	email.innerText = profileData.email
	email.href = `mailto:${profileData.email}`

	const location = document.getElementById('profile.location')
	location.innerText = profileData.location
}

function updateSoftSkill(profileData){
	const softSkills = document.getElementById('profile.skills.softSkills')
	softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
	
}

function updateHardSkill(profileData){
	const hardSkills = document.getElementById('profile.skills.hardSkills')
	hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
	
}

function updateLanguages(profileData){
	const languages = document.getElementById('profile.languages')
	languages.innerHTML = profileData.languages.map(languages => `<li>${languages}</li>`).join('')
	
}

function updateProjetos(profileData){
	const projetos = document.getElementById('profile.projetos')
	projetos.innerHTML = profileData.projetos.map(projetos => {
		return `
			<li>
				<h3 ${projetos.github ? 'class="github"' : ''}>${projetos.name}</h3>
				<a href="${projetos.url}" target="_blank">${projetos.url}</a>
			</li>
		`
	}).join('')
}

(async () => {

	const profileData = await fetchProfileData()
	updateProfileInfo(profileData)
	updateSoftSkill(profileData)
	updateHardSkill(profileData)
	updateLanguages(profileData)
	updateProjetos(profileData)

})()