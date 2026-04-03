import { OutsideLink } from './utils/buttons'

// icons
import { SiGithub as GitHubLogo } from 'react-icons/si'
import { FaLinkedinIn as LinkedLogo } from 'react-icons/fa'
import { IoIosMail as MailLogo } from 'react-icons/io'

export default function Footer() {
  return (
    <div className="bg-footer w-full text-white bg-black py-10">
      <div className="w-fit mx-auto flex flex-col gap-4">
        <div className="h-fit"></div>
        <div className="flex gap-10">
          <OutsideLink link="https://www.github.com/pdxgrantc">
            <GitHubLogo className="h-16 w-auto py-2 mx--auto text-button hover:text-button_hover" />
          </OutsideLink>
          <OutsideLink link="mailto:pdxgrantc@gmail.com">
            <MailLogo className="h-16 py-0 w-auto text-button hover:text-button_hover" />
          </OutsideLink>
          <OutsideLink link="https://www.linkedin.com/in/pdxgrantc">
            <LinkedLogo className="h-14 w-auto text-button hover:text-button_hover" />
          </OutsideLink>
        </div>
        <div className="mx-auto w-fit">
          <p className="w-fit">Grant Conklin</p>
        </div>
      </div>
    </div>
  )
}
