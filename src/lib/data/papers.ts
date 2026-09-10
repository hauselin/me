// Single source for the research page (grouped by theme) and the paper search (all entries).
// pdf: bare filename = R2 key under papers/; full URL = external.
// Order within a theme is array order.

export const themes = [
	'Latest work',
	'Misinformation',
	'Hybrid laboratory-field experiments',
	'Philosophy of science and methods',
	'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
] as const;

export type Theme = (typeof themes)[number];

export type Paper = {
	authors: string;
	year: number | string;
	title: string;
	venue?: string;
	detail?: string;
	doi?: string;
	pdf?: string;
	extras?: { label: string; href: string }[];
	themes?: Theme[];
	tags?: string[];
	inPrep?: boolean;
};

export const papers: Paper[] = [
	{
		authors:
			'Pennycook, G., Berinsky, A., Bhargava, P., Lin, H., Cole, R., Goldberg, B., Lewandowsky, S., & Rand, D.',
		year: 2024,
		title:
			'Inoculation and accuracy prompting increase accuracy discernment in combination but not alone',
		venue: 'Nature Human Behavior',
		detail: '1-12',
		doi: 'https://doi.org/10.1038/s41562-024-02023-2',
		pdf: 'Pennycook 2024 inoculation-acc-prompt.pdf',
		themes: ['Misinformation'],
		tags: ['misinfo']
	},
	{
		authors:
			'Lin*, H., Garro*, H., Wernerfelt, N., Shore, J. C., Hughes, A., Deisenroth, D., Barr, N., Berinsky, A., Eckles, D., Pennycook, G., & Rand, D.',
		year: 'revise & resubmit, Nature',
		title: 'Reducing misinformation sharing at scale using digital accuracy prompt ads',
		venue: 'PsyArxiv',
		doi: 'https://doi.org/10.31234/osf.io/u8anb',
		pdf: 'https://osf.io/u8anb/download',
		themes: ['Latest work', 'Misinformation'],
		tags: ['field', 'accuracy-prompt', 'misinfo']
	},
	{
		authors:
			'Lin, H., Lasser, J., Lewandowsky, S., Cole, R., Gully, A., Rand, D.G., & Pennycook, G.',
		year: 2023,
		title: 'High level of correspondence across different news domain quality rating sets',
		venue: 'PNAS Nexus',
		detail: '2(9), 1-8',
		doi: 'https://doi.org/10.1093/pnasnexus/pgad286',
		pdf: 'Lin2023-domain-quality.pdf',
		extras: [{ label: 'supplement', href: 'Lin2023-domain-quality-supplement.pdf' }],
		themes: ['Misinformation'],
		tags: ['misinfo']
	},
	{
		authors: 'Lin, H., Pennycook, G., & Rand, D.G.',
		year: 2023,
		title:
			'Thinking more or thinking differently? Using drift-diffusion modeling to illuminate why accuracy prompts decrease misinformation sharing',
		venue: 'Cognition',
		detail: '230(2023), 105312',
		doi: 'https://doi.org/10.1016/j.cognition.2022.105312',
		pdf: 'LinPennycookRand2023-thinking.pdf',
		extras: [{ label: 'supplement', href: 'LinPennycookRand2023-thinking-supplement.pdf' }],
		themes: ['Latest work', 'Misinformation'],
		tags: ['accuracy-prompt', 'misinfo']
	},
	{
		authors:
			'Lin, H., Savio, M.T., Huang, X., Steiger, M., Guevara, R.L., Szostak, D., Pennycook, G., & Rand, D.',
		year: 2024,
		title:
			'Accuracy prompts protect professional content moderators from the illusory truth effect',
		venue: 'PNAS Nexus',
		doi: 'https://doi.org/10.1093/pnasnexus/pgae481',
		pdf: 'Lin_Rand_2024-content-moderator-acc-prompt.pdf',
		extras: [
			{ label: 'supplement', href: 'Lin_Rand_2024-content-moderator-acc-prompt-supplement.pdf' },
			{ label: 'preprint', href: 'https://osf.io/preprints/psyarxiv/gswm6/download' }
		],
		themes: ['Latest work'],
		tags: ['misinfo']
	},
	{
		authors: 'Bhargava, P., MacDonald, K., Newton, C., Lin, H., & Pennycook, G.',
		year: 2023,
		title: 'How effective are TikTok misinformation debunking videos?',
		venue: 'Harvard Kennedy School Misinformation Review',
		doi: 'https://doi.org/10.37016/mr-2020-114',
		pdf: 'Bhargava2023.pdf',
		extras: [{ label: 'supplement', href: 'Bhargava2023supplement.pdf' }],
		themes: ['Misinformation'],
		tags: ['misinfo']
	},
	{
		authors: 'Lin, H., Rand, D.G., & Pennycook, G.',
		year: 2023,
		title:
			'Conscientiousness does not moderate the association between political ideology and susceptibility to fake news sharing',
		venue: 'Journal of Experimental Psychology: General',
		doi: 'https://doi.org/10.1037/xge0001467',
		pdf: 'Lin2023-conscientiousness-ideology.pdf',
		themes: ['Misinformation'],
		tags: ['misinfo']
	},
	{
		authors: 'Lin, H., Westbrook, A., Fan, F., & Inzlicht, M.',
		year: 2024,
		title: 'An experimental manipulation of the value of effort (registered report)',
		venue: 'Nature Human Behavior',
		detail: '2024, 1-13',
		doi: 'https://doi.org/10.1038/s41562-024-01842-7',
		pdf: 'Lin_Inzlicht_2024-effort.pdf',
		extras: [{ label: 'supplement', href: 'Lin_Inzlicht_2024-effort-supplement.pdf' }],
		themes: [
			'Latest work',
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['effort', 'registered-report']
	},
	{
		authors: 'Lin*, H., Epstein*, Z., Pennycook, G., & Rand, D.',
		year: 2022,
		title:
			'Quantifying attention via dwell time and engagement in a social media browsing environment',
		venue: 'NeurIPS Conference Workshop',
		doi: 'https://arxiv.org/abs/2209.10464',
		pdf: 'https://arxiv.org/pdf/2209.10464.pdf',
		themes: ['Hybrid laboratory-field experiments']
	},
	{
		authors: 'Epstein*, Z., Lin*, H., Pennycook, G., & Rand, D.',
		year: 2022,
		title:
			'How many others have shared this? Experimentally investigating the effects of social cues on engagement, misinformation, and unpredictability on social media',
		venue: 'arXiv',
		detail: '2207.07562v1',
		doi: 'http://arxiv.org/abs/2207.07562v1',
		pdf: 'https://arxiv.org/pdf/2207.07562v1.pdf',
		themes: ['Hybrid laboratory-field experiments'],
		tags: ['misinfo'],
		inPrep: true
	},
	{
		authors: 'Epstein*, Z., & Lin*, H.',
		year: 2022,
		title: 'Yourfeed: Towards open science and interoperable systems for social media',
		venue: 'arXiv',
		detail: '2207.07478v1',
		doi: 'http://arxiv.org/abs/2207.07478v1',
		pdf: 'https://arxiv.org/pdf/2207.07478v1.pdf',
		themes: ['Hybrid laboratory-field experiments']
	},
	{
		authors: 'Lin, H.',
		year: 2023,
		title: 'The scientific value of explanation and prediction (commentary)',
		venue: 'Behavioral and Brain Sciences',
		detail: '46, e399',
		doi: 'https://doi.org/10.1017/S0140525X23001735',
		pdf: 'Lin2023-BBS-scientific-value-explain-predict.pdf',
		themes: ['Philosophy of science and methods'],
		tags: ['philosophy']
	},
	{
		authors: 'Lin, H., Werner, K.M., & Inzlicht, M.',
		year: 2021,
		title: 'Promises and perils of experimentation: The mutual-internal-validity problem',
		venue: 'Perspectives on Psychological Science',
		detail: '16(4), 854-863',
		doi: 'https://doi.org/10.1177/1745691620974773',
		pdf: 'Lin2021experimentation.pdf',
		themes: ['Philosophy of science and methods'],
		tags: ['philosophy']
	},
	{
		authors: 'Fusco, G., Scandola, M., Lin, H., Inzlicht, M., & Aglioti, S.M.',
		year: 2024,
		title:
			'Modulating preferences during intertemporal choices through exogenous midfrontal transcranial alternating current stimulation: A registered report',
		venue: 'Cortex',
		detail: '171, 435-464',
		doi: 'https://doi.org/10.1016/j.cortex.2023.09.019',
		pdf: 'Fusco2024-tACS.pdf',
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['theta', 'registered-report']
	},
	{
		authors: 'Lin, H., Ristic, J., Inzlicht, M., & Otto, A.R.',
		year: 2022,
		title:
			'The average reward rate modulates behavioral and neural indices of effortful control allocation',
		venue: 'Journal of Cognitive Neuroscience',
		detail: '1-14',
		doi: 'https://doi.org/10.1162/jocn_a_01905',
		pdf: 'Lin2022-average-reward-rate.pdf',
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['eeg', 'theta']
	},
	{
		authors: 'Depow, G. J., Lin, H., & Inzlicht, M.',
		year: 2022,
		title: 'Cognitive effort for self, strangers, and charities',
		venue: 'Scientific Reports',
		detail: '12(1), 15009',
		doi: 'https://doi.org/10.1038/s41598-022-19163-y',
		pdf: 'DepowLinInzlicht2022.pdf',
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['effort']
	},
	{
		authors: 'Umemoto, A., Lin, H., & Holroyd, C. B.',
		year: 2022,
		title:
			'Electrophysiological measures of conflict and reward processing are associated with decisions to engage in physical effort',
		venue: 'Psychophysiology',
		detail: 'e14176',
		doi: 'https://doi.org/10.1111/psyp.14176',
		pdf: 'Umemoto2022.pdf',
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['effort', 'eeg']
	},
	{
		authors: 'Frömer*, R., Lin*, H., Wolf, C.K.D., Inzlicht, M., & Shenhav, A.',
		year: 2021,
		title: 'Expectations of reward and efficacy guide cognitive control allocation',
		venue: 'Nature Communications',
		detail: '12(1030), 1-11',
		doi: 'https://doi.org/10.1038/s41467-021-21315-z',
		pdf: 'https://rdcu.be/cfemg',
		extras: [{ label: 'code', href: 'https://github.com/froemero/reward-efficacy-evc-eeg' }],
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['effort', 'eeg', 'pupil']
	},
	{
		authors: 'Umemoto, A., Lin, H., & Inzlicht, M.',
		year: 2021,
		title:
			'Cost-benefit analysis in physical effort expenditure: An electrophysiological registered report (stage 1)',
		doi: 'https://doi.org/10.31234/osf.io/mc4by',
		pdf: 'Umemoto2021.pdf',
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['effort', 'eeg', 'theta', 'registered-report'],
		inPrep: true
	},
	{
		authors: 'Lin, H., Saunders, B., Friese, M., Evans, N. J., & Inzlicht, M.',
		year: 2020,
		title:
			'Strong effort manipulations reduce response caution: A preregistered reinvention of the ego-depletion paradigm',
		venue: 'Psychological Science',
		detail: '1-17',
		doi: 'https://doi.org/10.1177/0956797620904990',
		pdf: 'Lin2020depletion.pdf',
		extras: [{ label: 'supplement & code', href: 'https://github.com/hauselin/depletion_bayes' }],
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['depletion', 'effort', 'ddm', 'diffusion', 'brms', 'bayes']
	},
	{
		authors: 'Lin, H., & Vartanian, O.',
		year: 2018,
		title: 'A neuroeconomic framework for creative cognition',
		venue: 'Perspectives on Psychological Science',
		detail: '13(6), 655-677',
		doi: 'https://doi.org/10.1177/1745691618794945',
		pdf: 'Lin2018creativity.pdf',
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		]
	},
	{
		authors: 'Lin, H., Saunders, B., Hutcherson, C.A., & Inzlicht, M.',
		year: 2018,
		title:
			'Midfrontal theta and pupil dilation parametrically track subjective conflict (but also surprise) during intertemporal choice',
		venue: 'NeuroImage',
		detail: '172, 838-852',
		doi: 'https://doi.org/10.1016/j.neuroimage.2017.10.055',
		pdf: 'Lin2018theta.pdf',
		extras: [{ label: 'supplement', href: 'Lin2018thetaSupp.pdf' }],
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['eeg', 'pupil']
	},
	{
		authors: 'Saunders, B., Lin, H., Milyavskaya, M., & Inzlicht, M.',
		year: 2017,
		title: 'The emotive nature of conflict monitoring in the medial prefrontal cortex',
		venue: 'International Journal of Psychophysiology',
		detail: '119, 31-40',
		doi: 'https://doi.org/10.1016/j.ijpsycho.2017.01.004',
		pdf: 'Saunders2017emotionsMPFC.pdf',
		themes: [
			'Decision neuroscience and neurocognitive bases of cognitive control and effort allocation'
		],
		tags: ['eeg']
	},
	// search-only entries (not on the research page)
	{
		authors: 'Lin, H.',
		year: 2024,
		title: 'ollamar: An R package for running large language models',
		pdf: 'https://osf.io/zsrg5/download',
		tags: ['llm', 'r']
	},
	{
		authors: 'Lin, H.',
		year: 2024,
		title: 'External validity of social experiments',
		pdf: 'https://osf.io/ekm95/download'
	},
	{
		authors: 'Costello, T., et al.',
		year: 2023,
		title: 'A metacognitive blindspot in intellectual humility measures',
		pdf: 'https://osf.io/gux95/download'
	},
	{
		authors: 'Jones, B. C., et al.',
		year: 2021,
		title: 'To which world regions does the valence-dominance model of social perception apply?',
		venue: 'Nature Human Behaviour',
		pdf: 'Jones2021valence-dominance-social-perception.pdf',
		tags: ['open-science', 'replication']
	},
	{
		authors: 'Anderson, T., et al.',
		year: 2020,
		title:
			'The metronome response task for measuring mind wandering: Replication attempt and extension of three studies by Seli et al.',
		venue: 'Attention, Perception, & Psychophysics',
		pdf: 'Anderson2020MRT.pdf',
		tags: ['open-science', 'replication']
	},
	{
		authors: 'Ebersole, C. R., et al.',
		year: 2020,
		title:
			'Many Labs 5: Testing pre-data-collection peer review as an intervention to increase replicability',
		pdf: 'Ebersole2020manylabs5.pdf',
		tags: ['open-science', 'replication']
	},
	{
		authors: 'Chartier, C. R., et al.',
		year: 2020,
		title: 'Many Labs 5: Registered replication of Albarracín et al. (2008)',
		pdf: 'Chartier2020manylabs5.pdf',
		tags: ['open-science', 'replication']
	},
	{
		authors: 'Landy, J. F., et al.',
		year: 2020,
		title:
			'Crowdsourcing hypothesis tests: Making transparent how design choices shape research results',
		venue: 'Psychological Bulletin',
		pdf: 'Landy2020crowdsourcing.pdf',
		tags: ['open-science', 'philosophy']
	},
	{
		authors: 'Moshontz, H., et al.',
		year: 2018,
		title:
			'The Psychological Science Accelerator: Advancing psychology through a distributed collaborative network',
		venue: 'Advances in Methods and Practices in Psychological Science',
		pdf: 'Moshontz2018psa.pdf',
		tags: ['open-science']
	},
	{
		authors: 'Francis, Z., et al.',
		year: 2018,
		title: 'Development of a within-subject, repeated-measures ego-depletion paradigm',
		venue: 'Social Psychology',
		pdf: 'Francis2018depletion.pdf',
		tags: ['depletion', 'effort']
	}
];
