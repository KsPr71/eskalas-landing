import appData from "@/data/app.json";
import type {
	FAQItem,
	Feature,
	PricingTier,
	Review,
	SocialLink,
} from "@/types";

type SiteConfig = {
	name: string;
	url: string;
	description: string;
	logo: string;
	"logo-negative"?: string;
	keywords: string[];
	storeLinks: { apple: string; google: string };
	rating: { score: number; count: string };
	ageRating: string;
	version: string;
	minimumOS: string;
	releaseDate: string;
	social: SocialLink[];
};

/** All editable landing-page content lives in data/app.json. */
export const storeConfig = appData.storeConfig;
export const site = appData.site as SiteConfig;
export const features = appData.features as Feature[];
export const screenshots = appData.screenshots;
export const pricingTiers = appData.pricingTiers as PricingTier[];
export const reviews = appData.reviews as Review[];
export const faqs = appData.faqs as FAQItem[];
