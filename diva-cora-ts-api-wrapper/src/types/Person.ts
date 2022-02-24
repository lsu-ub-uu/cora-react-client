import { Record } from './Record';

export type Name = {
	familyName: string;
	givenName: string;
};

type ExternalUrl = {
	linkTitle: string;
	URL: string;
};

export interface Person extends Record {
	domains?: string[];

	authorisedName?: Name;

	academicTitle?: string;

	yearOfBirth?: string;

	yearOfDeath?: string;

	emailAddress?: string;

	alternativeNames?: Name[];

	externalURLs?: ExternalUrl[];

	otherAffiliation?: {
		name: string;
		fromYear?: string;
		untilYear?: string;
	};

	orcids?: string[];

	viafIDs?: string[];

	librisIDs?: string[];

	biographyEnglish?: string;

	biographySwedish?: string;

	personDomainParts?: {
		recordId: string;
	}[];
}
