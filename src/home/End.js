import { MailIcon } from '@heroicons/react/solid';
import faceSunglasses from "../assets/images/face-sunglasses.png"

const End = (props) => (
    <footer className="container z-10 bg-white dark:bg-gray-900">
        <div className="flex flex-col lg:flex-row justify-between items-center">
            <h3 className="font-bold text-xl lg:text-4xl flex items-center">
                { props.content.title }
                <img className="w-7 h-min lg:w-12 ml-2 lg:ml-4" src={ faceSunglasses } alt="" />
            </h3>
            <a
                href="mailto:louis.delmas@outlook.com"
                className="inline-flex items-center mt-5 lg:mt-0 px-4 py-2 lg:px-6 lg:py-3 border border-transparent shadow-sm text-lg lg:text-xl font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                { props.content.contact }
                <MailIcon className="ml-3 -mr-1 h-7 w-7" aria-hidden="true" />
            </a>
        </div>
        <div className="py-12 lg:flex lg:items-center lg:justify-between">
            <div className="flex justify-center space-x-6 lg:order-2">
            {props.social.map((item) => (
                <a target="_blank" key={item.name} href={item.href} className="dark:text-white hover:text-gray-200">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
            ))}
            </div>
            <div className="mt-8 lg:mt-0 lg:order-1">
            <p className="text-center text-base dark:text-white">&copy; { props.content.copyright }</p>
            </div>
        </div>
    </footer>
);

export default End;