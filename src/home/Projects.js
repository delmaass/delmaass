import { InboxIcon, SparklesIcon } from '@heroicons/react/outline';

import divingSimulator from "../assets/images/projects/diving-simulator/dashboard.png";
import lthFirstPage from "../assets/images/projects/lth/first-page.png";
import logoMines from "../assets/images/logo-mines.jpeg";
import penseesWritePage from "../assets/images/projects/pensees/write-page.PNG";

const Projects = () => (
    <div className="relative pt-16 pb-32 overflow-hidden bg-gradient-to-b dark:from-blue-900 dark:via-purple-900 dark:to-gray-900">
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="-m-2 flex flex-wrap space-xr-3">
                <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                  Full-stack
                </span>
                <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                  React
                </span>
                <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                  Bootstrap
                </span>
                <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                  Express
                </span>
                <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                  Socket.IO
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight dark:text-blue-100">
                  Interface de contrôle d'un simulateur de plongée
                </h2>
                <p className="mt-4 text-xl dark:text-white">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                  porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                  viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    En savoir plus
                  </a>

                    {/* Add Github link */}
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                        <div>
                            <p className="text-base dark:text-white">
                                &ldquo;Bravo à Marguerite, Louis, François et Anatole, élèves ingénieurs, qui ont conçu et développé un
                                prototype de simulateur de plongée en réalité virtuelle. Un projet qui s'articule autour des bénéfices
                                de la plongée sous-marine pour traiter le stress post traumatique. @CHUdeNice&rdquo;
                            </p>
                        </div>
                        <footer className="mt-3">
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0">
                                <img
                                    className="h-6 w-6 rounded-full"
                                    src={ logoMines }
                                    alt=""
                                />
                                </div>
                                <div className="text-base font-medium text-blue-100">MINES ParisTech</div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={ divingSimulator }
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-24 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
                <div className="-m-2 flex flex-wrap space-xr-3">
                    <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                    Frontend
                    </span>
                    <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                    React
                    </span>
                    <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                    Tailwind
                    </span>
                </div>
              <div className="my-6">
                <h2 className="text-3xl font-bold tracking-tight dark:text-blue-100">
                  Refonte du site vitrine de LTH - ATC
                </h2>
                <p className="mt-4 text-xl dark:text-white">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                  porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                  viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    En savoir plus
                  </a>

                    {/* Add Github link */}
                </div>
              </div>
            </div>
            
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={ lthFirstPage }
                alt="Inbox user interface"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div className="-m-2 flex flex-wrap space-xr-3">
                <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                  Full-stack
                </span>
                <span className="m-2 px-4 py-2 rounded-md flex items-center justify-center font-bold uppercase dark:bg-blue-100 dark:text-blue-900">
                  PHP
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-bold tracking-tight dark:text-blue-100">
                  Pensées, première plateforme d'écriture en France
                </h2>
                <p className="mt-4 text-xl dark:text-white">
                  Semper curabitur ullamcorper posuere nunc sed. Ornare iaculis bibendum malesuada faucibus lacinia
                  porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus
                  viverra dui tellus ornare pharetra.
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                  >
                    En savoir plus
                  </a>

                    {/* Add Github link */}
                </div>
                <div className="mt-8 border-t border-gray-200 pt-6">
                    <blockquote>
                        <div>
                            <p className="text-base dark:text-white">
                                &ldquo;Je vous remercie car, en tant qu'écrivain débutant, le fait d'avoir un espace d'expression simple
                                et accessible à tous est une félicité. Aussi, les trois thèmes proposés par semaine m'encouragent à
                                écrire sur différents sujets sans avoir de préparation, ce qui est certainement un bon exercice.&rdquo;
                            </p>
                        </div>
                        <footer className="mt-3">
                            <div className="flex items-center space-x-3">
                                <div className="text-base font-medium text-blue-100">P.Dubois, utilisateur de Pensées</div>
                            </div>
                        </footer>
                    </blockquote>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={ penseesWritePage }
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
);

export default Projects;