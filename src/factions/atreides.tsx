import { dedent } from 'ts-dedent';
import {
  advantage,
  assets,
  faq,
  leader,
  troop,
  troopSide,
} from '../shared/generate';
import { pattern1 } from '../presets/patterns';
import { Faction } from '../shared/schema';

export const yeuh = leader({
  image: 'dryeuh.png',
  name: 'Dr Yueh Wellington',
  strength: '1',
});
export const duncan = leader({
  image: 'duncan.png',
  name: 'Duncan Idaho',
  strength: '2',
});
export const gurney = leader({
  image: 'gurney.png',
  name: 'Gurney Hallack',
  strength: '4',
});
export const thufir = leader({
  image: 'thufir.png',
  name: 'Thufir Hawat',
  strength: '5',
});
export const jessica = leader({
  image: 'jessica.png',
  name: 'Lady Jessica',
  strength: '5',
});
export const paul = leader({
  image: 'paul.png',
  name: 'Paul Atreides',
  strength: '10',
});

export const normal = troop({
  front: troopSide({
    variant: 'ATREIDES_TROOP',
    name: 'forces',
    description:
      'Normal Troop tokens, of strength 0.5, which can be spiced to a strength of 1',
  }),
});

export const sheet: Faction = {
  __typename: 'Faction',
  name: 'House Atreides',
  description: dedent`
    House Atreides, led by the youthful Paul Atreides (Muad'Dib) &mdash; rightful heir to the planet, gifted with valiant lieutenants and a strange partial awareness of the future, but beset by more powerful and treacherous opponents.
  `,
  assets: assets({
    logo: 'ATREIDES_LOGO',
    color: '#444515',
    pattern: pattern1,
    hero: paul,
    leaders: [yeuh, duncan, gurney, thufir, jessica],
    troops: [normal],
  }),
  rules: {
    __typename: 'FactionRules',
    startText:
      '10 Troop tokens in Arrakeen and 10 in reserves (*off planet*). Start with 10 Spice.',
    revivalText: '2 Troops.',
    advantages: [
      advantage({ body: 'You have limited prescience.' }),
      advantage({
        title: 'bidding prescience',
        body: dedent`
          During each bidding round you may look at each Treachery Card as it comes up for bid. You may keep records about cards.
        `,
        karamaEffect: dedent`
          You may not look at any of the cards up for bid.
        `,
      }),
      advantage({
        title: 'spice prescience',
        body: dedent`
          During/After Ship & Move phase you may look at the next card for Spice blow A and B.
        `,
        karamaEffect: dedent`
          You are not allowed to look at the Spice prescience cards. (this lasts until the card is revealed during the Spice-blow phase)
        `,
      }),
      advantage({
        title: 'battle prescience',
        body: dedent`
          During battle (step 2.2) you may force your opponent to reveal one part of their battle-plan early. (Weapon, Defense, Leader, or Dial + whether Mercenaries is being played).
        `,
        karamaEffect: dedent`
          Your battle prescience question can be ignored, your opponent is no longer required to do as was answered. Must be played before Battle Plans are revealed.
        `,
      }),
      advantage({
        title: 'kwisatz haderach',
        body: dedent`
          Once you have lost 7 or more total Troop tokens in battles you gain a token that can be played alongside leaders in battles in one territory per turn to add +2 strength to those leaders and they cannot be called traitor.
          The token can only be lost in a Lasgun-Shield explosion, and follows leader disc revival rules to be revived as if its a normal leader.
        `,
        karamaEffect: dedent`
          You may not use the Kwisatz Haderach token in this batlle. Must be done before the Battle Plans are revealed.
        `,
      }),
      advantage({
        title: `Leto's Tithe`,
        body: dedent`
          During Spice Collection phase take 2 Spice from the Spice Bank if you control one stronghold. Take 3 instead if you control at least two strongholds. You permanently lose this advantage once you gain the Kwisatz Haderach token.`,
        karamaEffect: dedent`
          You do not collect extra spice. 
        `,
      }),
    ],
    alliance: [
      advantage({
        title: `Shared Prescience`,
        body: 'You may allow your ally to use Battle Prescience in their battles.',
      }),
    ],
    fate: [
      advantage({
        title: 'Arrakis Fiefdom',
        body: dedent`
          Play your fate card at any time before Ship & Move phase to obtain the Carryall Tech Token, which you cannot lose. The token triggers when a Spice mine sends troops to reserves. You may also spawn a 3 Spice mine on any sand territory that doesn't have a Spice Blow marker.
        `,
      }),
    ],
  },
  faq: [],
};
