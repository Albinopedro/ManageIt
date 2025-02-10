import ApplicationLogo from '@/Components/ApplicationLogo';
import { Head, Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-200 text-gray-800 dark:bg-gray-300 dark:text-gray-700"
            >
                <div className="flex shrink-0 items-center p-4 sm:p-6">
                    <Link href="/">
                        <ApplicationLogo className="h-12 w-12 sm:h-16 sm:w-16" />
                    </Link>
                </div>

                {/* Navbar */}
                <motion.nav
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-12 md:py-6"
                >
                    <h1 className="text-xl font-bold sm:text-2xl">ManageIt</h1>
                    <div className="-mx-3 flex flex-1 justify-end space-x-2 sm:space-x-4">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="rounded-md bg-blue-500 px-3 py-2 text-white transition hover:bg-blue-600 sm:px-4 sm:py-2"
                            >
                                Acessar Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="rounded-md bg-gray-500 px-3 py-2 text-white transition hover:bg-gray-600 sm:px-4 sm:py-2"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="rounded-md bg-green-500 px-3 py-2 text-white transition hover:bg-green-600 sm:px-4 sm:py-2"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </motion.nav>

                {/* Introdução */}
                <motion.main
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="flex flex-col items-center px-4 py-8 text-center sm:px-6 sm:py-12 md:px-12 md:py-24"
                >
                    <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl">
                        Gerencie seus funcionários com facilidade
                    </h2>
                    <p className="max-w-xl text-base text-gray-600 sm:max-w-2xl sm:text-lg dark:text-gray-500">
                        O ManageIt permite que você gerencie sua equipe de forma
                        simples e eficiente. Adicione, edite e organize seus
                        funcionários rapidamente com nosso painel interativo.
                    </p>

                    {!auth.user && (
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="mt-4 sm:mt-6 md:mt-12"
                        >
                            <Link
                                href={route('register')}
                                className="rounded-lg bg-blue-500 px-5 py-2 text-white shadow-md transition hover:bg-blue-600 sm:px-6 sm:py-3"
                            >
                                Comece Agora
                            </Link>
                        </motion.div>
                    )}
                </motion.main>

                {/* Footer */}
                <motion.footer
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    className="mb-4 text-center text-xs text-gray-600 sm:mb-6 sm:text-sm dark:text-gray-500"
                    style={{ position: 'absolute', bottom: 0, width: '100%' }}
                >
                    Laravel v{laravelVersion} (PHP v{phpVersion})
                </motion.footer>
            </motion.div>
        </>
    );
}
