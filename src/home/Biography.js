import photoBiography from "../assets/images/2D1A1114-v2-min.JPG";
import wavingHand from "../assets/images/waving-hand.png";

const Biography = (props) => (
    <div className="bg-gradient-to-b from-white to-blue-300 dark:from-gray-900  dark:to-blue-900">
        <article className="container dark:text-white transition-all">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 lg:gap-16">

                <div className="flex flex-col">
                    <div className="mb-6 h-64 aspect-w-3 aspect-h-4">
                        <img className="object-cover shadow-lg rounded-lg" src={ photoBiography } alt="" />
                    </div>
                    
                    <div className="flex space-x-6 lg:order-2">
                        {props.social.map((item) => (
                        <a target="_blank" key={item.name} href={item.href} className="dark:text-gray-200 dark:hover:text-gray-100">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                        ))}
                    </div>
                </div>

                <div className="mb-8 lg:mb-0 lg:col-span-2 text-lg lg:text-xl">
                    <h3 className="flex flex-row items-center text-3xl lg:text-5xl font-bold tracking-tight mb-8">
                        { props.content.title }
                        <img className="animate-wave w-10 lg:w-12 ml-4" src={ wavingHand } alt="" />
                    </h3>
                    
                    { props.content.text.split("\/").map((item) => (
                        <p className="my-2">
                            { item }
                        </p>
                    )) }
                </div>
            </div>
        </article>
    </div>
);

export default Biography;