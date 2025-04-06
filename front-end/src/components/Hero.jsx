import React from "react";

const Hero = () => {
  return (
    <section className="grid grid-cols-1 items-center md:grid-cols-2 px-8 md:px-10 lg:px-16 h-fit py-15 bg-gray-200">
      <div className="flex flex-col gap-4 w-full lg:pr-10 ">
        <h1 className="text-xl font-bold uppercase text-primary md:text-2xl lg:text-4xl">
          Gérez l'entretien de votre voiture avec facilité
        </h1>
        <p className="text-sm">
          Que vous soyez automobiliste ou mécanicien, gérez facilement
          l'entretien de votre véhicule. Planifiez vos rendez-vous ou trouvez un
          atelier près de chez vous, en quelques clics.
        </p>
        <button className="bg-transparent border-3 border-secondary w-fit py-3 px-6 rounded text-primary font-bold text-lg shadow-lg shadow-gray-500 cursor-pointer">
          Inscrivez-vous pour un suivi personnalisé
        </button>
      </div>
      <img
        src="./hero-car.webp"
        alt="herocar"
        loading="lazy"
        className="drop-shadow-xl"
      />
    </section>
  );
};

export default Hero;
