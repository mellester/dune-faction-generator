import { dedent } from 'ts-dedent';
import {
  advantage,
  assets,
  leader,
  faq,
  troop,
  troopSide,
  extraAsset
} from '../shared/generate';
import { pattern1 } from '../presets/patterns';
import { Faction } from '../shared/schema';

export const cammar = leader({
  image: 'cammar.png',
  name: 'Cammar Pilru',
  strength: '1',
});
export const kailea = leader({
  image: 'kailea.png',
  name: 'Kailea Vernius',
  strength: '2',
});
export const dominic = leader({
  image: 'dominic.png',
  name: 'Dominic Vernius',
  strength: '3',
});
export const tessia = leader({
  image: 'tessia.png',
  name: 'Tessia Vernius',
  strength: '5',
});
export const ctair = leader({
  image: 'ctair.png',
  name: 'CTair Pilru',
  strength: '5',
});

export const normal = troop({
  front: troopSide({
    variant: 'IX_TROOP',
    name: 'suboid',
    description: 'Suboid Troops, of strength 0.5, cannot be Spice dialed.',
  }),
  back: troopSide({
    variant: 'IX_TROOP',
    name: 'cyborg',
    description: ``,
    modifiers: {
      star: 'l1',
    },
  }),
});

const rhombur = leader({ name: 'Prince Rhombur', image: '', strength: '' });

export const sheet: Faction = {
  __typename: 'Faction',
  description: dedent`
    The Ixians are led by the human cyborg Prince Rhombur Vernius possessing courage, a sharp mind, and technological secrets.
    They are technocrats who specialize in production and supply chains. On Arrakis they have a movable troop platform.
  `,
  name: 'Ixian',
  assets: assets({
    logo: 'IX_LOGO',
    color: '#B9A452',
    hero: rhombur,
    leaders: [cammar, kailea, dominic, tessia, ctair],
    troops: [normal],
    pattern: pattern1,
  }),
  rules: {
    startText: `6 Troop tokens (*3 Cyborgs, 3 Suboids*) in the HMS, 14 Troop tokens (*6 Cyborgs, 8 Suboids*) in reserve (*off-planet*), Start with 10 Spice.`,
    revivalText: '1 force, either Suboid or Cyborg.',
    advantages: [
      advantage({ body: 'You are skilled in technology and production.' }),
      advantage({
        title: 'Initial Treachery Knowledge',
        body: dedent`During setup you look at the initial Treachery Cards (Includinging Extra's dealt to factions like the harkonen) before they are dealt.`,
      }),
      advantage({
        title: 'General Bidding Knowledge',
        body: 'At the beginning of the Bidding phase you may look at the batch of Treachery Cards going up for bid. Then, you may split them into 2 piles, choosing which pile goes up for bid first. ',
        karamaEffect: 'You may not look at the cards up for bid or split them.',
      }),
      advantage({
        title: 'Technology',
        body: 'Before the first bid is placed on a card you may replace it with a card from your hand once per phase. If you split the bidding cards into piles the Atreides may see the card you get.',
        karamaEffect: 'You may not use your technology ability this phase.',
      }),
      advantage({
        title: 'Augmented Troops',
        body: dedent`Your 9 Cyborgs are double battle strength, can move 2 territories, collect 3 Spice each, and cost 3 Spice to revive. Cyborgs are immune to karama.

        Your 11 Suboids can move 2 territories if accompanied by a Cyborg, cost 1 Spice to revive, and are always considered half strength because they cannot be Spice dialed.
        
        If you dial Cyborgs in a battle un-dialed Suboids can die in their place when calculating battle losses (step 4.4). You get 2 uses out of every suboid because if this happens the dialed Cyborgs flip to Patched Cyborgs. Patched Cyborgs can be dialed once for free, then they flip back. Patched Cyborgs are not immune to karama`,
        karamaEffect: dedent`
        When calculating battle losses your Cyborgs cant be saved by Suboids. (This lasts until the end of the battle phase),  Patched Cyborgs count as normal sterght troop tokens. Play before the battle wheels are revealed.
        `
      }),
      advantage({
        title: 'Hidden Mobile Surveyor',
        body: dedent`During setup place the HMS in any non-stronghold territory. It is considered a stronghold within that territory. You and only you may ship or cross ship to it (although the HMS does not count as a stronghold for purposes of winning the game), and move into/out of it like a normal territory.
        Troops in the HMS are safe from the Storm and Shai-Hulud.
        
        During Mentat phase the player who owns the HMS control token (Aka HMS controller), may move the HMS up to 3 non-stronghold territories. Troops belloning to the HMS controler can be picked up/dropped off along the way. (The HMS cannot pick up spice).`,
      }),
    ],
    alliance: [
      advantage({
        title: 'Shared Treachery Cards',
        body: dedent`Once, during the bidding round, before bidding begins on a card and before Atreides gets to look at the card, you may take the Treachery Card about to be bid on, replacing it with one from your hand.`,
      }),
    ],
    fate: [
      advantage({
        title: `Defect`,
        body: `Play your fate card to nullify the effects of a special Treachery Card once it is played. The card is returned to the original faction and may not be used for the rest of the turn. To stop a special weapon/defense/mercenaries it must be played before battle plans are made. (Cannot be played during battle step 3)`,
      }),
    ],
    __typename: 'FactionRules',
  },
  faq: [],
};
