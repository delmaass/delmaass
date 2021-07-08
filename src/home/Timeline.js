import { CheckIcon, ThumbUpIcon, UserIcon } from '@heroicons/react/solid';

import wavingHand from "../assets/images/waving-hand.png";

const timeline = [
    {
        id: 1,
        content: 'Applied to',
        target: 'Front End Developer',
        href: '#',
        date: 'Sep 20',
        datetime: '2020-09-20',
        icon: UserIcon,
        iconBackground: 'bg-gray-400',
    },
    {
        id: 2,
        content: 'Advanced to phone screening by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 22',
        datetime: '2020-09-22',
        icon: ThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 3,
        content: 'Completed phone screening with',
        target: 'Martha Gardner',
        href: '#',
        date: 'Sep 28',
        datetime: '2020-09-28',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
    {
        id: 4,
        content: 'Advanced to interview by',
        target: 'Bethany Blake',
        href: '#',
        date: 'Sep 30',
        datetime: '2020-09-30',
        icon: ThumbUpIcon,
        iconBackground: 'bg-blue-500',
    },
    {
        id: 5,
        content: 'Completed interview with',
        target: 'Katherine Snyder',
        href: '#',
        date: 'Oct 4',
        datetime: '2020-10-04',
        icon: CheckIcon,
        iconBackground: 'bg-green-500',
    },
]
  
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Timeline = () => (
    <div className="dark:bg-blue-900">
        <section className="container dark:text-white transition-all py-40">
            <div className="flex flex-col-reverse md:grid md:grid-cols-3 md:gap-16">
                <div className="md:col-span-2 text-xl md:text-2xl">
                    <h3 className="flex flex-row items-center text-3xl md:text-6xl font-bold tracking-tight mb-8">
                        Hi there!
                        <img className="animate-wave w-12 ml-4" src={ wavingHand } alt="" />
                    </h3>
                    
                    <p className="my-2">
                        Moi, c'est Louis ! J'ai un peu moins de 20 ans à l'heure où j'écris ces lignes.
                    </p>
                    <p className="my-2">
                        J'étudie actuellement à l'école des <b>Mines de Paris</b>, en deuxième année du cursus Ingénieur Civil.
                    </p>
                    <p className="my-2">
                        J'affectionne particulièrement l'écriture, et je me suis plu ces dernières années à développer des outils permettant aux gens de s'exprimer librement.
                    </p>
                    <p className="my-2">
                        C'est ainsi que <b>Pensées</b> vu le jour il y a un peu plus de deux ans. Je travaille actuellement sur une grande refonte de l'application, nom de code Harmonie. Un autre projet en lien avec l'écriture va aussi voir le jour d'ici la fin d'année.
                    </p>
                    {/* <p className="my-2">
                        La nature, c'est mon autre terrain de jeu. Le Sud de la France inspire mes choix et mes actions au quotidien par le prisme de ces paysages somptueux.
                    </p> */}
                    <p className="my-2">
                        Dans le cadre de mes études, j'ai eu l'opportunité de travailler auprès de différents clients dont <b>Air Liquide</b> et le <b>CHU de Nice</b> dans la réalisation d'applications innovantes.
                    </p>
                    <p className="my-2">
                        Je réalise également depuis plus d'un an des commandes auprès d'entreprises ou de particuliers.
                    </p>
                    <p className="my-2">
                        Vous pouvez retrouvez mes derniers travaux en scrollant vers le bas. Bonne visite, et au plaisir d'échanger !
                    </p>
                </div>
                
                <div className="flow-root">
                    <ul className="-mb-8">
                        {timeline.map((event, eventIdx) => (
                        <li key={event.id}>
                            <div className="relative pb-8">
                            {eventIdx !== timeline.length - 1 ? (
                                <span className="absolute top-6 left-6 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                            ) : null}
                            <div className="relative flex space-x-3">
                                <div>
                                <span
                                    className={classNames(
                                    event.iconBackground,
                                    'h-12 w-12 rounded-full flex items-center justify-center ring-4 ring-white'
                                    )}
                                >
                                    <event.icon className="h-7 w-7 text-white" aria-hidden="true" />
                                </span>
                                </div>
                                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                                <div>
                                    <p className="text-xl dark:text-white">
                                    {event.content}{' '}
                                    <a href={event.href} className="font-medium dark:text-blue-200">
                                        {event.target}
                                    </a>
                                    </p>
                                </div>
                                <div className="text-right text-sm whitespace-nowrap dark:text-blue-200">
                                    <time dateTime={event.datetime}>{event.date}</time>
                                </div>
                                </div>
                            </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    </div>
);

export default Timeline;