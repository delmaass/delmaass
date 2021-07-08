import photoBiography from "../assets/images/2D1A1114-v2-min.JPG";
import wavingHand from "../assets/images/waving-hand.png";

const Biography = (props) => (
    <div className="bg-gradient-to-b from-white to-blue-300 dark:from-gray-900  dark:to-blue-900">
        <article className="container dark:text-white transition-all">
            <div className="flex flex-col-reverse md:grid md:grid-cols-3 md:gap-16">

                <div className="flex flex-col-reverse md:flex-col">
                    <div className="mb-6 h-64 aspect-w-3 aspect-h-4">
                        <img className="object-cover shadow-lg rounded-lg" src={ photoBiography } alt="" />
                    </div>
                    
                    <div className="flex space-x-6 md:order-2">
                        {props.social.map((item) => (
                        <a key={item.name} href={item.href} className="dark:text-gray-200 dark:hover:text-gray-100">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-2 text-lg md:text-xl">
                    <h3 className="flex flex-row items-center text-2xl md:text-5xl font-bold tracking-tight mb-8">
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
                    <p className="my-2">
                        Dans le cadre de mes études, j'ai eu l'opportunité de travailler auprès de différents clients dont <b>Air Liquide</b> et le <b>CHU de Nice</b> dans la réalisation d'applications innovantes.
                    </p>
                    <p className="my-2">
                        Je réalise également depuis plus d'un an des commandes auprès d'entreprises ou de particuliers.
                    </p>
                    <p className="my-2">
                        Vous pouvez retrouvez quelques-uns de mes derniers travaux sur cette page. Bonne visite, et au plaisir d'échanger sur n'importe lequel de vos projets !
                    </p>
                </div>
            </div>
        </article>
    </div>
);

export default Biography;