import { MailIcon } from '@heroicons/react/solid';
import faceSunglasses from "../assets/images/face-sunglasses.png"

const End = (props) => (
    <footer className="container bg-white dark:bg-gray-900">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="font-bold text-4xl flex">
                Et si on travaillait ensemble ?
                <img className="w-12 ml-4" src={ faceSunglasses } alt="" />
            </h3>
            <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent shadow-sm text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Contactez-moi !
                <MailIcon className="ml-3 -mr-1 h-7 w-7" aria-hidden="true" />
            </a>
        </div>
        <div className="py-12 md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
            {props.social.map((item) => (
                <a key={item.name} href={item.href} className="text-white hover:text-gray-200">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
            ))}
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-white">&copy; 2021 Louis Delmas. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
);

export default End;