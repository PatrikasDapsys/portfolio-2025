const EMAIL_POPUP_CLASS = 'fa-solid fa-at'
const EMAIL_POPUP_LINK = 'mailto:me@patrikasdapsys.com'
const EMAIL_POPUP_TEXT = 'me@patrikasdapsys.com'

const GITHUB_POPUP_CLASS = 'fa-brands fa-github'
const GITHUB_POPUP_LINK = 'https://github.com/PatrikasDapsys/'
const GITHUB_POPUP_TEXT = 'GitHub Profile'

const LINKEDIN_POPUP_CLASS = 'fa-brands fa-linkedin'
const LINKEDIN_POPUP_LINK = 'https://www.linkedin.com/in/patrikas-dapsys/'
const LINKEDIN_POPUP_TEXT = 'LinkedIn Profile'

const RESUME_POPUP_CLASS = 'fa-regular fa-file-lines'
const RESUME_POPUP_LINK = ''
const RESUME_POPUP_TEXT = 'Resume (Outdated)'

const popupData = [
  {
    iconClass: EMAIL_POPUP_CLASS,
    link: EMAIL_POPUP_LINK,
    hoverText: EMAIL_POPUP_TEXT,
  },
  {
    iconClass: GITHUB_POPUP_CLASS,
    link: GITHUB_POPUP_LINK,
    hoverText: GITHUB_POPUP_TEXT,
  },
  {
    iconClass: LINKEDIN_POPUP_CLASS,
    link: LINKEDIN_POPUP_LINK,
    hoverText: LINKEDIN_POPUP_TEXT,
  },
  {
    iconClass: RESUME_POPUP_CLASS,
    link: RESUME_POPUP_LINK,
    hoverText: RESUME_POPUP_TEXT,
  },
]

export default popupData
