export const projects = [
  {
    id: 1,
    slug: 'umortgage-brand-identity',
    title: 'UMortgage Brand Identity',
    employer: 'UMortgage',
    section: 'selected-work',
    year: '2021–2026',
    coverImage: '/images/brand-identity/hero-v2.jpg',
    tags: ['Graphic Design', 'Branding'],
    overview: 'As part of my role at UMortgage, I helped shape and evolve the company\'s visual identity, a design system built to stay consistent across marketing, product, and internal materials. Below is a sample of the brand assets and marketing materials I designed along the way.',
    workSections: [
      {
        title: 'Social Media Graphics',
        groups: [
          {
            subhead: 'Loan Program Promo Graphics',
            items: [
              { image: '/images/brand-identity/social/usda-manufactured-home.jpg' },
              { image: '/images/brand-identity/social/one-time-close.png' },
              { image: '/images/brand-identity/social/uwm-closed-end-second.jpg' },
              { image: '/images/brand-identity/social/aven-heloc-program.png' },
            ],
          },
          {
            subhead: 'Tempo Promotional Graphics',
            items: [
              { image: '/images/brand-identity/social/tempo-feature-brownstead.jpg' },
              { image: '/images/brand-identity/social/tempo-wheel-graphic.jpg' },
              {
                type: 'carousel',
                slides: [
                  '/images/brand-identity/social/carousel-commission-tracker.jpg',
                  '/images/brand-identity/social/carousel-commission-tracker-2.jpg',
                  '/images/brand-identity/social/carousel-commission-tracker-3.jpg',
                ],
              },
              {
                type: 'carousel',
                slides: [
                  '/images/brand-identity/social/carousel-margin-cap.jpg',
                  '/images/brand-identity/social/carousel-margin-cap-2.jpg',
                ],
              },
            ],
          },
          {
            subhead: 'UMortgage Recruiting Graphics',
            items: [
              { image: '/images/brand-identity/social/fastest-growing-company.png' },
              { image: '/images/brand-identity/social/recruiting-meta-ad.jpg' },
            ],
          },
        ],
      },
      {
        title: 'Print Graphics',
        groups: [
          {
            subhead: 'Flyers',
            items: [
              { image: '/images/brand-identity/print/flyer-1.jpg' },
              { image: '/images/brand-identity/print/flyer-2.png' },
              { image: '/images/brand-identity/print/flyer-open-house.jpg' },
              { image: '/images/brand-identity/print/flyer-aven-heloc.png' },
            ],
          },
          {
            subhead: 'UMortgage Recruiting Guide',
            items: [
              {
                type: 'carousel',
                slides: Array.from({ length: 23 }, (_, i) => `/images/brand-identity/print/recruiting-packet/${i + 1}.jpg`),
              },
            ],
          },
        ],
      },
      {
        title: 'Slide Decks',
        groups: [
          {
            items: [
              {
                type: 'carousel',
                label: 'GoBroker Powered by UMortgage',
                slides: [1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,18,19,21,22,23,24].map(n => `/images/brand-identity/slides/gobroker/${n}.jpg`),
              },
              {
                type: 'carousel',
                label: 'Dollars & Sense',
                slides: Array.from({ length: 15 }, (_, i) => `/images/brand-identity/slides/dollars-and-sense/${i + 1}.jpg`),
              },
              {
                type: 'carousel',
                label: 'One-Time Close New Construction',
                slides: Array.from({ length: 9 }, (_, i) => `/images/brand-identity/slides/one-time-close/${i + 1}.jpg`),
              },
              {
                type: 'carousel',
                label: 'Optimizing Engagement & Driving Connection',
                slides: Array.from({ length: 16 }, (_, i) => `/images/brand-identity/slides/optimizing-engagement/${i + 1}.jpg`),
              },
            ],
          },
        ],
      },
      {
        title: 'Logos',
        groups: [
          {
            layout: 'logos',
            items: [
              { image: '/images/brand-identity/logos/bell-mortgage.png' },
              { image: '/images/brand-identity/logos/brand-asset-2color-dark.png' },
              { image: '/images/brand-identity/logos/chris-brownstead.png' },
              { image: '/images/brand-identity/logos/dale-corley.png' },
              { image: '/images/brand-identity/logos/dan-clancy.png' },
              { image: '/images/brand-identity/logos/ohio-valley-mortgage.png' },
              { image: '/images/brand-identity/logos/pmc.png' },
              { image: '/images/brand-identity/logos/sunnie-baltes.png' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: 'mortgage-calculators',
    title: 'Mortgage Calculators',
    employer: 'UMortgage',
    section: 'selected-work',
    year: 2024,
    coverImage: '',
    tags: ['Web Design', 'Fintech'],
  },
  {
    id: 3,
    slug: 'gobroker',
    title: 'GoBroker',
    employer: 'UMortgage',
    section: 'selected-work',
    year: 2026,
    coverImage: '/images/gobroker/hero.jpg',
    tags: ['Campaign Design', 'Branding', 'Web Design'],
    overview: '',
    workSections: [
      {
        title: 'Digital Graphics',
        groups: [
          {
            subhead: 'Social Media Announcement Graphics',
            items: [
              { image: '/images/gobroker/branding/gobroker-announcement.jpg' },
              { image: '/images/gobroker/branding/hw-broker-announcement.png' },
            ],
          },
          {
            subhead: 'Webinar Social Graphics',
            items: [
              {
                type: 'pair',
                images: [
                  { image: '/images/gobroker/digital/webinar-social-1.jpg', aspectRatio: 1.778 },
                  { image: '/images/gobroker/digital/webinar-social-2.jpg', aspectRatio: 0.801 },
                ],
              },
            ],
          },
          {
            subhead: 'GoBroker Workshops Carousel',
            items: [
              {
                type: 'carousel',
                slides: Array.from({ length: 6 }, (_, i) => `/images/gobroker/digital/workshops-carousel/${i + 1}.jpg`),
              },
            ],
          },
          {
            subhead: 'HousingWire.com Digital Ad Mockups',
            layout: 'balanced-columns',
            columns: [
              [
                { image: '/images/gobroker/digital/hw-ads/page-01.jpg', aspectRatio: 0.531 },
                { image: '/images/gobroker/digital/hw-ads/page-02.jpg', aspectRatio: 0.466 },
                { image: '/images/gobroker/digital/hw-ads/page-03.jpg', aspectRatio: 0.411 },
              ],
              [
                { image: '/images/gobroker/digital/hw-ads/page-04.jpg', aspectRatio: 0.721 },
                { image: '/images/gobroker/digital/hw-ads/page-06.jpg', aspectRatio: 0.466 },
                { image: '/images/gobroker/digital/hw-ads/page-08.jpg', aspectRatio: 0.291 },
              ],
            ],
          },
          {
            subhead: 'Meta Ads',
            items: [
              {
                type: 'pair',
                images: [
                  { image: '/images/gobroker/digital/meta-ads/set2-ad-1.jpg', aspectRatio: 1.778 },
                  { image: '/images/gobroker/digital/meta-ads/ad-1-square.jpg', aspectRatio: 1 },
                ],
              },
              {
                type: 'pair',
                images: [
                  { image: '/images/gobroker/digital/meta-ads/set2-ad-2.jpg', aspectRatio: 1.778 },
                  { image: '/images/gobroker/digital/meta-ads/ad-3-square.jpg', aspectRatio: 1 },
                ],
              },
              {
                type: 'pair',
                images: [
                  { image: '/images/gobroker/digital/meta-ads/set2-ad-3.jpg', aspectRatio: 1.778 },
                  { image: '/images/gobroker/digital/meta-ads/ad-3-square-26.jpg', aspectRatio: 1 },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Webpage',
        groups: [
          {
            items: [
              {
                type: 'pair',
                transparent: true,
                images: [
                  { image: '/images/gobroker/webpage/desktop.png', aspectRatio: 1.643 },
                  { image: '/images/gobroker/webpage/mobile.png', aspectRatio: 0.491 },
                ],
              },
              {
                type: 'pair',
                rounded: true,
                images: [
                  { image: '/images/gobroker/webpage/desktop-2.jpg', aspectRatio: 1.065 },
                  { image: '/images/gobroker/webpage/mobile-2.jpg', aspectRatio: 0.291 },
                ],
              },
              {
                type: 'pair',
                rounded: true,
                images: [
                  { image: '/images/gobroker/webpage/desktop-3.jpg', aspectRatio: 1.491 },
                  { image: '/images/gobroker/webpage/mobile-3.jpg', aspectRatio: 0.407 },
                ],
              },
              {
                type: 'pair',
                rounded: true,
                images: [
                  { image: '/images/gobroker/webpage/desktop-4.jpg', aspectRatio: 2.009 },
                  { image: '/images/gobroker/webpage/mobile-4.jpg', aspectRatio: 0.548 },
                ],
              },
              {
                type: 'pair',
                rounded: true,
                images: [
                  { image: '/images/gobroker/webpage/desktop-5.jpg', aspectRatio: 2.198 },
                  { image: '/images/gobroker/webpage/mobile-5.jpg', aspectRatio: 0.600 },
                ],
              },
            ],
          },
        ],
      },
      {
        title: 'Slide Deck',
        groups: [
          {
            items: [
              {
                type: 'carousel',
                fullWidth: true,
                slides: [1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,18,19,21,22,23,24].map(n => `/images/brand-identity/slides/gobroker/${n}.jpg`),
              },
            ],
          },
        ],
      },
      {
        title: 'Recruiting Packet',
        groups: [
          {
            items: [
              {
                type: 'carousel',
                fullWidth: true,
                maxWidth: '75%',
                slides: Array.from({ length: 23 }, (_, i) => `/images/brand-identity/print/recruiting-packet/${i + 1}.jpg`),
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'winners-win',
    title: 'Winners Win',
    employer: 'UMortgage',
    section: 'selected-work',
    year: 2024,
    coverImage: '',
    tags: ['Branding', 'Event Design'],
  },
  {
    id: 6,
    slug: 'tempo',
    title: 'Tempo',
    employer: 'UMortgage',
    section: 'case-studies',
    type: 'product-design',
    year: '2024–2026',
    coverImage: '/images/tempo-thumbnail.jpg',
    heroImage: '',
    tags: ['UI/UX Design', 'Product Strategy'],
    summary: 'A suite of internal tools for loan officers — relationship tracker, lead pipeline, and a full marketing asset library — built to make complex workflows feel effortless.',
    description: '',
  },
  {
    id: 5,
    slug: 'loan-product-blog-website',
    title: 'Loan Product Pages',
    employer: 'UMortgage',
    section: 'case-studies',
    type: 'product-design',
    year: 2025,
    coverImage: '/images/loan-blog-thumbnail.jpg',
    heroImage: '',
    tags: ['Web Design', 'Systems Thinking'],
    summary: 'A library of standardized loan product pages for UMortgage, covering every loan program with toggleable calculators, qualification details, and a side-by-side comparison tool.',
    description: '',
  },
  {
    id: 4,
    slug: 'loan-status-update-emails',
    title: 'Loan Status Update Emails',
    employer: 'UMortgage',
    section: 'case-studies',
    type: 'product-design',
    year: 2025,
    coverImage: '/images/HeroImage_LSU.jpg',
    heroImage: '/images/HeroImage_LSU.jpg',
    tags: ['Systems Thinking', 'Email Development'],
    summary: 'A redesigned loan status email series for UMortgage, giving borrowers clear milestone updates and next-step action items throughout the mortgage process.',
    description: '',
  },
]
