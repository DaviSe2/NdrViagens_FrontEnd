import React from "react"
import { Suspense, lazy } from "react"

const Slider = lazy(() => import('./home_components/Slider'));
const Promocoes = lazy(() => import('./home_components/Promocoes'));
const Destinos = lazy(() => import('./home_components/Destinos'));
const Roteiros = lazy(() => import('./home_components/Roteiros'));
const GaleriaRoteiros = lazy(() => import('./home_components/GaleriaRoteiros'));
const Novidades = lazy(() => import('./home_components/Novidades'));
const Contato = lazy(() => import('./home_components/Contato'));


export default function Home() {

    return (
        <>
            <main>
                <div className="container-fluid">
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Slider />
                    </Suspense>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Promocoes />
                    </Suspense>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Destinos />
                    </Suspense>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Roteiros />
                    </Suspense>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <GaleriaRoteiros />
                    </Suspense>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Novidades />
                    </Suspense>
                    <Suspense fallback={<p>Carregando...</p>}>
                        <Contato />
                    </Suspense>
                </div>
            </main>
        </>

    )
}

