const LinksSocialMedia = {
  github: 'Biurilex',
  youtube: 'davi',
  facebook: 'davi ferreira',
  instagram: 'Jakeliny.gracielly',
  twitter: 'davi20555539'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    // const social = li.getAtTribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = 'https://api.github.com/users/Biurilex'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      user.textContent = user.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}
