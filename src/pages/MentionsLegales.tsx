import type { ReactNode } from 'react';

function Bloc({ titre, children }: { titre: string; children: ReactNode }) {
  return (
    <section className="bg-white/70 rounded-[25px] p-6 md:p-8 shadow-sm">
      <h2 className="text-xl md:text-2xl text-[#4A2B20] mb-4">{titre}</h2>
      <div className="space-y-3 text-[#4A2B20] text-sm md:text-base leading-relaxed">{children}</div>
    </section>
  );
}

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-[#E0F7FA] py-16 md:py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl md:text-5xl text-[#4A2B20] text-center mb-4">Mentions légales</h1>
        <p className="bg-[#FFAAE6] text-[#4A2B20] rounded-full px-6 py-3 text-center text-sm md:text-base">
          Cami Donuts est une boutique fictive : ce site est un projet de démonstration réalisé pour un portfolio.
          Aucune vente n'est effectuée.
        </p>

        <Bloc titre="Éditrice du site">
          <p>
            Laetitia PENEL, développeuse web, entrepreneuse individuelle
            <br />
            SIRET : 106 228 166 00018
            <br />
            7 allée des Lilas, 62149 Givenchy-lès-la-Bassée, France
            <br />
            Email : <a href="mailto:contact@laetitiapenel.fr" className="underline">contact@laetitiapenel.fr</a>
            <br />
            Site : <a href="https://laetitiapenel.fr" className="underline">laetitiapenel.fr</a>
          </p>
          <p>Directrice de la publication : Laetitia PENEL</p>
        </Bloc>

        <Bloc titre="Hébergeur">
          <p>
            Vercel Inc.
            <br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
            <br />
            Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="underline">vercel.com</a>
          </p>
        </Bloc>

        <Bloc titre="Propriété intellectuelle">
          <p>
            Le code, la mise en page et les textes du site sont la propriété de Laetitia PENEL. Le nom « Cami Donuts »,
            les produits et les prix présentés sont fictifs.
          </p>
        </Bloc>

        <Bloc titre="Données personnelles (RGPD)">
          <p>
            Ce site ne collecte aucune donnée personnelle : il n'y a ni formulaire, ni compte client, ni paiement.
            Le panier fonctionne uniquement dans votre navigateur et disparaît quand vous fermez la page.
          </p>
          <p>
            Comme tout hébergeur, Vercel enregistre des journaux techniques (adresse IP, date, page consultée) nécessaires
            à la sécurité et au bon fonctionnement du site.
          </p>
          <p>
            Pour toute question, ou pour exercer vos droits (accès, rectification, effacement), écrivez à{' '}
            <a href="mailto:contact@laetitiapenel.fr" className="underline">contact@laetitiapenel.fr</a>. Vous pouvez
            aussi saisir la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="underline">www.cnil.fr</a>).
          </p>
        </Bloc>

        <Bloc titre="Cookies">
          <p>
            Aucun cookie n'est déposé et aucun outil de mesure d'audience n'est utilisé. Les polices d'écriture sont
            hébergées directement sur le site : aucune donnée n'est transmise à Google.
          </p>
        </Bloc>
      </div>
    </div>
  );
}
