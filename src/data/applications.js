// Category display names (Nieuwbouw/Renovatie/Restauratie) are translated
// per-language via data/i18n/common.js (keys catNieuwbouw/catRenovatie/
// catRestauratie) — the `id` here is only used internally as a URL anchor
// and a lookup key, never displayed directly.

module.exports = {
  nieuwbouw: {
    id: 'nieuwbouw',
    eyebrow: 'For developers & architects',
    heroImage: '/assets/images/applications/nieuwbouw/nieuwbouw-01.jpg',
    lede: 'On a new build, glazing is a design decision as much as an engineering one. Titanium vacuum glass lets a façade meet the strictest energy-performance codes in the Nordic region while staying thin enough to keep the sightlines an architect actually drew.',
    body: [
      'A conventional path to a very low U-value means a thick, heavy triple-glazed unit — bigger frame sections, more structural glass support, less daylight per square metre of façade. Zebscan\'s vacuum glass reaches the same or a better U-value at roughly a third of the thickness, which keeps frame profiles slender and glazing ratios generous without moving the energy budget in the wrong direction.',
      'Because the panes hold their performance at any installation angle — vertical façade, sloped rooflight, horizontal skylight — the same specification carries through a building\'s full glazing package instead of needing a workaround for every atrium or roof window.',
    ],
    recommended: ['us1-10', 's1-10', 'd-80', 's70', 'hybrid', 'fire-resistant-glazing'],
  },
  renovatie: {
    id: 'renovatie',
    eyebrow: 'For homeowners',
    heroImage: '/assets/images/applications/renovatie/renovatie-01.jpg',
    lede: 'Most Nordic housing stock — the standard terraced house, the 1970s semi-detached, the apartment block — was never built with today\'s energy prices in mind. Vacuum glass upgrades that performance without the disruption, or the cost, of tearing out the window frames.',
    body: [
      'Because the thinnest Zebscan panes start at 6.7 mm, they fit inside frames that were never designed to take insulated glass — the same sashes, the same hardware, the same exterior appearance the street is used to. What changes is what happens indoors: fewer cold spots near the glass, a noticeably quieter room, and a heating bill that reflects it.',
      'It is a project measured in days on site, not weeks, which is usually the difference between a renovation that actually happens and one that stays on a wish list.',
    ],
    recommended: ['us1-10', 's1-10', 'd-80', 's70', 'hybrid', 'fire-resistant-glazing'],
  },
  restauratie: {
    id: 'restauratie',
    eyebrow: 'For heritage & monument owners',
    heroImage: '/assets/images/applications/restauratie/restauratie-01.jpg',
    lede: 'Churches, palaces and listed buildings come with a constraint most glazing simply cannot meet: nothing about the protected exterior is allowed to change. Vacuum glass is thin enough to solve that without asking conservation authorities for an exception.',
    body: [
      'A protected building\'s original glazing bars and sash profiles were sized for single glass — often just a few millimetres. Conventional insulated units, at 20mm and up, simply do not fit without altering the frame, which heritage protection rules usually rule out. At 6.7–8.3 mm, Zebscan\'s panes do fit, and the clearest option in the range, US1.10, keeps the optical quality close enough to historic glass that the change is invisible from the street.',
      'The gain is real all the same: up to three times the insulation of the aging single or early double glazing most protected buildings still carry, installed without a single change to the building\'s protected exterior.',
    ],
    recommended: ['us1-10', 's1-10'],
  },
};
