import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChartIcon, CheckIcon, DatabaseIcon, ProgressIcon } from "./icons";

export const SectionTest = () => {
	const location = useLocation();

	return (location.pathname != "/login" && location.pathname != "/signup") && (
		<section className=" text-white">
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
				<div className="mx-auto max-w-lg text-center">
					<h2 className="text-3xl font-bold sm:text-4xl">Optimiza Tu Entrenamiento y Lleva un Control Total de tu Progreso</h2>

					<p className="mt-4 text-gray-300">
						Descubre herramientas diseñadas para ayudarte a alcanzar tus metas fitness, con planes personalizados, seguimiento detallado y una comunidad que te respalda.
					</p>
				</div>

				<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
					<div
						className="bg-neutral-900  block rounded-xl border border-emerald-700/50 p-8 shadow-xl transition hover:border-emerald-500 hover:shadow-emerald-500/10"
						href="#"
					>
						<ProgressIcon />
						<h2 className="mt-4 text-xl font-bold text-white">Registra tu Progreso</h2>

						<p className="mt-1 text-sm text-gray-300">
							Lleva un registro de tus entrenamientos y ejercicios diarios. Monitorea tu progreso a lo largo del tiempo y observa cuánto has avanzado en tu viaje de fitness.
						</p>
					</div>

					<div
						className="bg-neutral-900  block rounded-xl border border-emerald-700/50 p-8 shadow-xl transition hover:border-emerald-500 hover:shadow-emerald-500/10"
						href="#"
					>
						<DatabaseIcon />

						<h2 className="mt-4 text-xl font-bold text-white">Base de Datos de Ejercicios</h2>

						<p className="mt-1 text-sm text-gray-300">
							Explora una base de datos completa de ejercicios, cada uno con instrucciones detalladas y consejos. Encuentra los ejercicios perfectos para tu rutina.
						</p>
					</div>

					<div
						className="bg-neutral-900  block rounded-xl border border-emerald-700/50 p-8 shadow-xl transition hover:border-emerald-500 hover:shadow-emerald-500/10"
						href="#"
					>
						<CheckIcon />
						<h2 className="mt-4 text-xl font-bold text-white">Marca Ejercicios como Completados</h2>

						<p className="mt-1 text-sm text-gray-300">
							Mantén la motivación al marcar los ejercicios como 'hecho' cada día. Visualiza tu progreso y mantente en el camino hacia tus metas de fitness.
						</p>
					</div>

					<div
						className="bg-neutral-900  block rounded-xl border border-emerald-700/50 p-8 shadow-xl transition hover:border-emerald-500 hover:shadow-emerald-500/10"
						href="#"
					>
						<ChartIcon  />

						<h2 className="mt-4 text-xl font-bold text-white">Historial de estado físico</h2>

						<p className="mt-1 text-sm text-gray-300">
							Consulta tu historial de tu estado físico para analizar tus avances y ajustar tus rutinas según sea necesario.
						</p>
					</div>

				</div>

				<div className="mt-12 text-center">
					<Link
						to="/routine"
						className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-500 focus:outline-none focus:ring focus:ring-emerald-400"
					>
						Comenzar ahora!
					</Link>
				</div>
			</div>
		</section>
	);
}


