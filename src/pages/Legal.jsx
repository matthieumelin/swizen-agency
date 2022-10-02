import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

import styled from "styled-components";
import Colors from "../utils/Colors";

export default function Legal() {
  return (
    <StyledLegal>
      <Header />
      <Main>
        <Paragraph>
          <ParagraphTitle>Présentation du site</ParagraphTitle>
          <ParagraphDescription>
            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l’économie numérique, les différents intervenants
            du site dans le cadre de sa réalisation et de son suivi :
          </ParagraphDescription>
          <ParagraphList>
            <ParagraphListItem>
              <ParagraphStrong>Propriétaire : </ParagraphStrong>
              Swizen - 89191850000010, EURL auteur au capital de €. Le
              propriétaire du site internet est joignable à cette adresse :
              m.melin@swizen.fr
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>Adresse : </ParagraphStrong>
              128 Avenue Alfred Maes, 62300 Lens
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>Responsable publication : </ParagraphStrong>
              Matthieu Melin - m.melin@swizen.fr
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>Hébergeur : </ParagraphStrong>
              PrivateHeberg situé au 1 rue des coquarts 92220 Bagneux France
            </ParagraphListItem>
          </ParagraphList>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Conditions d'utilisation</ParagraphTitle>
          <ParagraphDescription>
            L’utilisation du site implique l’acceptation pleine et entière des
            conditions générales d’utilisation ci-après décrites. Ces conditions
            d’utilisation sont susceptibles d’être modifiées ou complétées à
            tout moment, les utilisateurs du site sont donc invités à les
            consulter de manière régulière. Le site est mis à jour régulièrement
            par Matthieu Melin. De la même façon,{" "}
            <ParagraphStrong>
              les mentions légales peuvent être modifiées à tout moment
            </ParagraphStrong>
            : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y
            référer le plus souvent possible afin d’en prendre connaissance.
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Services fournis</ParagraphTitle>
          <ParagraphDescription>
            Matthieu Melin, s’efforce de fournir sur le site des informations
            aussi précises que possible. Toutefois, il ne pourra être tenue
            responsable des omissions, des inexactitudes et des carences dans la
            mise à jour, qu’elles soient de son fait ou du fait des tiers
            partenaires qui lui fournissent ces informations. Tous les
            informations indiquées sur le site www.swizen.fr sont données à
            titre indicatif, et sont susceptibles d’évoluer. Aussi, toutes les
            informations indiquées sur le site Site www.swizen.fr sont données à
            titre indicatif, et sont susceptibles de changer ou d’évoluer sans
            préavis. Si vous constatez une lacune, erreur ou ce qui parait être
            un dysfonctionnement, merci de bien vouloir le signaler par email, à
            l’adresse m.melin@swizen.fr, en décrivant le problème de la manière
            la plus précise possible (vous vous trouver sur un téléphone, une
            tablette ou bien un ordinateur ; nom de la page qui pose problème,
            type de système d’exploitation, navigateur utilisé,…). Matthieu
            Melin n’est en aucun cas responsable de l’utilisation faite de ces
            informations, et de tout préjudice direct ou indirect pouvant en
            découler.
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>
            Propriété intellectuelle et contrefaçons
          </ParagraphTitle>
          <ParagraphDescription>
            Matthieu Melin est propriétaire des droits de propriété
            intellectuelle ou détient les droits d’usage sur tous les éléments
            accessibles sur le site, notamment les textes, images, graphismes,
            logo, icônes, sons, logiciels. Toute reproduction, représentation,
            modification, publication, distribution, retransmission, adaptation
            de tout ou partie des éléments du site, quel que soit le moyen ou le
            procédé utilisé, est interdite, sauf autorisation écrite préalable
            de : www.swizen.fr. Toute exploitation non autorisée du site ou de
            l’un quelconque des éléments qu’il contient, par quelque procédé que
            ce soit, sera considérée comme constitutive d’une contrefaçon et
            poursuivie conformément aux dispositions des articles L.335-2 et
            suivants du Code de Propriété Intellectuelle. Le non-respect de
            cette interdiction constitue une contrefaçon pouvant engager la
            responsabilité civile et pénale du contrefacteur. En outre, les
            propriétaires des Contenus copiés pourraient intenter une action en
            justice à votre encontre.
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Limitations de responsabilité</ParagraphTitle>
          <ParagraphDescription>
            L’utilisateur du site s’engage à accéder au site en utilisant un
            matériel récent, ne contenant pas de virus et avec un navigateur de
            dernière génération mis-à-jour. Matthieu Melin ne pourra être tenue
            responsable des dommages directs et indirects causés au matériel de
            l’utilisateur, lors de l’accès au site www.swizen.fr, et résultant
            soit de l’utilisation d’un matériel ne répondant pas aux
            spécifications indiquées ci-dessus, soit de l’apparition d’un bug ou
            d’une incompatibilité. Matthieu Melin ne pourra également être tenue
            responsable des dommages indirects (tels par exemple qu’une perte de
            marché ou perte d’une chance) consécutifs à l’utilisation du site
            www.swizen.fr. Des espaces interactifs (possibilité de poser des
            questions dans l’espace contact) sont à la disposition des
            utilisateurs. Matthieu Melin se réserve le droit de supprimer, sans
            mise en demeure préalable, tout contenu déposé dans cet espace qui
            contreviendrait à la législation applicable en France, en
            particulier aux dispositions relatives à la protection des données.
            Le cas échéant, Matthieu Melin se réserve aussi la possibilité de
            mettre en cause la responsabilité civile et/ou pénale de
            l’utilisateur, notamment en cas de message à caractère diffamant,
            raciste, injurieux ou pornographique, quel que soit le support
            utilisé (texte, vidéo, photographie…).
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Gestion des données personnelles</ParagraphTitle>
          <ParagraphDescription>
            En France, les données personnelles sont notamment protégées par la
            loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
            l’article L. 226-13 du Code pénal et la Directive Européenne du 24
            octobre 1995. A l’occasion de l’utilisation du site www.swizen.fr,
            peuvent être recueillies : l’URL des liens par l’intermédiaire
            desquels l’utilisateur a accédé au site «URL du site Internet», le
            fournisseur d’accès de l’utilisateur, l’adresse de protocole
            Internet (IP) de l’utilisateur. En tout état de cause Matthieu Melin
            ne collecte des informations personnelles relatives à l’utilisateur
            que pour le besoin de certains services proposés par le site
            www.swizen.fr. L’utilisateur fournit ces informations en toute
            connaissance de cause, notamment lorsqu’il procède par lui-même à
            leur saisie. Il est alors précisé à l’utilisateur du site
            www.swizen.fr l’obligation ou non de fournir ces informations.
            Conformément aux dispositions des articles 38 et suivants de la loi
            78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et
            aux libertés, tout utilisateur dispose d’un droit d’accès, de
            rectification et d’opposition aux données personnelles le
            concernant, en effectuant sa demande écrite et signée, accompagnée
            d’une copie du titre d’identité avec signature du titulaire de la
            pièce, en précisant l’adresse à laquelle la réponse doit être
            envoyée. Aucune information personnelle de l’utilisateur du site
            www.swizen.fr n’est publiée à l’insu de l’utilisateur, échangée,
            transférée, cédée ou vendue sur un support quelconque à des tiers.
            Seule l’hypothèse du rachat de Matthieu Melin et/ou du site internet
            www.swizen.fr et de ses droits permettrait la transmission des dites
            informations à l’éventuel acquéreur qui serait à son tour tenu de la
            même obligation de conservation et de modification des données vis à
            vis de l’utilisateur du site Les bases de données sont protégées par
            les dispositions de la loi du 1er juillet 1998 transposant la
            directive 96/9 du 11 mars 1996 relative à la protection juridique
            des bases de données.
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Liens hypertextes et cookies</ParagraphTitle>
          <ParagraphDescription>
            Le site www.swizen.fr peut contenir un certain nombre de liens
            hypertextes vers d’autres sites, mis en place avec l’autorisation de
            Matthieu Melin. Cependant, Matthieu Melin n’a pas la possibilité de
            vérifier le contenu des sites ainsi visités, et n’assumera en
            conséquence aucune responsabilité de ce fait. La navigation sur le
            site www.swizen.fr est susceptible de provoquer l’installation de
            cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un
            fichier de petite taille, qui ne permet pas l’identification de
            l’utilisateur, mais qui enregistre des informations relatives à la
            navigation d’un ordinateur sur un site. Les données ainsi obtenues
            visent à faciliter la navigation ultérieure sur le site, et ont
            également vocation à permettre diverses mesures de fréquentation. Le
            refus d’installation d’un cookie peut entraîner l’impossibilité
            d’accéder à certains services. L’utilisateur peut toutefois
            configurer son ordinateur de la manière suivante, pour refuser
            l’installation des cookies :
            <ParagraphList>
              <ParagraphListItem>
                <ParagraphStrong>Sous Internet Explorer : </ParagraphStrong>
                onglet outil (pictogramme en forme de rouage en haut a droite) /
                options internet. Cliquez sur Confidentialité et choisissez
                Bloquer tous les cookies. Validez sur Ok.
              </ParagraphListItem>
              <ParagraphListItem>
                <ParagraphStrong>Sous Firefox : </ParagraphStrong>
                en haut de la fenêtre du navigateur, cliquez sur le bouton
                Firefox, puis aller dans l’onglet Options. Cliquer sur l’onglet
                Vie privée.
              </ParagraphListItem>
              <ParagraphListItem>
                <ParagraphStrong>
                  Paramétrez les Règles de conservation sur :{" "}
                </ParagraphStrong>
                utiliser les paramètres personnalisés
              </ParagraphListItem>
              <ParagraphListItem>
                <ParagraphStrong>Sous Safari : </ParagraphStrong>
                Cliquez en haut à droite du navigateur sur le pictogramme de
                menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez
                sur Afficher les paramètres avancés. Dans la section
                “Confidentialité”, cliquez sur Paramètres de contenu. Dans la
                section “Cookies”, vous pouvez bloquer les cookies.
              </ParagraphListItem>
              <ParagraphListItem>
                <ParagraphStrong>Sous Chrome : </ParagraphStrong>
                Cliquez en haut à droite du navigateur sur le pictogramme de
                menu (symbolisé par trois lignes horizontales). Sélectionnez
                Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
                section “Confidentialité”, cliquez sur préférences. Dans
                l’onglet “Confidentialité”, vous pouvez bloquer les cookies. Les
                liens hypertextes mis en place dans le cadre du présent site
                internet en direction d'autres ressources présentes sur le
                réseau Internet ne sauraient engager la responsabilité de
                Matthieu Melin. Tout contenu téléchargé se fait aux risques et
                périls de l'utilisateur et sous sa seule responsabilité. En
                conséquence, Matthieu Melin ne saurait être tenu responsable
                d'un quelconque dommage subi par l'ordinateur de l'utilisateur
                ou d'une quelconque perte de données consécutives au
                téléchargement.
              </ParagraphListItem>
            </ParagraphList>
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>
            Droit application et attribute de juridiction
          </ParagraphTitle>
          <ParagraphDescription>
            Les présentes conditions du site www.swizen.fr sont régies par les
            lois françaises et toute contestation ou litiges qui pourraient
            naître de l'interprétation ou de l'exécution de celles-ci seront de
            la compétence exclusive des tribunaux dont dépend le siège social de
            la société Matthieu Melin. La langue de référence, pour le règlement
            de contentieux éventuels, est le français.
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Les principales lois concernées</ParagraphTitle>
          <ParagraphDescription>
            Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n°
            2004-801 du 6 août 2004 relative à l’informatique, aux fichiers et
            aux libertés. Loi n° 2004-575 du 21 juin 2004 pour la confiance dans
            l’économie numérique.
          </ParagraphDescription>
        </Paragraph>
        <Paragraph>
          <ParagraphTitle>Lexique</ParagraphTitle>
          <ParagraphList>
            <ParagraphListItem>
              <ParagraphStrong>Propriétaire du site : </ParagraphStrong>
              Responsable légal des informations contenues dans le site internet
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>Webmaster : </ParagraphStrong>
              Personne en charge du maintien technique et des mises à jour
              techniques du site internet
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>Responsable publication : </ParagraphStrong>
              Personne en charge de la mise à jour des contenus (textes,
              visuels, multimédia, etc.) sur le site internet
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>Hébergeur : </ParagraphStrong>
              Espace de stockage du site internet
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>Utilisateur : </ParagraphStrong>
              Internaute se connectant, utilisant le site susnommé
            </ParagraphListItem>
            <ParagraphListItem>
              <ParagraphStrong>
                Informations personnelles : « les informations qui permettent,
                sous quelque forme que ce soit, directement ou non,
                l’identification des personnes physiques auxquelles elles
                s’appliquent » (article 4 de la loi n° 78-17 du 6 janvier 1978).
              </ParagraphStrong>
            </ParagraphListItem>
          </ParagraphList>
        </Paragraph>
      </Main>
      <Footer />
    </StyledLegal>
  );
}

const StyledLegal = styled.div``;
const Main = styled.main`
  padding: 20px;
  max-width: 1024px;
`;
const Paragraph = styled.div``;
const ParagraphTitle = styled.h3`
  color: ${Colors.Blue};
  text-transform: uppercase;
  font-weight: 500;
`;
const ParagraphDescription = styled.p``;
const ParagraphList = styled.ul`
  padding: 0 30px;
`;
const ParagraphListItem = styled.li``;
const ParagraphStrong = styled.strong``;
